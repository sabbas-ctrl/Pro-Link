/*
POST /api/sendMessage
body: { slug, name, email, message }
Uses FIREBASE_SERVICE_ACCOUNT_BASE64 to init admin SDK and find card owner email in Firestore
*/

const nodemailer = require('nodemailer')
const admin = require('firebase-admin')

module.exports = async (req, res) => {
  if (req.method !== 'POST') return res.status(405).send('Method Not Allowed')
  try{
    if(!admin.apps.length){
      if(!process.env.FIREBASE_SERVICE_ACCOUNT_BASE64) throw new Error('Missing service account env')
      const sa = JSON.parse(Buffer.from(process.env.FIREBASE_SERVICE_ACCOUNT_BASE64, 'base64').toString('utf8'))
      admin.initializeApp({ credential: admin.credential.cert(sa) })
    }
    const { slug, name, email, message } = req.body
    if(!slug || !message) return res.status(400).json({error:'missing'})

    const db = admin.firestore()
    const ref = db.collection('cards').doc(slug.toLowerCase())
    const doc = await ref.get()
    if(!doc.exists) return res.status(404).json({error:'card not found'})
    const card = doc.data()
    const ownerEmail = card.contactEmail || (card.ownerEmail) || process.env.FROM_EMAIL

    // send via nodemailer
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT||587),
      secure: false,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
    })

    const info = await transporter.sendMail({
      from: process.env.FROM_EMAIL,
      to: ownerEmail,
      subject: `Message via your card: ${card.name || slug}`,
      text: `From: ${name} <${email}>\n\n${message}`,
      html: `<p>From: <strong>${name}</strong> &lt;${email}&gt;</p><p>${message}</p>`
    })

    return res.status(200).json({ok:true, info})
  }catch(err){
    console.error(err)
    return res.status(500).json({error:err.message})
  }
}

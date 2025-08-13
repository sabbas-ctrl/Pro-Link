import React from 'react'
import { FaLinkedin, FaTwitter, FaInstagram, FaFacebook, FaWhatsapp, FaEnvelope, FaYoutube, FaTiktok } from 'react-icons/fa'
const Icon = ({ type, size=18 }) => {
  switch(type){
    case 'linkedin': return <FaLinkedin size={size} />
    case 'twitter': return <FaTwitter size={size} />
    case 'instagram': return <FaInstagram size={size} />
    case 'facebook': return <FaFacebook size={size} />
    case 'whatsapp': return <FaWhatsapp size={size} />
    case 'email': return <FaEnvelope size={size} />
    case 'youtube': return <FaYoutube size={size} />
    case 'tiktok': return <FaTiktok size={size} />
    default: return <FaEnvelope size={size} />
  }
}

export default function CardPreview({card, previewMode='light'}){
  if(!card) card = {}
  const bg = previewMode === 'light' ? (card.style?.lightBg || '#ffffff') : (card.style?.darkBg || '#0f172a')
  const downloadColor = card.style?.downloadColor || '#06b6d4'
  const sendColor = card.style?.sendColor || '#7c3aed'
  const publicUrl = `${import.meta.env.VITE_FRONTEND_BASE_URL || window.location.origin}/${card.slug || 'preview'}`

  const socials = card.socials || []

  return (
    <div className="max-w-md w-full rounded-xl shadow-xl overflow-hidden" style={{background:bg}}>
      <div className="p-6 text-gray-900 dark:text-gray-100">
        <div className="flex items-center gap-4">
          <img src={card.profileUrl || '/profile.jpg'} className="w-20 h-20 rounded-full object-cover border" alt="profile" />
          <div>
            <h3 className="text-2xl font-bold">{card.name || 'Your Name'}</h3>
            <p className="text-sm">{card.title || 'Title'}</p>
          </div>
        </div>
        <p className="mt-4 text-sm">{card.bio || 'Short bio about yourself...'}</p>

        <div className="mt-4 flex gap-3 flex-wrap">
          {socials.map(s => (
            s.url && <a key={s.type} href={s.url} target="_blank" rel="noreferrer" className="p-2 bg-white/60 rounded-full shadow">{<Icon type={s.type} />}</a>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-between">
          <a className="px-4 py-2 rounded" style={{background:downloadColor, color:'#fff'}}>Download</a>
          <button className="px-4 py-2 rounded" style={{background:sendColor, color:'#fff'}}>Send Message</button>
        </div>

        <div className="mt-4 text-center">
          {/* <QRCode value={publicUrl} size={96} /> */}
        </div>
      </div>
    </div>
  )
}

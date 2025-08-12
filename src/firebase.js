import { initializeApp } from 'firebase/app'
import { getFirestore, collection, addDoc, serverTimestamp, query, orderBy, onSnapshot } from 'firebase/firestore'
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth(app)

// Helpers
export const trackVisit = async (deviceType) => {
  try {
    await addDoc(collection(db, 'visits'), { deviceType, createdAt: serverTimestamp() })
  } catch (e) { console.error('visit track error', e) }
}

export const trackLinkClick = async (linkName) => {
  try {
    await addDoc(collection(db, 'linkClicks'), { linkName, createdAt: serverTimestamp() })
  } catch (e) { console.error('link click error', e) }
}

export const listenToClicks = (cb) => {
  const q = query(collection(db, 'linkClicks'), orderBy('createdAt', 'desc'))
  return onSnapshot(q, (snap) => {
    const items = snap.docs.map(d => ({ id: d.id, ...d.data() }))
    cb(items)
  })
}

export const adminSignIn = (email, password) => signInWithEmailAndPassword(auth, email, password)
export const adminSignOut = () => signOut(auth)

export default db

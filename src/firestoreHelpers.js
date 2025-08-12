import { doc, setDoc, getDoc } from 'firebase/firestore'
import { db } from './firebaseClient'

// Save or update card using slug as doc ID
export const saveCardBySlug = async (slug, data) => {
  const id = slug.toLowerCase()
  const ref = doc(db, 'cards', id)
  await setDoc(ref, { ...data, slug: id }, { merge: true })
  return id
}

export const getCardBySlug = async (slug) => {
  if(!slug) return null
  const id = slug.toLowerCase()
  const ref = doc(db, 'cards', id)
  const snap = await getDoc(ref)
  if(!snap.exists()) return null
  return snap.data()
}

export const isSlugAvailable = async (slug) => {
  if(!slug) return false
  const id = slug.toLowerCase()
  const ref = doc(db, 'cards', id)
  const snap = await getDoc(ref)
  return !snap.exists()
}

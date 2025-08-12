import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { getCardBySlug } from '../firestoreHelpers'
import CardPreview from '../components/CardPreview'

export default function PublicCard(){
  const { slug } = useParams()
  const [card, setCard] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    (async ()=>{
      const c = await getCardBySlug(slug)
      setCard(c)
      setLoading(false)
    })()
  },[slug])

  if(loading) return <div className="p-8">Loading...</div>
  if(!card) return <div className="p-8">Card not found</div>

  // Use theme background if provided
  const bg = card.style?.lightBg || '#f8fafc'

  return (
    <div className="min-h-screen flex items-center justify-center p-6" style={{background:bg}}>
      <CardPreview card={card} previewMode={'light'} />
    </div>
  )
}

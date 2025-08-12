import React, {useState, useEffect} from 'react'
import CardPreview from './CardPreview'
import { SketchPicker } from 'react-color'
import { isSlugAvailable, saveCardBySlug } from '../firestoreHelpers'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../firebaseClient'

const defaultCard = {
  name: 'Sabbas',
  title: 'Dev',
  bio: 'Build things that matter.',
  socials: [],
  style: { lightBg:'#ffffff', darkBg:'#0f172a', downloadColor:'#06b6d4', sendColor:'#7c3aed' },
  profileUrl: '/profile.jpg',
  slug: ''
}

export default function CardEditor({existing}){
  const [user] = useAuthState(auth)
  const [card, setCard] = useState(existing || defaultCard)
  const [previewMode, setPreviewMode] = useState('light')
  const [slugValid, setSlugValid] = useState(true)
  const [saving, setSaving] = useState(false)

  useEffect(()=>{
    if(!card.slug) setCard(c=>({...c, slug: (c.name||'').toLowerCase().replace(/\s+/g,'-') }))
  },[])

  const checkSlug = async (s) => {
    if(!s) return setSlugValid(false)
    const ok = await isSlugAvailable(s)
    setSlugValid(ok)
    return ok
  }

  const handleSave = async () => {
    if(!user){
      alert('Please sign in before saving your card')
      return
    }
    if(!card.slug) return alert('Provide a slug')
    setSaving(true)
    await saveCardBySlug(card.slug, { ...card, ownerId: user.uid, updatedAt: new Date().toISOString() })
    setSaving(false)
    alert('Saved! Published URL: '+ (import.meta.env.VITE_FRONTEND_BASE_URL || window.location.origin) +'/'+card.slug)
  }

  return (
    <div className="flex flex-col md:flex-row gap-6">
      <div className="flex-1">
        <div className="grid gap-3">
          <input value={card.name} onChange={e=>setCard({...card, name:e.target.value})} placeholder="Name" className="p-2 border rounded" />
          <input value={card.title} onChange={e=>setCard({...card, title:e.target.value})} placeholder="Title" className="p-2 border rounded" />
          <textarea value={card.bio} onChange={e=>setCard({...card, bio:e.target.value})} placeholder="Bio" className="p-2 border rounded h-28" />

          <div>
            <label className="block text-sm font-medium">Slug (url)</label>
            <input value={card.slug} onChange={e=>{setCard({...card, slug:e.target.value}); setSlugValid(true)}} placeholder="your-slug" className={`p-2 border rounded ${slugValid ? '' : 'border-red-500'}`}/>
            <button onClick={()=>checkSlug(card.slug)} className="ml-2 px-3 py-1 bg-gray-800 text-white rounded">Check</button>
            {!slugValid && <p className="text-red-500">Slug not available</p>}
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm">Light background</label>
              <SketchPicker color={card.style.lightBg} onChangeComplete={c=>setCard({...card, style:{...card.style, lightBg:c.hex}})} />
            </div>
            <div>
              <label className="block text-sm">Dark background</label>
              <SketchPicker color={card.style.darkBg} onChangeComplete={c=>setCard({...card, style:{...card.style, darkBg:c.hex}})} />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label>Download button color</label>
              <SketchPicker color={card.style.downloadColor} onChangeComplete={c=>setCard({...card, style:{...card.style, downloadColor:c.hex}})} />
            </div>
            <div>
              <label>Send button color</label>
              <SketchPicker color={card.style.sendColor} onChangeComplete={c=>setCard({...card, style:{...card.style, sendColor:c.hex}})} />
            </div>
          </div>

          <div>
            <label className="block font-medium">Socials</label>
            <p className="text-sm text-gray-500">Toggle a social then enter its URL</p>
            {['linkedin','twitter','instagram','facebook','whatsapp','email','youtube','tiktok','other'].map(type=>{
              const existing = card.socials?.find(s=>s.type===type)
              return (
                <div key={type} className="flex items-center gap-2 mt-2">
                  <input type="checkbox" checked={!!existing} onChange={e=>{
                    if(e.target.checked) setCard({...card, socials:[...(card.socials||[]), {type, url:''}]})
                    else setCard({...card, socials:(card.socials||[]).filter(s=>s.type!==type)})
                  }} />
                  <span className="capitalize w-24">{type}</span>
                  {existing && <input value={existing.url} onChange={e=>setCard({...card, socials:card.socials.map(s=>s.type===type?{...s,url:e.target.value}:s)})} placeholder="https://..." className="p-2 border rounded flex-1" />}
                </div>
              )
            })}
          </div>

          <div className="flex gap-2 mt-4">
            <button onClick={handleSave} disabled={saving} className="px-4 py-2 bg-blue-600 text-white rounded">Save & Publish</button>
          </div>
        </div>
      </div>

      <div className="w-full md:w-96">
        <div className="flex justify-between mb-2">
          <div>
            <button onClick={()=>setPreviewMode('light')} className="px-3 py-1 rounded bg-gray-200">Light</button>
            <button onClick={()=>setPreviewMode('dark')} className="ml-2 px-3 py-1 rounded bg-gray-800 text-white">Dark</button>
          </div>
        </div>
        <CardPreview card={card} previewMode={previewMode} />
      </div>
    </div>
  )
}

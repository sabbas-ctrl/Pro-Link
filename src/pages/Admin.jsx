import React, { useEffect, useState } from 'react'
import { listenToClicks } from '../firebase'

export default function Admin(){
  const [clicks, setClicks] = useState([])

  useEffect(()=>{
    const unsub = listenToClicks(setClicks)
    return () => unsub()
  },[])

  return (
    <div className="min-h-screen p-6 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      <p className="mt-2">Real-time link clicks</p>
      <div className="mt-4 grid gap-2">
        {clicks.map(c => (
          <div key={c.id} className="p-3 bg-white/60 dark:bg-gray-800/60 rounded-md">{c.linkName} — {c.createdAt?.toDate?.()?.toString() ?? '—'}</div>
        ))}
      </div>
    </div>
  )
}
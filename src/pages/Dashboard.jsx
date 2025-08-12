import React from 'react'
import { auth } from '../firebaseClient'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router-dom'

export default function Dashboard(){
  const [user, loading] = useAuthState(auth)
  const nav = useNavigate()

  if(loading) return <div className="p-6">Loading...</div>
  if(!user) return (
    <div className="p-6">Please sign in to access dashboard.</div>
  )

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold">Welcome, {user.email}</h2>
      <p className="mt-3">Use the editor to create your public card.</p>
      <div className="mt-4">
        <button onClick={()=>nav('/editor')} className="px-4 py-2 bg-blue-600 text-white rounded">Create / Edit Card</button>
      </div>
    </div>
  )
}
import React, {useState} from 'react'
import { auth, googleProvider } from '../firebaseClient'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

export default function AuthPage(){
  const [email,setEmail]=useState('')
  const [pass,setPass]=useState('')
  const [mode,setMode]=useState('signin')
  const nav = useNavigate()

  const submit = async ()=>{
    try{
      if(mode==='signin') await signInWithEmailAndPassword(auth,email,pass)
      else await createUserWithEmailAndPassword(auth,email,pass)
      nav('/dashboard')
    }catch(e){alert(e.message)}
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-br from-gray-900 to-gray-700">
      <div className="w-full max-w-md bg-white/10 backdrop-blur rounded-xl p-6">
        <h2 className="text-xl font-bold mb-4">Sign in / Sign up</h2>
        <input className="w-full p-2 rounded mb-2" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" />
        <input className="w-full p-2 rounded mb-4" value={pass} onChange={e=>setPass(e.target.value)} placeholder="Password" type="password" />
        <div className="flex gap-2">
          <button onClick={submit} className="px-4 py-2 bg-blue-600 text-white rounded">{mode==='signin'?'Sign In':'Sign Up'}</button>
          <button onClick={()=>signInWithPopup(auth, googleProvider)} className="px-4 py-2 bg-white/20 rounded">Google</button>
          <button onClick={()=>setMode(mode==='signin'?'signup':'signin')} className="px-4 py-2 ml-auto">Toggle</button>
        </div>
      </div>
    </div>
  )
}
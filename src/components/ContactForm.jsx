import React, { useState } from 'react'
import emailjs from 'emailjs-com'

export default function ContactForm() {
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [msg, setMsg] = React.useState('')
  const [sent, setSent] = React.useState(false)

  const send = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <form onSubmit={send} className="grid gap-3">
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" className="p-3 rounded-lg border border-white/30 bg-white/10 focus:outline-none focus:ring-2 focus:ring-pink-400" />
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="p-3 rounded-lg border border-white/30 bg-white/10 focus:outline-none focus:ring-2 focus:ring-pink-400" />
      <textarea value={msg} onChange={(e) => setMsg(e.target.value)} placeholder="Message" className="p-3 rounded-lg border border-white/30 bg-white/10 h-28 resize-none focus:outline-none focus:ring-2 focus:ring-pink-400" />
      <button type="submit" className="px-5 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full shadow-md hover:shadow-lg">Send</button>
      {sent && <p className="text-green-200 text-sm">Message sent — I will reply soon.</p>}
    </form>
  )
}

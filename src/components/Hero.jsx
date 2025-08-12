import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { trackVisit } from '../firebase'

const Hero = ({ name = 'Sabbas', role = 'Dev', tagline = 'Building smart things.' }) => {
  useEffect(() => {
    const isMobile = /Mobi|Android/i.test(navigator.userAgent) ? 'mobile' : 'desktop'
    trackVisit(isMobile)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center p-6">
      <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} className="max-w-xl w-full bg-white/60 dark:bg-gray-800/60 backdrop-blur rounded-2xl p-8 shadow-lg">
        <div className="flex items-center gap-4">
          <img src="/profile.jpg" alt="profile" className="w-20 h-20 rounded-full object-cover border-2" />
          <div>
            <h1 className="text-2xl font-bold">{name}</h1>
            <p className="text-sm">{role} • {tagline}</p>
          </div>
        </div>
        <p className="mt-4 text-gray-700 dark:text-gray-200">Quick links below — click to connect. Links are tracked for analytics.</p>
      </motion.div>
    </section>
  )
}

export default Hero
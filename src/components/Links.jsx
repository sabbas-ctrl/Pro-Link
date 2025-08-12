import React from 'react'
import { trackLinkClick } from '../firebase'
import { motion } from "framer-motion";

export default function Links({ links }) {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {links.map(({ name, href }) => (
        <motion.button
          whileHover={{ scale: 1.05 }}
          key={name}
          onClick={() => window.open(href, '_blank')}
          className="px-5 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full shadow-md hover:shadow-lg focus:outline-none"
        >
          {name}
        </motion.button>
      ))}
    </div>
  )
}

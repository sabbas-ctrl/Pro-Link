import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function BusinessCard() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-sm p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl text-center"
      >
        <img
          src="https://via.placeholder.com/120"
          alt="Profile"
          className="w-28 h-28 rounded-full mx-auto mb-4 border-4 border-white/30 shadow-lg"
        />
        <h1 className="text-2xl font-bold text-white">Sabbas</h1>
        <p className="text-gray-300 mb-4">Dev • Building smart things</p>

        <div className="flex justify-center gap-4 mb-6">
          <a href="#" className="text-gray-300 hover:text-white text-xl"><FaGithub /></a>
          <a href="#" className="text-gray-300 hover:text-blue-400 text-xl"><FaLinkedin /></a>
          <a href="#" className="text-gray-300 hover:text-green-400 text-xl"><FaWhatsapp /></a>
          <a href="#" className="text-gray-300 hover:text-red-400 text-xl"><FaEnvelope /></a>
        </div>

        <a
          href="#"
          className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full shadow-lg hover:scale-105 transition-transform"
        >
          Download vCard
        </a>
      </motion.div>
    </div>
  );
}

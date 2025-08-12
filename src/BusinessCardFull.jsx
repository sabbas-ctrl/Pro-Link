import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope, FaInstagram, FaFacebook } from "react-icons/fa";

export default function BusinessCardFull() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white p-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20">
        
        {/* Left Section - Profile & Bio */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center md:items-start text-center md:text-left"
        >
          <img
            src="/profile.jpg"
            alt="Sabbas"
            className="w-40 h-40 rounded-full border-4 border-white/30 shadow-lg mb-6"
          />
          <h1 className="text-4xl font-bold">Sabbas</h1>
          <p className="text-lg text-gray-300 mt-2">Developer • Building smart solutions</p>
          <p className="mt-4 text-gray-400 max-w-md">
            Passionate about crafting digital experiences that are clean, modern, and impactful.
            Experienced in full-stack development, automation, and innovative system design.
          </p>

          {/* Social Links */}
          <div className="flex gap-5 mt-6">
            <a href="https://github.com/sabbas-ctrl" className="hover:text-gray-100 text-2xl"><FaGithub /></a>
            <a href="#" className="hover:text-pink-400 text-2xl"><FaInstagram /></a>
            <a href="#" className="hover:text-blue-400 text-2xl"><FaFacebook /></a>
            <a href="https://wa.me/923145218028?text=I%27m%20Just%20saw%20your%20Online%20Business%20Card" className="hover:text-green-400 text-2xl"><FaWhatsapp /></a>
            <a href="#" className="hover:text-red-400 text-2xl"><FaEnvelope /></a>
          </div>

          {/* Download Button */}
          <a
            href="#"
            className="mt-6 inline-block bg-gradient-to-r from-blue-500 to-purple-500 px-5 py-2 rounded-full shadow-lg hover:scale-105 transition-transform"
          >
            Download vCard
          </a>
        </motion.div>

        {/* Right Section - Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="w-full md:w-1/2 bg-white/10 backdrop-blur-lg rounded-xl p-6 shadow-xl"
        >
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="bg-white/20 p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="bg-white/20 p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="bg-white/20 p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-500 to-purple-500 px-5 py-2 rounded-lg shadow-lg hover:scale-105 transition-transform"
            >
              Send Message
            </button>
          </form>
        </motion.div>

      </div>
    </div>
  );
}

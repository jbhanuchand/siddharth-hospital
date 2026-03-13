import { Link } from "react-router-dom"
import { useState } from "react"
import { FaBars, FaTimes, FaPhone } from "react-icons/fa"
import logo from "../assets/hospital_logo.jpg"

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false)

  return (

    <nav className="sticky top-0 z-50 bg-[#1E3A8A] text-white shadow-md">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}

        <Link to="/" className="flex items-center gap-3">
          <img src={logo} className="h-10" />
          <span className="text-xl font-semibold">
            Siddarth Hospital
          </span>
        </Link>

        {/* Desktop Nav */}

        <div className="hidden md:flex items-center gap-8">

          <Link to="/doctors">Doctors</Link>
          <Link to="/specialities">Specialities</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/careers">Careers</Link>
          <Link to="/contact">Contact</Link>

          {/* Phone */}

          <a
            href="tel:+919908586064"
            className="flex items-center gap-2 text-sm font-medium hover:text-emerald-300"
          >
            <FaPhone className="scale-x-[-1]" />
            9908586064
          </a>

          {/* Appointment Button */}

          <a
            href="https://book-appointment.healthplix.com/dr-sankar-narayana-paediatrics-anantapur--anantapur#"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-500 px-4 py-2 rounded-lg font-semibold hover:bg-emerald-600 transition"
          >
            Book Appointment
          </a>

        </div>

        {/* Mobile Menu Button */}

        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Menu */}

      {menuOpen && (

        <div className="md:hidden flex flex-col gap-4 px-6 pb-6">

          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/doctors" onClick={() => setMenuOpen(false)}>Doctors</Link>
          <Link to="/specialities" onClick={() => setMenuOpen(false)}>Specialities</Link>
          <Link to="/gallery" onClick={() => setMenuOpen(false)}>Gallery</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>

          <a href="tel:+919876543210" className="flex items-center gap-2">
            <FaPhone /> 98765 43210
          </a>

          <a
            href="https://booking-website.com"
            target="_blank"
            className="bg-emerald-500 px-4 py-2 rounded-lg text-center"
          >
            Book Appointment
          </a>

        </div>

      )}

    </nav>
  )
}
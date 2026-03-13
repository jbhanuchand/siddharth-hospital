import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"
import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer className="bg-gray-900 mt-16">

      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-left">

        {/* Hospital Info */}
        <div className="text-left">
          <h2 className="text-lg font-bold mb-4 !text-white">
            Siddharth Hospital
        </h2>

          <p className="text-gray-400">
            Providing quality healthcare with modern facilities and expert doctors.
          </p>
        </div>


        {/* Quick Links */}
        <div className="text-left">
          <h3 className="text-lg font-semibold mb-4 text-white">
            Quick Links
          </h3>

          <ul className="space-y-2 text-gray-400">

            <li>
              <Link to="/" className="hover:text-white">Home</Link>
            </li>

            <li>
              <Link to="/doctors" className="hover:text-white">Doctors</Link>
            </li>

            <li>
              <Link to="/specialities" className="hover:text-white">Specialities</Link>
            </li>

            <li>
              <Link to="/gallery" className="hover:text-white">Gallery</Link>
            </li>

            <li>
              <Link to="/contact" className="hover:text-white">Contact</Link>
            </li>

          </ul>
        </div>


        {/* Contact */}
        <div className="text-left">
          <h3 className="text-lg font-semibold mb-4 text-white">
            Contact
          </h3>

          <div className="space-y-3 text-gray-400">

            <div className="flex items-start gap-3">
              <FaPhone className="mt-1 w-4 text-white scale-x-[-1]" />
              <a href="tel:+919908586064" className="hover:text-white">
                +91 9908586064
              </a>
            </div>

            <div className="flex items-start gap-3">
              <FaEnvelope className="mt-1 w-4 text-white" />
              <a
                href="mailto:drhimajasankar@gmail.com"
                className="hover:text-white break-all"
              >
                drhimajasankar@gmail.com
              </a>
            </div>

            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="mt-1 w-4 text-white" />
              <span>
                Anantapur, Andhra Pradesh
              </span>
            </div>

          </div>
        </div>

      </div>


      {/* Bottom */}
      <div className="border-t border-gray-700 text-center py-4 text-gray-500">
        © {new Date().getFullYear()} Siddharth Hospital. All rights reserved.
      </div>

    </footer>
  )
}
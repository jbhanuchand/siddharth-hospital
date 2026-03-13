import { useState } from "react"
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"

export default function Contact() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    console.log({
      name,
      email,
      message
    })

    alert("Message sent!")

    setName("")
    setEmail("")
    setMessage("")
  }

  return (
    <div className="p-10">

      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-blue-700">
          Contact Us
        </h1>

        <p className="text-gray-600 mt-2">
          Get in touch with our hospital team
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* Contact Info */}

<div className="bg-white shadow-md p-6 rounded-lg">

  <h2 className="text-2xl font-semibold mb-6">
    Contact Information
  </h2>

  <div className="space-y-6">

    <div className="flex items-start gap-3">
      <FaPhone className="text-blue-700 text-xl scale-x-[-1] mt-1" />
      <span>+91 9908586064</span>
    </div>

    <div className="flex items-start gap-3">
      <FaEnvelope className="text-blue-700 text-xl mt-1" />
      <span>drhimajasankar@gmail.com</span>
    </div>

<div className="flex items-start gap-3">
  <FaMapMarkerAlt className="text-blue-700 text-xl mt-1 flex-shrink-0" />
  <span className="flex-1 text-gray-700 leading-relaxed text-left">
    Gooty Rd, opp. Rajahamsa guest house, Anantapur, Andhra Pradesh 515001
  </span>
</div>

  </div>

  <div className="mt-8">

  <iframe
    src="https://maps.google.com/maps?q=14.691923,77.602947&z=14&output=embed"
    width="100%"
    height="250"
    style={{ border: 0 }}
    loading="lazy"
  ></iframe>

</div>

</div>


        {/* Contact Form */}

        <div className="bg-white shadow-md p-6 rounded-lg">

          <h2 className="text-2xl font-semibold mb-6">
            Send Us a Message
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">

            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border p-3 rounded"
              required
            />

            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border p-3 rounded"
              required
            />

            <textarea
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full border p-3 rounded"
              rows={4}
              required
            />

            <button
              type="submit"
              className="bg-blue-700 text-white px-6 py-3 rounded hover:bg-blue-800"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>

    </div>
  )
}
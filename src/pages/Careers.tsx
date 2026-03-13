import { FaPhone } from "react-icons/fa"

function Careers() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">

      <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">
        Careers at Siddharth Hospital
      </h1>

      <div className="bg-white shadow-md rounded-lg p-8">

        <p className="text-gray-700 leading-relaxed mb-6">
          Join our team at <span className="font-semibold">Siddharth Hospital</span> and be part of a
          growing healthcare institution dedicated to providing
          <span className="font-medium"> quality and compassionate medical care</span>.
        </p>

        <p className="text-gray-700 leading-relaxed mb-6">
          We are currently looking for qualified and passionate
          <span className="font-semibold"> OBG specialists</span> as well as doctors from
          other departments who are committed to delivering excellent patient care.
        </p>

        <p className="text-gray-700 leading-relaxed mb-8">
          If you are interested in working in a professional and supportive
          medical environment, we would love to hear from you.
        </p>

        <div className="flex items-center justify-center gap-3 bg-green-50 border border-green-200 rounded-lg p-4">

          <FaPhone className="text-green-600 scale-x-[-1]" />

          <a
            href="tel:+919908586064"
            className="text-lg font-semibold text-green-700 hover:underline"
          >
            Contact: +91 9908586064
          </a>

        </div>

      </div>

    </div>
  )
}

export default Careers
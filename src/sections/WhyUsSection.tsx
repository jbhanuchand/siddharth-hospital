import { FaStethoscope, FaClock, FaHandsHelping } from "react-icons/fa"

export default function WhyUsSection() {

  const features = [
    {
      title: "Advanced Machinery",
      desc: "Modern diagnostic and treatment equipment",
      icon: <FaStethoscope />
    },
    {
      title: "24/7 Support",
      desc: "Emergency and critical care anytime",
      icon: <FaClock />
    },
    {
      title: "Compassionate Care",
      desc: "Patient-first approach with skilled staff",
      icon: <FaHandsHelping />
    },
  ]

  return (
    <section className="bg-gray-50 py-16">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center mb-12">
          Why Siddarth Hospital
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {features.map((item, i) => (

            <div
              key={i}
              className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition text-center"
            >

              <div className="text-4xl text-blue-900 mb-4 flex justify-center">
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold">
                {item.title}
              </h3>

              <p className="text-gray-600 mt-2">
                {item.desc}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}
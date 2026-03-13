import { specialities } from "../data/specialities"

export default function SpecialitiesSection() {

  return (
    <section className="py-16 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center mb-12">
          Our Specialities
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

          {specialities.map((item, i) => (

            <div
              key={i}
              className="bg-white shadow-md rounded-xl p-8 text-center hover:shadow-xl transition"
            >

              <div className="text-4xl text-blue-900 mb-4 flex justify-center">
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold">
                {item.name}
              </h3>

              <p className="text-gray-600 mt-2">
                {item.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}
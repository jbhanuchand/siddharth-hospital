import { doctors } from "../data/doctors"

export default function DoctorsSection() {

  return (
    <section className="py-14">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          Our Doctors
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

          {doctors.map((doc, i) => (

            <div
                key={i}
                className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition transform hover:-translate-y-1"
            >

                  <img
                    src={
                        doc.imageurl ||
                        new URL(`../assets/${doc.imageasset}`, import.meta.url).href
                    }
                    alt={doc.name}
                    className="w-full h-72 object-cover"
                    />

              <div className="p-4">

                <h3 className="text-lg font-semibold">
                  {doc.name}
                </h3>

                <p className="text-blue-900 font-medium text-sm">
                    {doc.speciality}
                </p>

                <p className="text-gray-500 text-sm mt-2">
                  {doc.description}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}
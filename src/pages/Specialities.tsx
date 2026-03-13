import SpecialityCard from "../components/SpecialityCard"
import { specialities } from "../data/specialities"

export default function Specialities() {
  return (
    <div className="p-10">

      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-blue-700">
          Our Specialities
        </h1>

        <p className="text-gray-600 mt-2">
          Advanced treatments across multiple medical fields
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

        {specialities.map((s) => (
          <SpecialityCard key={s.id} speciality={s} />
        ))}

      </div>

    </div>
  )
}
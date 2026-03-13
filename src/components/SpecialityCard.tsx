import type { Speciality } from "../types/speciality"

interface Props {
  speciality: Speciality
}

export default function SpecialityCard({ speciality }: Props) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition max-w-sm">

      <div className="mb-4 flex justify-center">
        {speciality.icon}
      </div>

      <h2 className="text-xl font-semibold text-center">
        {speciality.name}
      </h2>

      <p className="text-gray-600 mt-2 text-center text-sm">
        {speciality.description}
      </p>
      
      <hr className="my-4 border-gray-200" />

      <p className="text-gray-600 mt-6 text-sm leading-relaxed text-left">
        {speciality.detailedDescription}
      </p>

    </div>
  )
}
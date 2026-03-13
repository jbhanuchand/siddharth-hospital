import type { Doctor } from "../types/doctor"

interface Props {
  doctor: Doctor
}

export default function DoctorCard({ doctor }: Props) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 text-center">

<img
  src={
    doctor.imageurl ||
    new URL(`../assets/${doctor.imageasset}`, import.meta.url).href
  }
  alt={doctor.name}
  className="w-45 h-45 mx-auto rounded-full object-cover"
/>
      <h2 className="text-xl font-semibold mt-4">
        {doctor.name}
      </h2>

      <p className="text-gray-600">
        {doctor.speciality}
      </p>

      <p className="text-sm text-gray-500">
        {doctor.experience} years experience
      </p>

    </div>
  )
}
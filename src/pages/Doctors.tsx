import DoctorCard from "../components/DoctorCard"
import { doctors } from "../data/doctors"

export default function Doctors() {
  return (
    <div className="p-10">

      <h1 className="text-3xl font-bold mb-8">
        Our Doctors
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {doctors.map((doctor) => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))}

      </div>

    </div>
  )
}
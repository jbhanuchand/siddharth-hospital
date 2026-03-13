import type { Speciality } from "../types/speciality"

import { FaHeartbeat, FaUserMd, FaBaby } from "react-icons/fa"

export const specialities: Speciality[] = [
  {
    id: 1,
    name: "Pediatrics",
    description: "Comprehensive care for infants and children",
    detailedDescription: "Our Pediatrics Department offers expert care for newborns, infants, and children, focusing on healthy growth and development. We provide services including newborn care, vaccinations, growth monitoring, nutrition guidance, and treatment for common childhood illnesses. With a child-friendly approach and personalized care, our pediatric specialists ensure a safe and comfortable environment for every child. We emphasize preventive care and early diagnosis, helping children stay healthy and giving parents confidence in their child’s care.",
    icon: <FaBaby size={40} className="text-blue-600" />
  },
  {
    id: 2,
    name: "Neonatal Care",
    description: "Advanced NICU for newborn babies",
    detailedDescription: "Our Neonatal Services provide specialized care for newborns, including premature and high-risk babies. Equipped with advanced neonatal monitoring systems, incubators, and life-support equipment, our facility ensures the highest level of safety and medical support. Our experienced neonatology team focuses on early diagnosis, intensive care, and continuous monitoring to support healthy development during the critical first days of life. We also work closely with parents, offering guidance and compassionate support to ensure the best possible start for every newborn.",
    icon: <FaHeartbeat className="text-blue-600" />
  },
  {
    id: 3,
    name: "OBG",
    description: "Expert maternity and women's healthcare",
    detailedDescription: "Our Obstetrics & Gynecology (OBG) Department provides comprehensive care for women at every stage of life. We offer expert services including pregnancy care, safe delivery, high-risk pregnancy management, fertility guidance, and treatment for gynecological conditions. Equipped with modern diagnostic tools and advanced maternity facilities, our experienced doctors focus on safe, personalized care for both mother and baby. With a compassionate approach and emphasis on preventive health, we ensure women receive trusted medical support for a healthy pregnancy and overall well-being.",
    icon: <FaUserMd size={40} className="text-blue-600" />
  }
]

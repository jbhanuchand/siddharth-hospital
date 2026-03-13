import heroImage from '../assets/banner.png'
import { FaPhone } from "react-icons/fa"

export default function HeroSection() {

  return (
    <section
      className="relative h-[520px] flex items-center"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >

      {/* Dark overlay for readability */}

      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative max-w-7xl mx-auto px-6 w-full">

        {/* LEFT TEXT BLOCK */}

        <div className="text-white max-w-xl">

          <h1 className="text-4xl md:text-5xl font-bold mb-4 !text-white">
            Expert Care for Little Ones, Any Time of Day.
          </h1>

          <p className="text-lg mb-6">
                Your 24/7 partner in pediatric and maternal health. Whether it is a routine checkup or a late-night emergency,
                our specialized doctors and advanced NICU facilities are always ready to provide compassionate, world-class care.
          </p>
        </div>

        {/* PHONE CARD ON RIGHT */}

        <div className="hidden md:flex absolute right-10 top-1/2 -translate-y-1/2">

          <a
            href="tel:+919908586064"
            className="flex items-center gap-2 text-sm font-medium hover:text-emerald-300"
          >

          <div className="bg-white/10 backdrop-blur-md text-white p-6 rounded-xl">
            <p className="text-3xl font-bold mt-2">
              9908586064
            </p>

            <p className="flex items-center gap-3 text-sm">
                <FaPhone className="scale-x-[-1]" />
                <span> 24/7 Emergency Support</span>
            </p>

          </div>

          </a>

        </div>

      </div>

    </section>
  )
}

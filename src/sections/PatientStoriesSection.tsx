import { useRef } from "react"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
import { patientStories as stories } from "../data/patientstories"      

export default function PatientStoriesSection() {

  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {

    if (!scrollRef.current) return

    const scrollAmount = 350

    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    })
  }

  return (
    <section className="py-16 bg-gray-100">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center mb-10">
          Patient Stories
        </h2>

        <div className="relative">

          {/* Left Button */}

          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-blue-900 text-white p-3 rounded-full shadow"
          >
            <FaChevronLeft />
          </button>

          {/* Scroll Container */}

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory px-10"
          >

            {stories.map((s, i) => (

              <div
                key={i}
                className="min-w-[300px] bg-white p-6 rounded-xl shadow-md snap-center"
              >

                <p className="text-gray-600">
                  "{s.story}"
                </p>

                <p className="mt-4 font-semibold text-blue-900">
                  — {s.name}
                </p>

              </div>

            ))}

          </div>

          {/* Right Button */}

          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-blue-900 text-white p-3 rounded-full shadow"
          >
            <FaChevronRight />
          </button>

        </div>

      </div>

    </section>
  )
}
import { useState } from "react"
import { galleryImages } from "../data/gallery"
import GalleryCard from "../components/GalleryCard"

export default function Gallery() {

  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <div className="p-10">

      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-blue-700">
          Hospital Gallery
        </h1>

        <p className="text-gray-600 mt-2">
          Explore our world-class facilities
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {galleryImages.map((img) => (
          <GalleryCard
            key={img.id}
            url={img.url}
            onClick={() => setSelectedImage(img.url)}
          />
        ))}

      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            className="max-w-3xl rounded-lg"
          />
        </div>
      )}

    </div>
  )
}
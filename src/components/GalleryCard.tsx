interface Props {
  url: string
  onClick: () => void
}

export default function GalleryCard({ url, onClick }: Props) {
  return (
    <div
      className="overflow-hidden rounded-lg shadow-md cursor-pointer"
      onClick={onClick}
    >
      <img
        src={url}
        className="w-full h-60 object-cover hover:scale-110 transition duration-300"
      />
    </div>
  )
}
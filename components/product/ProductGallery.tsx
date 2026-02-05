interface ProductGalleryProps {
  imageSrc: string;
  alt: string;
}

export default function ProductGallery({ imageSrc, alt }: ProductGalleryProps) {
  return (
    <div className="lg:col-span-7">
      <div className="sticky top-28">
        <div className="aspect-square rounded-2xl overflow-hidden bg-secondary/10 border border-secondary/30 mb-6">
          <img
            alt={alt}
            className="w-full h-full object-cover"
            src={imageSrc}
          />
        </div>
      </div>
    </div>
  );
}

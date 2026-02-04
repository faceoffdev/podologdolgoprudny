'use client'

import { useState } from 'react'
import Image from 'next/image'
import Lightbox from 'yet-another-react-lightbox'
import Zoom from 'yet-another-react-lightbox/plugins/zoom'
import 'yet-another-react-lightbox/styles.css'

export type GalleryImage = {
  src: string
  alt: string
}

type GallerySectionProps = {
  title: string
  description?: string
  images: GalleryImage[]
  columns: string
  sizes: string
  sectionClassName?: string
}

export function GallerySection({
  title,
  description,
  images,
  columns,
  sizes,
  sectionClassName = 'py-12 lg:py-20',
}: GallerySectionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <section className={sectionClassName}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">{title}</h2>
          {description ? <p className="text-slate-600 mt-3">{description}</p> : null}
        </div>
        <div className={`grid ${columns} gap-4`}>
          {images.map((item, index) => (
            <button
              key={item.src}
              type="button"
              className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-slate-100 bg-white"
              onClick={() => setActiveIndex(index)}
              aria-label={`Открыть фото: ${item.alt}`}
            >
              <Image src={item.src} alt={item.alt} fill sizes={sizes} className="object-cover" />
            </button>
          ))}
        </div>
      </div>

      <Lightbox
        open={activeIndex !== null}
        close={() => setActiveIndex(null)}
        index={activeIndex ?? 0}
        slides={images.map((image) => ({ src: image.src, alt: image.alt }))}
        plugins={[Zoom]}
        carousel={{ finite: true }}
        zoom={{ maxZoomPixelRatio: 2 }}
      />
    </section>
  )
}

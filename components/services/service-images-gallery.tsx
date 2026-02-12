'use client'

import { useState } from 'react'
import Image from 'next/image'
import Lightbox from 'yet-another-react-lightbox'
import Zoom from 'yet-another-react-lightbox/plugins/zoom'
import 'yet-another-react-lightbox/styles.css'
import type { ServiceImage } from '@/lib/services'

type ServiceImagesGalleryProps = {
  images: readonly ServiceImage[]
}

export function ServiceImagesGallery({ images }: ServiceImagesGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <>
      <div className="grid gap-3 sm:grid-cols-2 pt-2">
        {images.map((item, index) => (
          <figure key={`${item.src}-${item.alt}`} className="overflow-hidden rounded-xl border border-slate-100">
            <button type="button" className="block w-full text-left" onClick={() => setActiveIndex(index)}>
              <Image src={item.src} alt={item.alt} width={1200} height={800} className="h-56 w-full object-cover" />
            </button>
            {item.caption && <figcaption className="px-3 py-2 text-sm text-slate-500">{item.caption}</figcaption>}
          </figure>
        ))}
      </div>

      <Lightbox
        open={activeIndex !== null}
        close={() => setActiveIndex(null)}
        index={activeIndex ?? 0}
        slides={images.map((image) => ({ src: image.src, alt: image.alt }))}
        plugins={[Zoom]}
        carousel={{ finite: true }}
      />
    </>
  )
}

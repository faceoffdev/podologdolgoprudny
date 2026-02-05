'use client'

import { useMemo, useRef, useState } from 'react'
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
  const [activeSlide, setActiveSlide] = useState(0)
  const carouselRef = useRef<HTMLDivElement | null>(null)
  const itemRefs = useRef<Array<HTMLButtonElement | null>>([])

  const normalizedImages = useMemo(() => images, [images])

  const updateActiveSlide = () => {
    const container = carouselRef.current
    if (!container) return
    const containerCenter = container.scrollLeft + container.clientWidth / 2
    let bestIndex = 0
    let bestDistance = Number.POSITIVE_INFINITY

    itemRefs.current.forEach((item, index) => {
      if (!item) return
      const itemCenter = item.offsetLeft + item.clientWidth / 2
      const distance = Math.abs(containerCenter - itemCenter)
      if (distance < bestDistance) {
        bestDistance = distance
        bestIndex = index
      }
    })

    setActiveSlide(bestIndex)
  }

  const scrollToSlide = (index: number) => {
    const item = itemRefs.current[index]
    if (!item) return
    item.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
  }

  const handlePrev = () => {
    const nextIndex = Math.max(activeSlide - 1, 0)
    scrollToSlide(nextIndex)
  }

  const handleNext = () => {
    const nextIndex = Math.min(activeSlide + 1, normalizedImages.length - 1)
    scrollToSlide(nextIndex)
  }

  return (
    <section className={sectionClassName}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">{title}</h2>
          {description ? <p className="text-slate-600 mt-3">{description}</p> : null}
        </div>

        <div className="md:hidden">
          <div className="relative">
            <div
              ref={carouselRef}
              className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4"
              onScroll={updateActiveSlide}
            >
              {normalizedImages.map((item, index) => (
                <button
                  key={item.src}
                  type="button"
                  ref={(el) => {
                    itemRefs.current[index] = el
                  }}
                  className="relative aspect-[4/3] w-[85%] flex-none snap-center overflow-hidden rounded-2xl border border-slate-100 bg-white"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Открыть фото: ${item.alt}`}
                >
                  <Image src={item.src} alt={item.alt} fill sizes={sizes} className="object-cover" />
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={handlePrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full border border-slate-200 bg-white/90 px-3 py-2 text-sm font-medium text-slate-700 shadow-sm"
              aria-label="Предыдущее фото"
            >
              ←
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full border border-slate-200 bg-white/90 px-3 py-2 text-sm font-medium text-slate-700 shadow-sm"
              aria-label="Следующее фото"
            >
              →
            </button>
          </div>

          <div className="mt-4 flex justify-center gap-2">
            {normalizedImages.map((item, index) => (
              <button
                key={`${item.src}-dot`}
                type="button"
                onClick={() => scrollToSlide(index)}
                className={`h-2.5 w-2.5 rounded-full transition ${
                  index === activeSlide ? 'bg-primary' : 'bg-slate-300'
                }`}
                aria-label={`Перейти к фото ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className={`hidden md:grid ${columns} gap-4`}>
          {normalizedImages.map((item, index) => (
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
        slides={normalizedImages.map((image) => ({ src: image.src, alt: image.alt }))}
        plugins={[Zoom]}
        carousel={{ finite: true }}
      />
    </section>
  )
}

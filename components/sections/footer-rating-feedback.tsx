'use client'

import { FormEvent, useEffect, useState } from 'react'
import { Star, X } from 'lucide-react'
import { aggregateRating } from '@/lib/site-config'

export function FooterRatingFeedback() {
  const [isRatingFormOpen, setIsRatingFormOpen] = useState(false)
  const [ratingValue, setRatingValue] = useState<number>(5)
  const [comment, setComment] = useState('')
  const [name, setName] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    if (!isRatingFormOpen) {
      return
    }

    const onEscClose = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsRatingFormOpen(false)
      }
    }

    window.addEventListener('keydown', onEscClose)
    return () => window.removeEventListener('keydown', onEscClose)
  }, [isRatingFormOpen])

  const openRatingForm = () => {
    setIsSubmitted(false)
    setIsRatingFormOpen(true)
  }

  const closeRatingForm = () => {
    if (isSubmitting) {
      return
    }

    setIsRatingFormOpen(false)
  }

  const handleRatingSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)

    const payload = {
      ratingValue,
      comment: comment.trim(),
      name: name.trim() || null,
      sentAt: new Date().toISOString(),
      source: 'footer-quality-form',
    }

    await fetch('/__site-quality-feedback__', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
      keepalive: true,
    }).catch(() => null)

    await new Promise((resolve) => setTimeout(resolve, 500))

    setIsSubmitted(true)
    setIsSubmitting(false)
    setComment('')
    setName('')
    setRatingValue(5)
  }

  return (
    <>
      <div itemProp="aggregateRating" itemScope itemType="https://schema.org/AggregateRating" className="sr-only">
        <meta itemProp="ratingValue" content={aggregateRating.ratingValue.toFixed(1)} />
        <meta itemProp="reviewCount" content={String(aggregateRating.reviewCount)} />
        <meta itemProp="ratingCount" content={String(aggregateRating.ratingCount)} />
        <meta itemProp="bestRating" content={String(aggregateRating.bestRating)} />
        <meta itemProp="worstRating" content={String(aggregateRating.worstRating)} />
      </div>

      <button
        type="button"
        onClick={openRatingForm}
        className="mt-4 inline-flex items-center gap-3 text-slate-400 hover:text-primary transition-colors"
      >
        <Star className="w-5 h-5 text-white flex-shrink-0" />
        <span>Оценить качество сайта</span>
      </button>

      {isRatingFormOpen ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 px-4 py-8"
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              closeRatingForm()
            }
          }}
        >
          <div className="w-full max-w-xl rounded-2xl bg-white p-6 text-slate-900 shadow-2xl">
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <p className="text-xl font-semibold">Оцените качество сайта</p>
                <p className="mt-1 text-sm text-slate-600">Это форма для оставления обратной связи.</p>
              </div>
              <button
                type="button"
                className="rounded-md p-1 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-700"
                onClick={closeRatingForm}
                aria-label="Закрыть форму оценки"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {isSubmitted ? (
              <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-4 mb-4 text-sm text-emerald-700">
                Спасибо! Оценка отправлена.
              </div>
            ) : null}

            <form className="space-y-5" onSubmit={handleRatingSubmit}>
              <fieldset>
                <legend className="mb-2 text-sm font-medium text-slate-700">Ваша оценка</legend>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map((value) => (
                    <button
                      key={value}
                      type="button"
                      onClick={() => setRatingValue(value)}
                      className="rounded-md p-1.5 transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                      aria-label={`Поставить ${value} из 5`}
                    >
                      <Star
                        className={
                          value <= ratingValue ? 'h-7 w-7 fill-amber-400 text-amber-400' : 'h-7 w-7 text-slate-300'
                        }
                      />
                    </button>
                  ))}
                  <span className="ml-1 text-sm text-slate-600">{ratingValue} из 5</span>
                </div>
              </fieldset>

              <label className="block">
                <span className="mb-2 block text-sm font-medium text-slate-700">Комментарий</span>
                <textarea
                  required
                  minLength={5}
                  value={comment}
                  onChange={(event) => setComment(event.target.value)}
                  className="h-28 w-full resize-none rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/20"
                  placeholder="Что понравилось или что можно улучшить?"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-medium text-slate-700">Имя (необязательно)</span>
                <input
                  type="text"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  className="h-11 w-full rounded-lg border border-slate-300 px-3 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/20"
                  placeholder="Как к вам обращаться"
                />
              </label>

              <div className="flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
                <button
                  type="button"
                  onClick={closeRatingForm}
                  className="h-11 rounded-lg border border-slate-300 px-4 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50"
                >
                  Отмена
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="h-11 rounded-lg bg-primary px-4 text-sm font-semibold text-white transition-colors hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSubmitting ? 'Отправка...' : 'Отправить оценку'}
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : null}
    </>
  )
}

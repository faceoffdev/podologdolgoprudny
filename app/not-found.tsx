import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
      <div className="max-w-xl text-center space-y-4">
        <p className="text-sm font-semibold text-primary">404</p>
        <h1 className="text-3xl font-bold text-slate-900">Страница не найдена</h1>
        <p className="text-slate-600">
          Возможно, ссылка устарела. Перейдите в каталог услуг или к списку специалистов.
        </p>
        <div className="flex items-center justify-center gap-3">
          <Link href="/uslugi/" className="px-4 py-2 rounded-lg bg-primary text-white hover:bg-primary-dark">
            Услуги
          </Link>
          <Link
            href="/specialisty/"
            className="px-4 py-2 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-100"
          >
            Специалисты
          </Link>
        </div>
      </div>
    </main>
  )
}

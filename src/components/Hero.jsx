import { useMemo } from 'react'

function Hero({ activeLine, onToggleLine }) {
  const tagline = useMemo(() => (
    activeLine === 'gymwear'
      ? 'Engineered for PRs. Built to move.'
      : 'Minimal. Clean. Built for the city.'
  ), [activeLine])

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-30" aria-hidden>
        <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-fuchsia-500 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-cyan-500 blur-3xl" />
      </div>
      <div className="max-w-6xl mx-auto px-6 pt-20 pb-10">
        <div className="text-center">
          <span className="inline-block text-xs tracking-widest font-semibold text-fuchsia-300/90 bg-fuchsia-500/10 px-3 py-1 rounded-full border border-fuchsia-400/20">
            Swolez
          </span>
          <h1 className="mt-4 text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
            Gym wear and streetwear that actually performs
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto">
            {tagline}
          </p>
          <div className="mt-8 inline-flex items-center gap-2 bg-white text-slate-900 rounded-full p-1">
            <button
              onClick={() => onToggleLine('gymwear')}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition ${activeLine === 'gymwear' ? 'bg-slate-900 text-white' : 'text-slate-700 hover:bg-slate-100'}`}
            >
              Gymwear
            </button>
            <button
              onClick={() => onToggleLine('streetwear')}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition ${activeLine === 'streetwear' ? 'bg-slate-900 text-white' : 'text-slate-700 hover:bg-slate-100'}`}
            >
              Streetwear
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

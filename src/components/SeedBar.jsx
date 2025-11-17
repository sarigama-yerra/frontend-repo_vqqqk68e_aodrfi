import { useState } from 'react'

function SeedBar() {
  const [busy, setBusy] = useState(false)
  const [done, setDone] = useState(false)

  const seed = async () => {
    setBusy(true)
    setDone(false)
    try {
      const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${base}/api/seed`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ count: 6 })
      })
      const data = await res.json()
      if (data.created >= 1) setDone(true)
    } catch (e) {
      console.error(e)
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className="max-w-6xl mx-auto px-6 pb-12">
      <div className="bg-slate-800/40 border border-white/10 rounded-2xl p-4 flex items-center justify-between">
        <p className="text-slate-300 text-sm">Need sample products? Quickly add a curated set for both lines.</p>
        <button onClick={seed} disabled={busy} className="bg-white text-slate-900 font-semibold rounded-xl px-4 py-2 hover:bg-fuchsia-300 transition disabled:opacity-60">
          {busy ? 'Seeding...' : (done ? 'Seeded ✓' : 'Seed sample products')}
        </button>
      </div>
    </div>
  )
}

export default SeedBar

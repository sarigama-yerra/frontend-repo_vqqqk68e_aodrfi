import { useEffect, useState } from 'react'

function ProductCard({ p }) {
  return (
    <div className="group bg-slate-800/40 border border-white/10 rounded-2xl overflow-hidden hover:border-fuchsia-400/30 transition">
      <div className="aspect-square overflow-hidden bg-slate-900">
        {p.images && p.images[0] ? (
          <img src={p.images[0]} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-slate-500">No Image</div>
        )}
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-white font-semibold">{p.title}</h3>
          <span className="text-fuchsia-300 font-semibold">${p.price.toFixed(2)}</span>
        </div>
        <p className="text-slate-400 text-sm mt-1 capitalize">{p.line} • {p.category}</p>
        {p.colors?.length > 0 && (
          <div className="flex gap-2 mt-2">
            {p.colors.slice(0,5).map((c,i) => (
              <span key={i} className="w-3 h-3 rounded-full border border-white/20" style={{ backgroundColor: c }} />
            ))}
          </div>
        )}
        <button className="mt-4 w-full bg-white text-slate-900 font-semibold rounded-xl py-2 hover:bg-fuchsia-300 hover:text-slate-900 transition">Add to bag</button>
      </div>
    </div>
  )
}

function ProductGrid({ activeLine }) {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      setLoading(true)
      try {
        const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const params = new URLSearchParams()
        if (activeLine) params.set('line', activeLine)
        params.set('featured', 'true')
        const res = await fetch(`${base}/api/products?${params.toString()}`)
        const data = await res.json()
        setProducts(data)
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [activeLine])

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto px-6 py-12">
        <p className="text-slate-300">Loading products...</p>
      </div>
    )
  }

  return (
    <div className="max-w-6xl mx-auto px-6 pb-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((p, i) => (
        <ProductCard key={i} p={p} />
      ))}
      {products.length === 0 && (
        <div className="col-span-full bg-slate-800/40 border border-white/10 rounded-xl p-6 text-slate-300">
          No products yet. Use the seed button below to add sample items.
        </div>
      )}
    </div>
  )
}

export default ProductGrid

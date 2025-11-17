import { useState } from 'react'
import Hero from './components/Hero'
import ProductGrid from './components/ProductGrid'
import SeedBar from './components/SeedBar'

function App() {
  const [activeLine, setActiveLine] = useState('gymwear')

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60 bg-slate-950/80 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-fuchsia-500 to-cyan-500" />
            <span className="font-extrabold tracking-wide">swolez</span>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-slate-300 text-sm">
            <a href="#" className="hover:text-white">Shop</a>
            <a href="#" className="hover:text-white">About</a>
            <a href="/test" className="hover:text-white">System</a>
          </nav>
          <button className="sm:hidden px-3 py-2 rounded-lg bg-white text-slate-900 text-sm font-semibold">Menu</button>
        </div>
      </header>

      <main>
        <Hero activeLine={activeLine} onToggleLine={setActiveLine} />
        <ProductGrid activeLine={activeLine} />
        <SeedBar />
      </main>

      <footer className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-10 text-sm text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Swolez. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

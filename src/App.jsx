import Nav from './components/Nav'
import Hero from './components/Hero'
import Features from './components/Features'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Nav />
      <main>
        <Hero />
        <Features />
        <CTA />
      </main>
      <footer className="border-t border-white/10 bg-slate-950/60">
        <div className="mx-auto max-w-7xl px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-blue-200/70">
          <p>© {new Date().getFullYear()} Vivid — Instant Video Creation & Delivery</p>
          <div className="flex items-center gap-4">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#book" className="hover:text-white">Book</a>
            <a href="/test" className="hover:text-white">System Test</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

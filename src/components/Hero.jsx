import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      {/* Spline 3D background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlay for readability (doesn't block interactions) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/40 to-slate-900"></div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 pb-24 flex flex-col items-center text-center">
        <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-blue-200 ring-1 ring-white/15 backdrop-blur-sm">
          Instant Video Creation & Delivery Platform
        </span>
        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
          Create, Edit, and Deliver Event Videos in Minutes
        </h1>
        <p className="mt-5 max-w-2xl text-base sm:text-lg md:text-xl text-blue-100/90">
          Built for corporates, influencers, and events. Book talent, capture moments, edit with AI, approve in real-time, and publish everywhere instantly.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a href="#book" className="inline-flex items-center rounded-lg bg-blue-500 px-5 py-3 text-white font-semibold shadow-lg shadow-blue-500/30 hover:bg-blue-600 transition">
            Get Started
          </a>
          <a href="#features" className="inline-flex items-center rounded-lg bg-white/10 px-5 py-3 text-white font-semibold ring-1 ring-white/20 hover:bg-white/15 transition">
            Explore Features
          </a>
        </div>
      </div>
    </section>
  );
}

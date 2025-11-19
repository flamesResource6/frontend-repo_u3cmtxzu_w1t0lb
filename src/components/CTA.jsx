export default function CTA() {
  return (
    <section id="book" className="relative py-20 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h3 className="text-3xl sm:text-4xl font-bold text-white">Ready to capture and publish in minutes?</h3>
        <p className="mt-3 text-blue-200/90">Tell us about your event or campaign. We’ll match you with the right crew and editors instantly.</p>
        <form className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
          <input className="rounded-lg bg-white/10 px-4 py-3 text-white placeholder-blue-200/60 outline-none ring-1 ring-white/15 focus:ring-blue-500/50" placeholder="Your name" />
          <input className="rounded-lg bg-white/10 px-4 py-3 text-white placeholder-blue-200/60 outline-none ring-1 ring-white/15 focus:ring-blue-500/50" placeholder="Work email" />
          <input className="rounded-lg bg-white/10 px-4 py-3 text-white placeholder-blue-200/60 outline-none ring-1 ring-white/15 focus:ring-blue-500/50 sm:col-span-2" placeholder="Company or handle" />
          <textarea className="rounded-lg bg-white/10 px-4 py-3 text-white placeholder-blue-200/60 outline-none ring-1 ring-white/15 focus:ring-blue-500/50 sm:col-span-2" placeholder="Event details / goals"></textarea>
          <button type="button" className="sm:col-span-2 inline-flex justify-center rounded-lg bg-blue-500 px-6 py-3 text-white font-semibold shadow-lg shadow-blue-500/30 hover:bg-blue-600 transition">
            Request a demo
          </button>
        </form>
        <p className="mt-4 text-xs text-blue-300/60">We’ll reach out within 24 hours. No spam.</p>
      </div>
    </section>
  );
}

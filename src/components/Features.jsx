import { Camera, Clock, Users, Video, Wand2, Share2, Wallet, BarChart3, Gift, Shield } from 'lucide-react';

const features = [
  { icon: Camera, title: 'Booking & Scheduling', desc: 'Find and book the best videographers and editors by date, event type, and package with live availability.' },
  { icon: Users, title: 'Gig Workforce', desc: 'Assign talent based on location, skill, and availability with real-time notifications and job tracking.' },
  { icon: Wand2, title: 'AI-Assisted Editing', desc: 'Upload footage live and let AI help editors craft on-brand videos fast with styles, overlays, and music.' },
  { icon: Video, title: 'Real-time Preview', desc: 'Share preview links for instant feedback, comments, and approvals from stakeholders.' },
  { icon: Share2, title: 'Instant Delivery', desc: 'Export platform-optimized formats for Instagram, LinkedIn, and WhatsApp with one tap.' },
  { icon: Wallet, title: 'Payments & Invoices', desc: 'Secure checkout for clients, tips for freelancers, and retainer management built-in.' },
  { icon: BarChart3, title: 'Analytics', desc: 'Track engagement: views, shares, completion rates, and freelancer earnings.' },
  { icon: Gift, title: 'Referral & Loyalty', desc: 'Earn rewards for inviting clients and freelancers. Simple, transparent incentives.' },
  { icon: Shield, title: 'Security & Rights', desc: 'Enterprise-grade privacy, content rights management, and encrypted file handling.' },
];

export default function Features() {
  return (
    <section id="features" className="relative py-24 bg-slate-900">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">All the tools for instant video</h2>
          <p className="mt-4 text-blue-200/90">Everything you need to go from booking to delivery — fast, secure, and on-brand.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-blue-500/20 p-2 text-blue-300">
                  <Icon size={22} />
                </div>
                <h3 className="text-white font-semibold">{title}</h3>
              </div>
              <p className="mt-3 text-sm text-blue-200/80">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

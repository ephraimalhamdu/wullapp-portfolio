import React, { useState } from 'react';

export default function WullappLanding() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Network error');
      setStatus('sent');
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased">
      {/* HEADER */}
      <header className="border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src="/images/logo.png" alt="WULLAPP Logo" className="w-10 h-10 rounded-lg" />
            <div>
              <span className="font-semibold text-lg">WULLAPP</span>
              <div className="text-xs text-slate-500">Smart tools for product teams</div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#features" className="hover:text-indigo-600">Features</a>
            <a href="#pricing" className="hover:text-indigo-600">Pricing</a>
            <a href="#testimonials" className="hover:text-indigo-600">Customers</a>
            <a href="#contact" className="hover:text-indigo-600">Contact</a>
            <a href="#" className="ml-2 inline-flex items-center px-4 py-2 border rounded-lg shadow-sm bg-indigo-600 text-white">Sign up</a>
          </nav>

          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" className="p-2 rounded-md">
              {menuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
              )}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden border-t border-slate-100">
            <div className="px-6 py-4 flex flex-col gap-3">
              <a href="#features" onClick={() => setMenuOpen(false)}>Features</a>
              <a href="#pricing" onClick={() => setMenuOpen(false)}>Pricing</a>
              <a href="#testimonials" onClick={() => setMenuOpen(false)}>Customers</a>
              <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
              <a href="#" className="mt-2 inline-flex items-center px-4 py-2 border rounded-lg bg-indigo-600 text-white">Sign up</a>
            </div>
          </div>
        )}
      </header>

      {/* MAIN */}
      <main>
        {/* HERO */}
        <section className="bg-gradient-to-br from-white via-slate-50 to-slate-50">
          <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">WULLAPP — Build better products, faster</h1>
              <p className="mt-4 text-lg text-slate-600">Unified analytics, user feedback, and deployment tooling for modern product teams. Ship with confidence and iterate with clarity.</p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#contact" className="inline-flex items-center px-6 py-3 rounded-lg bg-indigo-600 text-white font-medium">Get early access</a>
                <a href="#features" className="inline-flex items-center px-6 py-3 rounded-lg border">See features</a>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-4 text-sm text-slate-600">
                <div className="col-span-3 sm:col-span-1">
                  <div className="font-semibold">99.9%</div>
                  <div className="text-xs">Uptime SLA</div>
                </div>
                <div className="col-span-3 sm:col-span-1">
                  <div className="font-semibold">500+</div>
                  <div className="text-xs">Teams onboarded</div>
                </div>
                <div className="col-span-3 sm:col-span-1">
                  <div className="font-semibold">Avg. 2 hrs</div>
                  <div className="text-xs">Integration time</div>
                </div>
              </div>
            </div>

            <div className="order-first lg:order-last flex justify-center">
              <img src="/images/hero.png" alt="WULLAPP Dashboard Preview" className="w-full max-w-md rounded-2xl shadow-lg border" />
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section id="features" className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center">
            <h2 className="text-3xl font-bold">All the tools your product team needs</h2>
            <p className="mt-2 text-slate-600">From experiment tracking to user insights, WULLAPP centralizes work so your team moves faster.</p>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {[
              { title: 'User Feedback', desc: 'Capture in-app feedback and link it to sessions.', img: '/images/feature1.png' },
              { title: 'Feature Flags', desc: 'Roll out features safely with percentage rollouts.', img: '/images/feature2.png' },
              { title: 'Analytics', desc: 'Event-level analytics designed for product teams.', img: '/images/feature3.png' },
            ].map((f) => (
              <div key={f.title} className="p-6 border rounded-xl hover:shadow-lg transition flex flex-col items-start">
                <img src={f.img} alt={f.title} className="w-16 h-16 mb-4 object-contain" />
                <div className="text-indigo-600 mb-2 font-semibold">{f.title}</div>
                <div className="text-slate-600">{f.desc}</div>
                <div className="mt-4 text-sm text-indigo-600">Learn more →</div>
              </div>
            ))}
          </div>
        </section>

        {/* PRICING */}
        <section id="pricing" className="bg-slate-50 py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold">Simple pricing</h3>
              <p className="mt-2 text-slate-600">Start free. Scale to enterprise.</p>
            </div>

            <div className="mt-10 grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-white rounded-xl border">
                <div className="text-sm font-semibold">Starter</div>
                <div className="mt-4 text-3xl font-extrabold">Free</div>
                <div className="mt-4 text-slate-600">Up to 3 team members, basic analytics, email support.</div>
                <button className="mt-6 w-full py-2 rounded-lg bg-indigo-600 text-white">Get started</button>
              </div>

              <div className="p-6 bg-white rounded-xl border shadow-lg transform scale-100 md:scale-105">
                <div className="text-sm font-semibold">Growth</div>
                <div className="mt-4 text-3xl font-extrabold">$29<span className="text-base">/mo</span></div>
                <div className="mt-4 text-slate-600">All Starter features + integrations, SSO, 30-day retention.</div>
                <button className="mt-6 w-full py-2 rounded-lg border">Start free trial</button>
              </div>

              <div className="p-6 bg-white rounded-xl border">
                <div className="text-sm font-semibold">Enterprise</div>
                <div className="mt-4 text-3xl font-extrabold">Custom</div>
                <div className="mt-4 text-slate-600">Advanced security, SLA, dedicated support.</div>
                <button className="mt-6 w-full py-2 rounded-lg bg-indigo-600 text-white">Contact sales</button>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section id="testimonials" className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center">
            <h4 className="text-2xl font-bold">Loved by product teams</h4>
            <p className="mt-2 text-slate-600">Hear from teams who moved faster with WULLAPP.</p>
          </div>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              { quote: 'WULLAPP replaced three tools for us — the time savings are huge.', who: 'Product Lead, Fintech' },
              { quote: 'The feature flags are rock solid and integrated with our CI/CD.', who: 'Engineering Manager, HealthTech' },
              { quote: 'Insights are straightforward and actionable — we ship better features.', who: 'Head of PM, Marketplace' },
            ].map((t, i) => (
              <blockquote key={i} className="p-6 bg-white border rounded-xl">
                <p className="text-slate-700">“{t.quote}”</p>
                <div className="mt-4 text-sm text-slate-500">— {t.who}</div>
              </blockquote>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="bg-gradient-to-tr from-white to-slate-50 py-16">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h5 className="text-2xl font-bold">Get early access or chat with sales</h5>
              <p className="mt-2 text-slate-600">Tell us about your team and we'll get back within one business day.</p>
              <div className="mt-6 grid gap-4 text-sm text-slate-600">
                <div>
                  <div className="font-semibold">Email</div>
                  <div>hello@wullapp.com</div>
                </div>
                <div>
                  <div className="font-semibold">Office</div>
                  <div>London, UK</div>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl border shadow-sm" aria-label="Contact form">
              <label className="block">
                <div className="text-sm font-medium">Name</div>
                <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="mt-2 w-full border rounded-md px-3 py-2" placeholder="Your name" />
              </label>

              <label className="block mt-4">
                <div className="text-sm font-medium">Email</div>
                <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="mt-2 w-full border rounded-md px-3 py-2" placeholder="you@company.com" />
              </label>

              <label className="block mt-4">
                <div className="text-sm font-medium">Message</div>
                <textarea required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="mt-2 w-full border rounded-md px-3 py-2 h-28" placeholder="Tell us about your use case" />
              </label>

              <div className="mt-4 flex items-center gap-3">
                <button type="submit" className="inline-flex items-center px-4 py-2 rounded-lg bg-indigo-600 text-white">
                  {status === 'sending' ? 'Sending...' : 'Send message'}
                </button>
                {status === 'sent' && <div className="text-sm text-green-600">Thanks — we received it!</div>}
                {status === 'error' && <div className="text-sm text-red-600">There was an error. Try again later.</div>}
              </div>
            </form>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-100 mt-12">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src="/images/logo.png" alt="WULLAPP Logo" className="w-8 h-8 rounded-md" />
            <div>
              <div className="font-semibold">WULLAPP</div>
              <div className="text-xs text-slate-500">© {new Date().getFullYear()} WULLAPP Ltd.</div>
            </div>
          </div>
          <div className="text-sm text-slate-600">Built with ♥ for product teams • <a className="underline" href="#">Privacy</a> • <a className="underline" href="#">Terms</a></div>
        </div>
      </footer>
    </div>
  );
}
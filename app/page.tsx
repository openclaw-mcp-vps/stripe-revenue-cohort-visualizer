export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          For SaaS Founders &amp; Investors
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Visualize Stripe Revenue Cohorts{" "}
          <span className="text-[#58a6ff]">Beautifully</span>
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          Connect your Stripe account and generate publication-ready cohort charts for investor decks and board meetings — in seconds.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Get Started — $39/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-4">Cancel anytime. No lock-in.</p>
      </section>

      {/* Features strip */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-20">
        {[
          { icon: "📊", title: "Cohort Analytics", desc: "MRR retention, churn, and expansion by signup month." },
          { icon: "📤", title: "Export Ready", desc: "Download PNG or SVG charts sized for slides." },
          { icon: "🔒", title: "Read-Only Stripe", desc: "We only request read permissions — your data stays safe." }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <div className="text-3xl mb-3">{f.icon}</div>
            <h3 className="text-white font-semibold mb-1">{f.title}</h3>
            <p className="text-[#8b949e] text-sm">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-xs mb-3">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$39</p>
          <p className="text-[#8b949e] text-sm mb-6">/month</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited Stripe accounts",
              "Full cohort chart suite",
              "PNG &amp; SVG export",
              "Priority support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-[#c9d1d9] text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span dangerouslySetInnerHTML={{ __html: item }} />
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Subscribe Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-6">
          {[
            {
              q: "How does it connect to Stripe?",
              a: "You paste your Stripe restricted API key (read-only). We never store it beyond your session."
            },
            {
              q: "What charts are included?",
              a: "MRR cohort retention grid, cumulative revenue by cohort, churn rate heatmap, and expansion MRR waterfall."
            },
            {
              q: "Can I cancel anytime?",
              a: "Yes. Cancel from your Lemon Squeezy customer portal with one click — no questions asked."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-[#8b949e] text-sm">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs">
        &copy; {new Date().getFullYear()} Stripe Revenue Cohort Visualizer. All rights reserved.
      </footer>
    </main>
  );
}

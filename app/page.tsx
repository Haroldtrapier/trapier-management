export const metadata = {
  title: "Trapier Management LLC - AI Transformation for Traditional Industries",
  description: "Service-Disabled Veteran-Owned AI consulting firm specializing in enterprise AI transformation.",
};

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-20">
          <div className="max-w-3xl">
            <div className="inline-block bg-blue-700/30 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Service-Disabled Veteran-Owned Small Business
            </div>
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              AI Transformation Built for Traditional Industries
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Stop watching competitors adopt AI while you fall behind. We transform legacy operations into AI-powered enterprises—no theory, just results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/ai-maturity-assessment" className="bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition text-center">
                Free AI Maturity Assessment
              </a>
              <a href="/contact" className="bg-white/10 border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/20 transition text-center">
                Book Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="bg-gray-50 border-y border-gray-200 py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-900 mb-1">SDVOSB</div>
              <div className="text-sm text-gray-600">Certified Veteran-Owned</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-900 mb-1">FedRAMP</div>
              <div className="text-sm text-gray-600">Ready Infrastructure</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-900 mb-1">9</div>
              <div className="text-sm text-gray-600">Industries Served</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-900 mb-1">$2.5M+</div>
              <div className="text-sm text-gray-600">Client Savings Delivered</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-yellow-400 to-orange-500">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Stop Falling Behind. Start Leading.
          </h2>
          <p className="text-xl text-gray-800 mb-8">
            Take the free AI Maturity Assessment and get your custom transformation roadmap.
          </p>
          <a href="/ai-maturity-assessment" className="inline-block bg-gray-900 text-white px-12 py-5 rounded-lg font-bold text-xl hover:bg-gray-800 transition">
            Get Your Free Assessment →
          </a>
        </div>
      </section>
    </main>
  );
}
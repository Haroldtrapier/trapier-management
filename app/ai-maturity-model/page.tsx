import Link from "next/link";

export const metadata = {
  title: "AI Maturity Model - Strategic Framework | Trapier Management",
  description: "Proprietary AI readiness assessment framework for traditional industries. Get a data-driven roadmap from awareness to optimization in 90 days.",
};

export default function AIMaturityModel() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-900 to-purple-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-yellow-500 text-gray-900 px-6 py-2 rounded-full text-sm font-bold mb-6">
              STRATEGIC CONSULTING
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Trapier AI Maturity Model
            </h1>
            <p className="text-2xl text-gray-200 mb-4">
              Stop guessing. Start measuring.
            </p>
            <p className="text-xl text-gray-300 mb-8">
              Our proprietary framework assesses your AI readiness across 50+ data points, then delivers a custom roadmap to competitive advantage in 90 days.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/ai-maturity-assessment"
                className="bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition"
              >
                Take Free Assessment
              </Link>
              <Link
                href="/contact"
                className="bg-white/10 backdrop-blur text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/20 transition border border-white/30"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator Embed */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6">AI ROI Calculator</h2>
          <div className="border-4 border-yellow-500 rounded-xl overflow-hidden shadow-xl bg-white">
            <iframe
              src="https://roicalculator.digital"
              title="ROI Calculator"
              width="100%"
              height="740"
              frameBorder="0"
              style={{ minHeight: 540, width: '100%', border: 'none' }}
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* (Rest of your maturity model content can follow here...) */}
    </main>
  );
}

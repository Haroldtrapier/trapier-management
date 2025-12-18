import Link from "next/link";

export const metadata = {
  title: "AI Maturity Model - Strategic Framework | Trapier Management",
  description: "Proprietary AI readiness assessment framework for traditional industries.",
};

export default function AIMaturityModel() {
  return (
    <main className="min-h-screen">
      <section className="bg-gradient-to-r from-indigo-900 to-purple-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Trapier AI Maturity Model</h1>
            <p className="text-2xl text-gray-200 mb-8">
              Stop guessing. Start measuring. Get a data-driven roadmap from awareness to optimization.
            </p>
            <Link href="/ai-maturity-assessment" className="inline-block bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition">
              Take Free Assessment
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">The 5 Levels of AI Maturity</h2>
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-red-50 to-red-100 p-8 rounded-xl border-l-4 border-red-600">
              <h3 className="text-2xl font-bold mb-2">Level 1: Fragmented Awareness</h3>
              <p className="text-gray-700">Minimal AI adoption. Exploring possibilities but no strategy. Manual processes dominate.</p>
            </div>
            <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-8 rounded-xl border-l-4 border-orange-600">
              <h3 className="text-2xl font-bold mb-2">Level 2: Siloed Experiments</h3>
              <p className="text-gray-700">Running 1-2 pilot projects. Limited budget and resources. Some data centralization.</p>
            </div>
            <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 p-8 rounded-xl border-l-4 border-yellow-600">
              <h3 className="text-2xl font-bold mb-2">Level 3: Coordinated Deployment</h3>
              <p className="text-gray-700">Clear AI strategy with executive sponsorship. Structured implementation approach.</p>
            </div>
            <div className="bg-gradient-to-r from-green-50 to-green-100 p-8 rounded-xl border-l-4 border-green-600">
              <h3 className="text-2xl font-bold mb-2">Level 4: Integrated Operations</h3>
              <p className="text-gray-700">AI embedded in core operations. Automated data pipelines. Proven ROI.</p>
            </div>
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-xl border-l-4 border-blue-600">
              <h3 className="text-2xl font-bold mb-2">Level 5: AI-Native Organization</h3>
              <p className="text-gray-700">AI drives business strategy. Self-learning systems. Market-leading capabilities.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-indigo-900 to-purple-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Know Where You Stand?</h2>
          <Link href="/ai-maturity-assessment" className="inline-block bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition">
            Take Free Assessment →
          </Link>
        </div>
      </section>
    </main>
  );
}
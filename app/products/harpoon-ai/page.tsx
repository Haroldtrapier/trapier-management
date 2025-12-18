"use client";

import Link from "next/link";

export default function HarpoonAI() {
  return (
    <main className="min-h-screen">
      <section className="bg-gradient-to-r from-purple-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <div className="inline-block bg-purple-600 px-4 py-2 rounded-full text-sm font-bold mb-4">
              SALES & MARKETING AUTOMATION
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Harpoon AI</h1>
            <p className="text-2xl text-purple-100 mb-8">
              Turn cold leads into closed deals while your team sleeps. AI-powered outreach that never stops working.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition text-center">
                Schedule Demo
              </Link>
              <Link href="/ai-maturity-assessment" className="bg-white/10 border border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/20 transition text-center">
                Free Assessment
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">The Sales Team Bottleneck</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-red-600 font-bold mb-2">❌ Manual Follow-Ups</div>
              <p className="text-gray-600">Sales reps spend 6+ hours daily on emails, losing high-value leads.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-red-600 font-bold mb-2">❌ Inconsistent Outreach</div>
              <p className="text-gray-600">Every rep has their own approach. No standardized messaging.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-red-600 font-bold mb-2">❌ Lost Opportunities</div>
              <p className="text-gray-600">Leads go cold while reps are in meetings or on vacation.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">How Harpoon AI Works</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-3">Smart Lead Qualification</h3>
              <p className="text-gray-600">AI analyzes website behavior and engagement signals to score and prioritize leads automatically.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-3">Personalized Email Sequences</h3>
              <p className="text-gray-600">Generate hyper-personalized emails that sound human. Each message adapts based on recipient behavior.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-purple-900 to-indigo-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Stop Losing Leads to Slow Follow-Up</h2>
          <Link href="/contact" className="inline-block bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition">
            Schedule Demo
          </Link>
        </div>
      </section>
    </main>
  );
}
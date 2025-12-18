"use client";

import Link from "next/link";

export default function EmpireBuildLab() {
  return (
    <main className="min-h-screen">
      <section className="bg-gradient-to-r from-gray-900 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <div className="inline-block bg-red-600 px-4 py-2 rounded-full text-sm font-bold mb-4">
              CUSTOM AI DEVELOPMENT
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Empire Build Lab</h1>
            <p className="text-2xl text-gray-300 mb-4">
              Off-the-shelf AI doesn't fit your business. We build custom solutions that do.
            </p>
            <p className="text-lg text-gray-400 mb-8">
              From concept to production in 90 days. No compromises. No vendor lock-in.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition text-center">
                Discuss Your Project
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
          <h2 className="text-3xl font-bold text-center mb-12">Why Off-the-Shelf AI Fails</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-red-600 font-bold mb-2">❌ Generic Features</div>
              <p className="text-gray-600">Built for everyone means built for no one. You're forced to change your processes.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-red-600 font-bold mb-2">❌ Integration Nightmares</div>
              <p className="text-gray-600">Legacy systems don't play nice with modern SaaS. Data silos multiply.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-red-600 font-bold mb-2">❌ Vendor Lock-In</div>
              <p className="text-gray-600">Subscription fees forever. Limited customization. You rent it, don't own it.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">What We Build</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-red-600">
              <h3 className="text-2xl font-bold mb-3">Process Automation Engines</h3>
              <p className="text-gray-600">Replace manual workflows with intelligent automation. Document processing, data entry, compliance checking.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-blue-600">
              <h3 className="text-2xl font-bold mb-3">Predictive Analytics Platforms</h3>
              <p className="text-gray-600">Turn historical data into future insights. Demand forecasting, churn prediction, quality control.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-gray-900 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Stop Settling for Generic AI</h2>
          <Link href="/contact" className="inline-block bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition">
            Discuss Your Project
          </Link>
        </div>
      </section>
    </main>
  );
}
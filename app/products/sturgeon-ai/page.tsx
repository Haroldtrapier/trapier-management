"use client";

import Link from "next/link";
import { useState } from "react";

export default function SturgeonAI() {
  const [proposals, setProposals] = useState(24);
  const [winRate, setWinRate] = useState(15);
  const [contractValue, setContractValue] = useState(250000);

  // Calculate ROI
  const currentWins = proposals * (winRate / 100);
  const currentRevenue = currentWins * contractValue;
  const improvedWinRate = winRate * 2.3;
  const newWins = proposals * (improvedWinRate / 100);
  const newRevenue = newWins * contractValue;
  const additionalRevenue = newRevenue - currentRevenue;
  const platformCost = 12000;
  const roi = ((additionalRevenue - platformCost) / platformCost * 100).toFixed(0);

  return (
    <main className="min-h-screen">
      <section className="bg-gradient-to-r from-blue-900 to-cyan-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <div className="inline-block bg-blue-600 px-4 py-2 rounded-full text-sm font-bold mb-4">
              GOVERNMENT CONTRACTING INTELLIGENCE
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Sturgeon AI</h1>
            <p className="text-2xl text-blue-100 mb-8">
              Stop missing federal opportunities. AI finds, qualifies, and helps you win government contracts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition text-center">
                Request Demo
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
          <h2 className="text-3xl font-bold text-center mb-12">The Federal Contracting Challenge</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-red-600 font-bold mb-2">❌ Opportunity Overload</div>
              <p className="text-gray-600">SAM.gov posts 500+ opportunities daily. Finding the right ones is like finding needles in haystacks.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-red-600 font-bold mb-2">❌ Manual Research Hell</div>
              <p className="text-gray-600">Hours researching agencies, past awards, pricing, and compliance requirements for each RFP.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-red-600 font-bold mb-2">❌ Proposal Burnout</div>
              <p className="text-gray-600">Writing proposals from scratch. Teams work nights and weekends to meet deadlines.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">How Sturgeon AI Works</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-3">Smart Opportunity Matching</h3>
              <p className="text-gray-600 mb-4">
                AI monitors SAM.gov 24/7. Instantly notifies you of opportunities matching your capabilities.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-3">Competitive Intelligence</h3>
              <p className="text-gray-600 mb-4">
                Know your competition before you bid. AI analyzes past awards and pricing trends.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-cyan-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Calculate Your ROI</h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            See how Sturgeon AI impacts your bottom line
          </p>

          <div className="bg-white rounded-xl shadow-xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-6">Your Current Metrics</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Proposals Submitted Annually
                    </label>
                    <input
                      type="number"
                      value={proposals}
                      onChange={(e) => setProposals(Number(e.target.value))}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Current Win Rate (%)
                    </label>
                    <input
                      type="number"
                      value={winRate}
                      onChange={(e) => setWinRate(Number(e.target.value))}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Average Contract Value ($)
                    </label>
                    <input
                      type="number"
                      value={contractValue}
                      onChange={(e) => setContractValue(Number(e.target.value))}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-6">With Sturgeon AI</h3>
                <div className="space-y-6">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="text-sm text-gray-600 mb-1">Additional Annual Revenue</div>
                    <div className="text-3xl font-bold text-green-600">
                      ${(additionalRevenue / 1000000).toFixed(1)}M
                    </div>
                    <div className="text-sm text-gray-500 mt-1">2.3x win rate improvement</div>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="text-sm text-gray-600 mb-1">Current Revenue</div>
                    <div className="text-2xl font-bold text-blue-600">
                      ${(currentRevenue / 1000).toFixed(0)}K
                    </div>
                  </div>

                  <div className="bg-cyan-50 p-4 rounded-lg">
                    <div className="text-sm text-gray-600 mb-1">ROI</div>
                    <div className="text-3xl font-bold text-cyan-600">{roi}%</div>
                    <div className="text-sm text-gray-500 mt-1">Platform pays for itself in first win</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Link href="/contact" className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition">
                Get Custom ROI Analysis →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-900 to-cyan-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Stop Leaving Money on the Table</h2>
          <p className="text-xl text-blue-100 mb-8">Join 250+ contractors using AI to win more federal work.</p>
          <Link href="/contact" className="inline-block bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition">
            Request Demo
          </Link>
        </div>
      </section>
    </main>
  );
}
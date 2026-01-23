"use client";

import { useState } from "react";

export default function ROICalculator() {
  const [formData, setFormData] = useState({
    annualRevenue: "",
    employees: "",
    currentMaturity: 10,
    targetMaturity: 30,
    timeframe: 12,
    assessmentCost: 50000
  });

  const [showResults, setShowResults] = useState(false);

  const calculateROI = () => {
    const revenue = parseFloat(formData.annualRevenue) || 0;
    const employees = parseInt(formData.employees) || 0;
    const maturityGap = formData.targetMaturity - formData.currentMaturity;
    const timeframeYears = formData.timeframe / 12;

    // Cost Savings (2-8% of revenue based on maturity improvement)
    const savingsRate = 0.02 + (maturityGap / 40) * 0.06; // 2% to 8%
    const costSavings = revenue * savingsRate;

    // Revenue Growth (3-15% based on maturity improvement)
    const growthRate = 0.03 + (maturityGap / 40) * 0.12; // 3% to 15%
    const revenueGrowth = revenue * growthRate;

    // Risk Reduction (based on company size)
    const riskReduction = Math.min(500000, 50000 + (employees * 200));

    // Productivity Gains (10-40% based on employee count)
    const productivityRate = 0.10 + (maturityGap / 40) * 0.30; // 10% to 40%
    const avgSalary = 75000;
    const productivityGains = employees * avgSalary * productivityRate;

    // Total Annual Value
    const totalAnnualValue = costSavings + revenueGrowth + riskReduction + productivityGains;

    // ROI and Payback
    const roi = ((totalAnnualValue - formData.assessmentCost) / formData.assessmentCost) * 100;
    const paybackMonths = (formData.assessmentCost / (totalAnnualValue / 12));

    return {
      costSavings,
      revenueGrowth,
      riskReduction,
      productivityGains,
      totalAnnualValue,
      roi,
      paybackMonths,
      threeYearValue: totalAnnualValue * 3
    };
  };

  const formatCurrency = (num: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(num);
  };

  const results = showResults ? calculateROI() : null;

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            AI Transformation ROI Calculator
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Calculate the potential return on investment for your AI maturity transformation
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Your Organization</h2>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700">
                  Annual Revenue ($)
                </label>
                <input
                  type="number"
                  value={formData.annualRevenue}
                  onChange={(e) => setFormData({...formData, annualRevenue: e.target.value})}
                  placeholder="50000000"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700">
                  Number of Employees
                </label>
                <input
                  type="number"
                  value={formData.employees}
                  onChange={(e) => setFormData({...formData, employees: e.target.value})}
                  placeholder="500"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700">
                  Current AI Maturity Level: {formData.currentMaturity}
                </label>
                <input
                  type="range"
                  min="0"
                  max="40"
                  value={formData.currentMaturity}
                  onChange={(e) => setFormData({...formData, currentMaturity: parseInt(e.target.value)})}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-gray-600 mt-1">
                  <span>Beginner (0)</span>
                  <span>Advanced (40)</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700">
                  Target AI Maturity Level: {formData.targetMaturity}
                </label>
                <input
                  type="range"
                  min="0"
                  max="40"
                  value={formData.targetMaturity}
                  onChange={(e) => setFormData({...formData, targetMaturity: parseInt(e.target.value)})}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-gray-600 mt-1">
                  <span>Beginner (0)</span>
                  <span>Advanced (40)</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700">
                  Implementation Timeframe: {formData.timeframe} months
                </label>
                <input
                  type="range"
                  min="6"
                  max="36"
                  step="6"
                  value={formData.timeframe}
                  onChange={(e) => setFormData({...formData, timeframe: parseInt(e.target.value)})}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-gray-600 mt-1">
                  <span>6 months</span>
                  <span>36 months</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700">
                  Assessment Investment ($)
                </label>
                <select
                  value={formData.assessmentCost}
                  onChange={(e) => setFormData({...formData, assessmentCost: parseInt(e.target.value)})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="25000">$25,000 - Quick Assessment</option>
                  <option value="50000">$50,000 - Standard</option>
                  <option value="100000">$100,000 - Comprehensive</option>
                  <option value="250000">$250,000 - Enterprise</option>
                </select>
              </div>

              <button
                onClick={() => setShowResults(true)}
                className="w-full bg-blue-900 text-white py-4 rounded-lg font-bold text-lg hover:bg-blue-800 transition"
              >
                Calculate ROI
              </button>
            </div>
          </div>

          {/* Results */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            {!showResults ? (
              <div className="flex items-center justify-center h-full text-center">
                <div>
                  <div className="text-6xl mb-4">📊</div>
                  <p className="text-gray-600">
                    Fill in your organization details and click "Calculate ROI" to see your potential returns
                  </p>
                </div>
              </div>
            ) : results && (
              <div>
                <h2 className="text-2xl font-bold mb-6 text-gray-900">Projected ROI</h2>

                {/* Total Annual Value */}
                <div className="bg-gradient-to-br from-blue-900 to-indigo-900 text-white rounded-xl p-6 mb-6">
                  <div className="text-sm font-semibold mb-2">Total Annual Value</div>
                  <div className="text-4xl font-bold mb-2">
                    {formatCurrency(results.totalAnnualValue)}
                  </div>
                  <div className="text-blue-200 text-sm">
                    {results.roi.toFixed(0)}% ROI • {results.paybackMonths.toFixed(1)} month payback
                  </div>
                </div>

                {/* Breakdown */}
                <div className="space-y-4 mb-6">
                  <div className="border-l-4 border-green-500 pl-4 py-2">
                    <div className="text-sm text-gray-600">Cost Savings</div>
                    <div className="text-2xl font-bold text-gray-900">
                      {formatCurrency(results.costSavings)}
                    </div>
                    <div className="text-xs text-gray-500">Operational efficiency gains</div>
                  </div>

                  <div className="border-l-4 border-blue-500 pl-4 py-2">
                    <div className="text-sm text-gray-600">Revenue Growth</div>
                    <div className="text-2xl font-bold text-gray-900">
                      {formatCurrency(results.revenueGrowth)}
                    </div>
                    <div className="text-xs text-gray-500">New opportunities & optimization</div>
                  </div>

                  <div className="border-l-4 border-purple-500 pl-4 py-2">
                    <div className="text-sm text-gray-600">Risk Reduction</div>
                    <div className="text-2xl font-bold text-gray-900">
                      {formatCurrency(results.riskReduction)}
                    </div>
                    <div className="text-xs text-gray-500">Compliance & security improvements</div>
                  </div>

                  <div className="border-l-4 border-orange-500 pl-4 py-2">
                    <div className="text-sm text-gray-600">Productivity Gains</div>
                    <div className="text-2xl font-bold text-gray-900">
                      {formatCurrency(results.productivityGains)}
                    </div>
                    <div className="text-xs text-gray-500">Workforce efficiency improvements</div>
                  </div>
                </div>

                {/* 3-Year Projection */}
                <div className="bg-gray-50 rounded-xl p-4 mb-6">
                  <div className="text-sm text-gray-600 mb-1">3-Year Projected Value</div>
                  <div className="text-3xl font-bold text-gray-900">
                    {formatCurrency(results.threeYearValue)}
                  </div>
                </div>

                {/* CTA */}
                <a
                  href="/contact"
                  className="block w-full bg-yellow-500 text-gray-900 text-center py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition"
                >
                  Book Your Strategy Session →
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 text-center text-sm text-gray-600">
          <p>
            * These are estimated projections based on industry benchmarks and typical AI transformation outcomes. 
            Actual results vary based on implementation quality, organizational readiness, and market conditions.
          </p>
        </div>
      </div>
    </main>
  );
}

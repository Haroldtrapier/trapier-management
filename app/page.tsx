export const metadata = {
  title: "Trapier Management LLC - AI Transformation & Strategic Consulting",
  description: "Service-Connected Disabled Veteran-Owned Small Business (SDVOSB) providing AI Maturity Assessments for Fortune 500, AI Systems for Blue Collar Industries, and GovCon Intelligence. CAGE Code: 12LN8. Charlotte, NC.",
};

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-20">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6 flex-wrap">
              <div className="inline-block bg-blue-700/30 px-4 py-2 rounded-full text-sm font-semibold">
                Service-Connected Disabled Veteran-Owned Small Business
              </div>
              <div className="inline-block bg-yellow-500 text-gray-900 px-4 py-2 rounded-full text-sm font-bold">
                CAGE Code: 12LN8
              </div>
            </div>
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Transform Your Business with Strategic AI
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              From Fortune 500 maturity assessments to building AI systems for blue collar industries. Based in Charlotte, North Carolina.
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
              <div className="text-3xl font-bold text-blue-900 mb-1">12LN8</div>
              <div className="text-sm text-gray-600">CAGE Code</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-900 mb-1">Charlotte</div>
              <div className="text-sm text-gray-600">North Carolina</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-900 mb-1">3</div>
              <div className="text-sm text-gray-600">Service Verticals</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: Fortune 500 AI Maturity Models */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-blue-100 text-blue-900 px-4 py-2 rounded-full text-sm font-bold mb-4">
                Fortune 500 Consulting
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                AI Maturity Models & Strategic Assessment
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Enterprise-grade AI readiness assessments for large organizations. We evaluate your current capabilities, identify gaps, and create strategic transformation roadmaps.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700"><strong>Comprehensive Maturity Assessment</strong> - Evaluate AI readiness across your organization</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700"><strong>ROI Calculator</strong> - Quantify potential savings and revenue opportunities from AI investments</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700"><strong>Strategic Roadmap Development</strong> - Custom transformation plans aligned with business goals</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700"><strong>Executive Workshops</strong> - C-suite alignment on AI strategy and investment priorities</span>
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/ai-maturity-assessment" className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700 transition text-center">
                  Take Free Mini Assessment →
                </a>
                <a href="/roi-calculator" className="inline-block bg-green-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-green-700 transition text-center">
                  Calculate Your AI ROI →
                </a>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 border-2 border-blue-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Assessment Framework</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="font-bold text-gray-900 mb-1">Data Infrastructure</div>
                  <div className="text-sm text-gray-600">Quality, accessibility, governance</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="font-bold text-gray-900 mb-1">Talent & Culture</div>
                  <div className="text-sm text-gray-600">Skills, mindset, change readiness</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="font-bold text-gray-900 mb-1">Technology Stack</div>
                  <div className="text-sm text-gray-600">Tools, platforms, integrations</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="font-bold text-gray-900 mb-1">Use Case Portfolio</div>
                  <div className="text-sm text-gray-600">Current projects, ROI tracking</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Blue Collar Industries - Building AI Systems */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-orange-100 text-orange-900 px-4 py-2 rounded-full text-sm font-bold mb-4">
              AI System Development
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              We Build AI Systems for Blue Collar Industries
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
              We don't just advise - <strong>we build production-ready AI systems</strong> tailored to the operational realities of traditional industries. From data pipelines to custom ML models to user interfaces, we deliver complete, deployed solutions.
            </p>
            <div className="bg-white rounded-xl p-6 max-w-4xl mx-auto border-2 border-orange-200 shadow-lg">
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div>
                  <div className="text-3xl mb-2">🔧</div>
                  <div className="font-bold text-gray-900 mb-1">Custom Development</div>
                  <div className="text-sm text-gray-600">We code, train, and deploy AI systems specifically for your operations</div>
                </div>
                <div>
                  <div className="text-3xl mb-2">📊</div>
                  <div className="font-bold text-gray-900 mb-1">Data Integration</div>
                  <div className="text-sm text-gray-600">Connect to your existing systems - ERP, CRM, IoT sensors, legacy databases</div>
                </div>
                <div>
                  <div className="text-3xl mb-2">🚀</div>
                  <div className="font-bold text-gray-900 mb-1">Full Deployment</div>
                  <div className="text-sm text-gray-600">Operational systems with training, support, and continuous improvement</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Construction */}
            <div className="bg-white border-2 border-orange-200 rounded-2xl p-8 hover:shadow-xl transition">
              <div className="text-4xl mb-4">🏗️</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Construction</h3>
              <p className="text-gray-600 mb-6">AI-powered project intelligence and operational optimization</p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-orange-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">Project delay prediction & risk alerts</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-orange-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">Equipment maintenance optimization</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-orange-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">Safety compliance automation</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-orange-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">Bid & proposal generation</span>
                </li>
              </ul>
            </div>

            {/* Retail */}
            <div className="bg-white border-2 border-blue-200 rounded-2xl p-8 hover:shadow-xl transition">
              <div className="text-4xl mb-4">🛒</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Retail</h3>
              <p className="text-gray-600 mb-6">Customer intelligence and inventory optimization systems</p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">Predictive inventory management</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">Customer behavior prediction</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">Dynamic pricing strategies</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">Supply chain intelligence</span>
                </li>
              </ul>
            </div>

            {/* Hospitality */}
            <div className="bg-white border-2 border-purple-200 rounded-2xl p-8 hover:shadow-xl transition">
              <div className="text-4xl mb-4">🏨</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Hospitality</h3>
              <p className="text-gray-600 mb-6">Guest experience and revenue optimization platforms</p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-purple-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">Demand forecasting & capacity planning</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-purple-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">Intelligent staff scheduling</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-purple-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">Guest experience personalization</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-purple-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">Revenue management systems</span>
                </li>
              </ul>
            </div>

            {/* Insurance */}
            <div className="bg-white border-2 border-green-200 rounded-2xl p-8 hover:shadow-xl transition">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Insurance</h3>
              <p className="text-gray-600 mb-6">Claims automation and risk assessment platforms</p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">Automated claims processing</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">AI-powered risk assessment</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">Fraud detection systems</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">Policy underwriting optimization</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <a href="/contact" className="inline-block bg-orange-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-orange-700 transition">
              Discuss Your AI System Development →
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 3: Government Contracting - Sturgeon AI */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-yellow-500 text-gray-900 px-4 py-2 rounded-full text-sm font-bold mb-4">
                Government Contracting
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Sturgeon AI: GovCon Intelligence Platform
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Navigate the complex world of government contracting with AI-powered intelligence. Track opportunities, analyze competitors, and win more contracts.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-yellow-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-300"><strong className="text-white">Real-Time Opportunity Tracking</strong> - Monitor SAM.gov, agency sites, and contract modifications</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-yellow-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-300"><strong className="text-white">Competitor Intelligence</strong> - Track who's winning what and their win strategies</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-yellow-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-300"><strong className="text-white">Contract Vehicle Matching</strong> - Find the right vehicles for your capabilities</span>
                </li>
              </ul>
              <a href="/products/sturgeon-ai" className="inline-block bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg font-bold hover:bg-yellow-400 transition">
                Explore Sturgeon AI →
              </a>
            </div>
            <div className="bg-slate-800/50 border-2 border-slate-700 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Key Features</h3>
              <div className="space-y-4">
                <div className="bg-slate-700/50 rounded-lg p-4">
                  <div className="font-bold mb-1">📊 Contract Analytics</div>
                  <div className="text-sm text-gray-400">Historical spend patterns & agency trends</div>
                </div>
                <div className="bg-slate-700/50 rounded-lg p-4">
                  <div className="font-bold mb-1">🎯 Opportunity Scoring</div>
                  <div className="text-sm text-gray-400">AI-powered win probability assessment</div>
                </div>
                <div className="bg-slate-700/50 rounded-lg p-4">
                  <div className="font-bold mb-1">👥 Teaming Recommendations</div>
                  <div className="text-sm text-gray-400">Find complementary partners for joint ventures</div>
                </div>
                <div className="bg-slate-700/50 rounded-lg p-4">
                  <div className="font-bold mb-1">📝 Proposal Intelligence</div>
                  <div className="text-sm text-gray-400">Past performance insights & win themes</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-yellow-400 to-orange-500">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-800 mb-8">
            Whether you need strategic AI consulting, custom system development, or GovCon intelligence - we're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/ai-maturity-assessment" className="inline-block bg-gray-900 text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-800 transition">
              Free AI Assessment
            </a>
            <a href="/contact" className="inline-block bg-white text-gray-900 px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition border-2 border-gray-900">
              Schedule Consultation
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

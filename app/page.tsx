export const metadata = {
  title: "Trapier Management LLC - AI Transformation & Strategic Consulting",
  description: "Service-Connected Disabled Veteran-Owned Small Business (SDVOSB) providing AI Maturity Assessments for Fortune 500, AI Systems for Blue Collar Industries, and GovCon Intelligence. CAGE Code: 12LN8",
};

export default function HomePage() {
  return (
    <main className="overflow-hidden">
      {/* Hero Section - Futuristic AI Theme */}
      <section className="relative bg-gradient-to-br from-blue-950 via-purple-900 to-indigo-950 text-white overflow-hidden">
        {/* Animated background gradient orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 -top-48 -left-48 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute w-96 h-96 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4 py-24">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6 flex-wrap">
              <div className="backdrop-blur-md bg-white/10 border border-white/20 px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                🏅 Service-Connected Disabled Veteran-Owned Small Business
              </div>
              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                ⚡ CAGE Code: 12LN8
              </div>
            </div>
            <h1 className="text-6xl font-extrabold mb-6 leading-tight bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
              Transform Your Business with AI Intelligence
            </h1>
            <p className="text-2xl mb-8 text-blue-100 font-light">
              From Fortune 500 strategy to building production AI systems. <span className="text-yellow-300 font-semibold">Serving businesses nationwide.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/ai-maturity-assessment" className="group relative bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-8 py-5 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-yellow-500/50 transition-all transform hover:scale-105 text-center">
                <span className="relative z-10">🚀 Free AI Maturity Assessment</span>
              </a>
              <a href="/contact" className="backdrop-blur-md bg-white/10 border-2 border-white/30 text-white px-8 py-5 rounded-xl font-bold text-lg hover:bg-white/20 hover:shadow-xl transition-all text-center">
                📞 Book Consultation
              </a>
            </div>
          </div>
        </div>

        {/* Animated bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-16">
            <path fill="#f9fafb" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* Trust Signals - Modern Glass Design */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100 hover:shadow-xl transition-all transform hover:scale-105">
              <div className="text-4xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">SDVOSB</div>
              <div className="text-sm text-gray-600 font-medium">✅ Certified Veteran-Owned</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-yellow-100 hover:shadow-xl transition-all transform hover:scale-105">
              <div className="text-4xl font-black bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent mb-2">12LN8</div>
              <div className="text-sm text-gray-600 font-medium">🏛️ CAGE Code</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-green-100 hover:shadow-xl transition-all transform hover:scale-105">
              <div className="text-4xl font-black bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">Nationwide</div>
              <div className="text-sm text-gray-600 font-medium">🌎 Service Area</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-indigo-100 hover:shadow-xl transition-all transform hover:scale-105">
              <div className="text-4xl font-black bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">4</div>
              <div className="text-sm text-gray-600 font-medium">🎯 Service Verticals</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: Fortune 500 - Modern Gradient Design */}
      <section className="py-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"></div>
        <div className="relative max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-2 rounded-full text-sm font-bold mb-6 shadow-lg">
                <span>🏢</span> Fortune 500 Consulting
              </div>
              <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
                AI Maturity Models & <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Strategic Assessment</span>
              </h2>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Enterprise-grade AI readiness assessments for large organizations. We evaluate your current capabilities, identify gaps, and create strategic transformation roadmaps.
              </p>
              <div className="space-y-4 mb-10">
                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-lg">Comprehensive Maturity Assessment</div>
                    <div className="text-gray-600">Evaluate AI readiness across your organization</div>
                  </div>
                </div>
                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-lg">ROI Calculator</div>
                    <div className="text-gray-600">Quantify potential savings and revenue opportunities</div>
                  </div>
                </div>
                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-lg">Strategic Roadmap Development</div>
                    <div className="text-gray-600">Custom transformation plans aligned with goals</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/ai-maturity-assessment" className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all transform hover:scale-105 text-center">
                  📊 Take Assessment →
                </a>
                <a href="/roi-calculator" className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-green-500/50 transition-all transform hover:scale-105 text-center">
                  💰 Calculate ROI →
                </a>
              </div>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-blue-100 backdrop-blur-lg">
              <h3 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <span className="text-4xl">🎯</span> Assessment Framework
              </h3>
              <div className="space-y-5">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-5 border-l-4 border-blue-500 hover:shadow-lg transition-all transform hover:translate-x-2">
                  <div className="font-bold text-gray-900 text-lg mb-1">📊 Data Infrastructure</div>
                  <div className="text-sm text-gray-600">Quality, accessibility, governance</div>
                </div>
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-5 border-l-4 border-purple-500 hover:shadow-lg transition-all transform hover:translate-x-2">
                  <div className="font-bold text-gray-900 text-lg mb-1">🧠 Talent & Culture</div>
                  <div className="text-sm text-gray-600">Skills, mindset, change readiness</div>
                </div>
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-5 border-l-4 border-green-500 hover:shadow-lg transition-all transform hover:translate-x-2">
                  <div className="font-bold text-gray-900 text-lg mb-1">⚙️ Technology Stack</div>
                  <div className="text-sm text-gray-600">Tools, platforms, integrations</div>
                </div>
                <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-5 border-l-4 border-orange-500 hover:shadow-lg transition-all transform hover:translate-x-2">
                  <div className="font-bold text-gray-900 text-lg mb-1">🚀 Use Case Portfolio</div>
                  <div className="text-sm text-gray-600">Current projects, ROI tracking</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Blue Collar Industries - Bold & Modern */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMzMzMiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzBoLTZ2LTZoNnYuNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        </div>
        <div className="relative max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-5 py-2 rounded-full text-sm font-bold mb-6 shadow-lg shadow-orange-500/50">
              <span>🔧</span> AI System Development
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
              We Build <span className="bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">AI Systems</span> for Blue Collar Industries
            </h2>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto mb-10 leading-relaxed">
              We don't just advise - <strong className="text-white">we build production-ready AI systems</strong> tailored to the operational realities of traditional industries.
            </p>
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 max-w-5xl mx-auto border border-gray-700 shadow-2xl">
              <div className="grid md:grid-cols-3 gap-8 text-left">
                <div className="group hover:scale-105 transition-transform">
                  <div className="text-5xl mb-3">🔧</div>
                  <div className="font-bold text-white text-xl mb-2">Custom Development</div>
                  <div className="text-gray-400">We code, train, and deploy AI systems specifically for your operations</div>
                </div>
                <div className="group hover:scale-105 transition-transform">
                  <div className="text-5xl mb-3">📊</div>
                  <div className="font-bold text-white text-xl mb-2">Data Integration</div>
                  <div className="text-gray-400">Connect to your ERP, CRM, IoT sensors, legacy databases</div>
                </div>
                <div className="group hover:scale-105 transition-transform">
                  <div className="text-5xl mb-3">🚀</div>
                  <div className="font-bold text-white text-xl mb-2">Full Deployment</div>
                  <div className="text-gray-400">Operational systems with training, support, and continuous improvement</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Construction */}
            <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 backdrop-blur-sm border-2 border-orange-500/30 rounded-2xl p-8 hover:shadow-2xl hover:shadow-orange-500/20 transition-all transform hover:scale-105">
              <div className="text-5xl mb-4">🏗️</div>
              <h3 className="text-3xl font-bold mb-4">Construction</h3>
              <p className="text-gray-300 mb-6 text-lg">AI-powered project intelligence and operational optimization</p>
              <ul className="space-y-3">
                {['Project delay prediction & risk alerts', 'Equipment maintenance optimization', 'Safety compliance automation', 'Bid & proposal generation'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <span className="text-gray-200">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Retail */}
            <div className="bg-gradient-to-br from-blue-500/10 to-indigo-500/10 backdrop-blur-sm border-2 border-blue-500/30 rounded-2xl p-8 hover:shadow-2xl hover:shadow-blue-500/20 transition-all transform hover:scale-105">
              <div className="text-5xl mb-4">🛒</div>
              <h3 className="text-3xl font-bold mb-4">Retail</h3>
              <p className="text-gray-300 mb-6 text-lg">Customer intelligence and inventory optimization systems</p>
              <ul className="space-y-3">
                {['Predictive inventory management', 'Customer behavior prediction', 'Dynamic pricing strategies', 'Supply chain intelligence'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <span className="text-gray-200">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Hospitality */}
            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm border-2 border-purple-500/30 rounded-2xl p-8 hover:shadow-2xl hover:shadow-purple-500/20 transition-all transform hover:scale-105">
              <div className="text-5xl mb-4">🏨</div>
              <h3 className="text-3xl font-bold mb-4">Hospitality</h3>
              <p className="text-gray-300 mb-6 text-lg">Guest experience and revenue optimization platforms</p>
              <ul className="space-y-3">
                {['Demand forecasting & capacity planning', 'Intelligent staff scheduling', 'Guest experience personalization', 'Revenue management systems'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <span className="text-gray-200">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Insurance */}
            <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-sm border-2 border-green-500/30 rounded-2xl p-8 hover:shadow-2xl hover:shadow-green-500/20 transition-all transform hover:scale-105">
              <div className="text-5xl mb-4">🛡️</div>
              <h3 className="text-3xl font-bold mb-4">Insurance</h3>
              <p className="text-gray-300 mb-6 text-lg">Claims automation and risk assessment platforms</p>
              <ul className="space-y-3">
                {['Automated claims processing', 'AI-powered risk assessment', 'Fraud detection systems', 'Policy underwriting optimization'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <span className="text-gray-200">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-center mt-16">
            <a href="/contact" className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white px-12 py-5 rounded-xl font-bold text-xl hover:shadow-2xl hover:shadow-orange-500/50 transition-all transform hover:scale-105">
              💬 Discuss Your AI System Development →
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 3: Sturgeon AI - Premium Product Section */}
      <section className="py-24 bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-200/30 rounded-full blur-3xl"></div>
        <div className="relative max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="bg-white rounded-3xl p-10 shadow-2xl border border-cyan-100">
              <div className="text-6xl mb-6">🐟</div>
              <h3 className="text-4xl font-bold text-gray-900 mb-8">Sturgeon AI Features</h3>
              <div className="space-y-5">
                {[
                  {icon: '📊', title: 'Contract Analytics', desc: 'Historical spend patterns & agency trends'},
                  {icon: '🎯', title: 'Opportunity Scoring', desc: 'AI-powered win probability assessment'},
                  {icon: '👥', title: 'Teaming Recommendations', desc: 'Find complementary partners'},
                  {icon: '📝', title: 'Proposal Intelligence', desc: 'Past performance insights & win themes'}
                ].map((feature, i) => (
                  <div key={i} className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl p-5 border-l-4 border-cyan-500 hover:shadow-lg transition-all transform hover:translate-x-2">
                    <div className="flex items-start gap-4">
                      <span className="text-3xl">{feature.icon}</span>
                      <div>
                        <div className="font-bold text-gray-900 text-lg mb-1">{feature.title}</div>
                        <div className="text-sm text-gray-600">{feature.desc}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-5 py-2 rounded-full text-sm font-bold mb-6 shadow-lg">
                <span>🐟</span> AI-Powered Intelligence Platform
              </div>
              <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
                Sturgeon AI: <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Smart Contract Intelligence</span>
              </h2>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Navigate complex contracting landscapes with AI-powered intelligence. Track opportunities, analyze competitors, and win more business.
              </p>
              <div className="space-y-5 mb-10">
                {[
                  {title: 'Real-Time Opportunity Tracking', desc: 'Monitor multiple sources and contract modifications 24/7'},
                  {title: 'Competitor Intelligence', desc: 'Track who\'s winning what and their proven strategies'},
                  {title: 'Contract Vehicle Matching', desc: 'Find the right vehicles for your capabilities'}
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 text-lg">{item.title}</div>
                      <div className="text-gray-600">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <a href="/products/sturgeon-ai" className="inline-block bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-10 py-5 rounded-xl font-bold text-xl hover:shadow-2xl hover:shadow-cyan-500/50 transition-all transform hover:scale-105">
                🐟 Explore Sturgeon AI →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: GovCon Services - Separate from Sturgeon AI */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute w-96 h-96 top-0 right-0 bg-indigo-500/20 rounded-full blur-3xl"></div>
          <div className="absolute w-96 h-96 bottom-0 left-0 bg-purple-500/20 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-5 py-2 rounded-full text-sm font-bold mb-6 shadow-lg shadow-yellow-500/50">
              <span>🏛️</span> Government Contracting Services
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
              <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 bg-clip-text text-transparent">Government Contracting</span> Expertise
            </h2>
            <p className="text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Specialized consulting and services for navigating the federal contracting ecosystem. From SAM registration to proposal writing to compliance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '📋',
                title: 'Registration & Compliance',
                items: ['SAM.gov registration', 'CAGE code acquisition', 'Certification assistance', 'Compliance audits']
              },
              {
                icon: '🎯',
                title: 'Opportunity Capture',
                items: ['Market research', 'Capability statements', 'Teaming & partnerships', 'Bid/no-bid decisions']
              },
              {
                icon: '✍️',
                title: 'Proposal Development',
                items: ['Technical writing', 'Past performance', 'Pricing strategies', 'Submission management']
              }
            ].map((service, i) => (
              <div key={i} className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:shadow-2xl hover:shadow-purple-500/20 transition-all transform hover:scale-105">
                <div className="text-6xl mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-6">{service.title}</h3>
                <ul className="space-y-3">
                  {service.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-yellow-400/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-yellow-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      </div>
                      <span className="text-gray-200">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <a href="/contact" className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-12 py-5 rounded-xl font-bold text-xl hover:shadow-2xl hover:shadow-yellow-500/50 transition-all transform hover:scale-105">
              🏛️ Discuss GovCon Services →
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA - Premium Gradient */}
      <section className="py-24 bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDMwaC02di02aDZ2Ljh6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight drop-shadow-lg">
            Ready to Transform Your Business? 🚀
          </h2>
          <p className="text-2xl text-white/90 mb-10 leading-relaxed">
            Whether you need strategic AI consulting, custom system development, or specialized contracting services - we're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <a href="/ai-maturity-assessment" className="bg-white text-gray-900 px-12 py-5 rounded-xl font-bold text-xl hover:shadow-2xl hover:bg-gray-100 transition-all transform hover:scale-105">
              📊 Free AI Assessment
            </a>
            <a href="/contact" className="backdrop-blur-md bg-white/20 border-2 border-white text-white px-12 py-5 rounded-xl font-bold text-xl hover:bg-white/30 transition-all transform hover:scale-105">
              📞 Schedule Consultation
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export const metadata = {
  title: "Trapier Management LLC | AI Transformation for Traditional Industries",
  description: "Service-Connected Disabled Veteran-Owned Small Business (SDVOSB) specializing in AI transformation for Fortune 500 companies in construction, retail, hospitality, and insurance. CAGE Code: 12LN8",
};

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-20">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="inline-block bg-blue-700/30 px-4 py-2 rounded-full text-sm font-semibold">
                Service-Connected Disabled Veteran-Owned Small Business
              </div>
              <div className="inline-block bg-yellow-500 text-gray-900 px-4 py-2 rounded-full text-sm font-bold">
                CAGE: 12LN8
              </div>
            </div>
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              AI Transformation for Traditional Industries
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Fortune 500-proven AI strategies for construction, retail, hospitality, and insurance. Based in Charlotte, North Carolina.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/ai-maturity-assessment" className="bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition text-center">
                Assess Your AI Maturity
              </a>
              <a href="/contact" className="bg-white/10 border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/20 transition text-center">
                Book Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Blue Collar Sectors */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Four Verticals, Proven Results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We specialize in AI transformation for traditional industries where technology meets real-world operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Construction */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 border-2 border-orange-200 rounded-2xl p-8 hover:shadow-xl transition">
              <div className="text-4xl mb-4">🏗️</div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Construction</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-orange-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">Project delay prediction</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-orange-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">Equipment maintenance optimization</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-orange-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">Safety compliance automation</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-orange-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">Bid/proposal generation</span>
                </li>
              </ul>
            </div>

            {/* Retail */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-2xl p-8 hover:shadow-xl transition">
              <div className="text-4xl mb-4">🛒</div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Retail</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">Inventory optimization</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">Customer behavior prediction</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">Dynamic pricing strategies</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">Supply chain intelligence</span>
                </li>
              </ul>
            </div>

            {/* Hospitality */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 rounded-2xl p-8 hover:shadow-xl transition">
              <div className="text-4xl mb-4">🏨</div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Hospitality</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-purple-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">Demand forecasting</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-purple-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">Staff scheduling optimization</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-purple-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">Guest experience personalization</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-purple-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">Revenue management</span>
                </li>
              </ul>
            </div>

            {/* Insurance */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-8 hover:shadow-xl transition">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Insurance</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">Claims processing automation</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">Risk assessment models</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">Fraud detection</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">Policy underwriting optimization</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Products
            </h2>
            <p className="text-xl text-gray-600">
              Purpose-built AI solutions for traditional industries
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Sturgeon AI */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Sturgeon AI</h3>
              <p className="text-gray-700 mb-6">
                Government contracting intelligence platform for SDVOSB companies
              </p>
              <ul className="space-y-2 mb-6 text-sm">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Contract opportunity identification</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Compliance tracking</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Bid/proposal automation</span>
                </li>
              </ul>
              <a href="/products/sturgeon-ai" className="text-blue-600 font-bold hover:text-blue-700">
                Learn More →
              </a>
            </div>

            {/* Harpoon AI */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Harpoon AI</h3>
              <p className="text-gray-700 mb-6">
                No-code workflow automation platform for operational excellence
              </p>
              <ul className="space-y-2 mb-6 text-sm">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Process mapping & optimization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Integration with existing systems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>No-code automation builder</span>
                </li>
              </ul>
              <a href="/products/harpoon-ai" className="text-blue-600 font-bold hover:text-blue-700">
                Learn More →
              </a>
            </div>

            {/* Empire Build Lab */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Empire Build Lab</h3>
              <p className="text-gray-700 mb-6">
                Custom AI development for unique business challenges
              </p>
              <ul className="space-y-2 mb-6 text-sm">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Bespoke AI solutions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Full-stack AI implementation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Enterprise integration</span>
                </li>
              </ul>
              <a href="/products/empire-build-lab" className="text-blue-600 font-bold hover:text-blue-700">
                Learn More →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Morgan AI Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-indigo-900 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Meet Morgan: Your AI Assistant
            </h2>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Morgan is our AI-powered assistant that helps you understand our AI Maturity Model, calculate ROI, and book consultations. Click the chat button to start a conversation.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-yellow-400 to-orange-500">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Business?
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

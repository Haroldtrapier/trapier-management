export default function AssessmentPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">AI Maturity Assessment</h1>
          <p className="text-xl text-blue-100">Coming Soon - Full Interactive Assessment</p>
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xl text-gray-600 mb-8">Our comprehensive AI maturity assessment is being finalized.</p>
          <a href="/contact" className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700">
            Contact Us for Manual Assessment
          </a>
        </div>
      </section>
    </main>
  );
}
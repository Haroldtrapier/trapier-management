"use client";

import { useState } from "react";

export default function AIMaturityAssessment() {
  const [currentDimension, setCurrentDimension] = useState(0);
  const [scores, setScores] = useState<number[]>(Array(8).fill(0));
  const [showResults, setShowResults] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    industry: ""
  });

  const dimensions = [
    {
      name: "Data Foundation",
      description: "Quality, accessibility, and governance of data",
      levels: [
        { level: 0, label: "None", description: "No data strategy or infrastructure" },
        { level: 1, label: "Initial", description: "Basic data collection, ad-hoc" },
        { level: 2, label: "Developing", description: "Some structure, inconsistent quality" },
        { level: 3, label: "Defined", description: "Documented processes, good quality" },
        { level: 4, label: "Managed", description: "Centralized, high quality, measured" },
        { level: 5, label: "Optimized", description: "Real-time, predictive, enterprise-wide" }
      ]
    },
    {
      name: "AI Capability",
      description: "AI/ML skills, tools, and deployment ability",
      levels: [
        { level: 0, label: "None", description: "No AI capabilities" },
        { level: 1, label: "Initial", description: "Exploratory, proof of concepts" },
        { level: 2, label: "Developing", description: "Some production models" },
        { level: 3, label: "Defined", description: "Standard practices, multiple deployments" },
        { level: 4, label: "Managed", description: "MLOps, automated pipelines" },
        { level: 5, label: "Optimized", description: "AI-native, continuous innovation" }
      ]
    },
    {
      name: "Process Integration",
      description: "AI embedded in business processes",
      levels: [
        { level: 0, label: "None", description: "Manual processes only" },
        { level: 1, label: "Initial", description: "Isolated automation pilots" },
        { level: 2, label: "Developing", description: "Some process automation" },
        { level: 3, label: "Defined", description: "AI in key workflows" },
        { level: 4, label: "Managed", description: "End-to-end AI-driven processes" },
        { level: 5, label: "Optimized", description: "Autonomous, self-optimizing processes" }
      ]
    },
    {
      name: "Talent & Culture",
      description: "AI skills, mindset, and adoption",
      levels: [
        { level: 0, label: "None", description: "No AI awareness" },
        { level: 1, label: "Initial", description: "Awareness, some training" },
        { level: 2, label: "Developing", description: "Dedicated AI roles, basic skills" },
        { level: 3, label: "Defined", description: "AI CoE, widespread literacy" },
        { level: 4, label: "Managed", description: "AI-first culture, upskilling" },
        { level: 5, label: "Optimized", description: "Innovation mindset, continuous learning" }
      ]
    },
    {
      name: "Governance & Ethics",
      description: "AI policies, compliance, and responsible AI",
      levels: [
        { level: 0, label: "None", description: "No governance" },
        { level: 1, label: "Initial", description: "Basic awareness of risks" },
        { level: 2, label: "Developing", description: "Some policies, reactive" },
        { level: 3, label: "Defined", description: "Formal policies, oversight" },
        { level: 4, label: "Managed", description: "Proactive monitoring, compliance" },
        { level: 5, label: "Optimized", description: "Ethical AI leadership, industry example" }
      ]
    },
    {
      name: "Technology Infrastructure",
      description: "Computing, platforms, and architecture",
      levels: [
        { level: 0, label: "None", description: "No AI infrastructure" },
        { level: 1, label: "Initial", description: "Basic cloud resources" },
        { level: 2, label: "Developing", description: "Some ML platforms, fragmented" },
        { level: 3, label: "Defined", description: "Unified platform, scalable" },
        { level: 4, label: "Managed", description: "Enterprise AI platform, optimized" },
        { level: 5, label: "Optimized", description: "Cloud-native, auto-scaling, cutting-edge" }
      ]
    },
    {
      name: "Value Realization",
      description: "ROI measurement and business impact",
      levels: [
        { level: 0, label: "None", description: "No value tracking" },
        { level: 1, label: "Initial", description: "Anecdotal benefits" },
        { level: 2, label: "Developing", description: "Some KPIs, inconsistent" },
        { level: 3, label: "Defined", description: "Measured ROI, business case" },
        { level: 4, label: "Managed", description: "Continuous value tracking, portfolio" },
        { level: 5, label: "Optimized", description: "AI as competitive advantage, market leader" }
      ]
    },
    {
      name: "Innovation & Adaptation",
      description: "Experimentation and continuous improvement",
      levels: [
        { level: 0, label: "None", description: "No innovation culture" },
        { level: 1, label: "Initial", description: "Ad-hoc experiments" },
        { level: 2, label: "Developing", description: "Some innovation initiatives" },
        { level: 3, label: "Defined", description: "Structured innovation process" },
        { level: 4, label: "Managed", description: "Continuous experimentation, fast iteration" },
        { level: 5, label: "Optimized", description: "Industry thought leader, R&D driver" }
      ]
    }
  ];

  const handleScoreSelect = (score: number) => {
    const newScores = [...scores];
    newScores[currentDimension] = score;
    setScores(newScores);

    if (currentDimension < dimensions.length - 1) {
      setCurrentDimension(currentDimension + 1);
    }
  };

  const calculateTotal = () => scores.reduce((a, b) => a + b, 0);

  const getMaturityLevel = (total: number) => {
    if (total <= 10) return { level: "Beginner", color: "text-red-600" };
    if (total <= 20) return { level: "Developing", color: "text-orange-600" };
    if (total <= 30) return { level: "Intermediate", color: "text-yellow-600" };
    if (total <= 35) return { level: "Advanced", color: "text-blue-600" };
    return { level: "Optimized", color: "text-green-600" };
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowResults(true);
    // Here you would send data to backend/n8n webhook
  };

  const totalScore = calculateTotal();
  const maturity = getMaturityLevel(totalScore);

  if (showResults) {
    return (
      <main className="min-h-screen bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h1 className="text-4xl font-bold text-center mb-8">
              Your AI Maturity Assessment Results
            </h1>

            <div className="text-center mb-12">
              <div className="text-6xl font-bold mb-4">{totalScore}/40</div>
              <div className={`text-3xl font-bold ${maturity.color}`}>
                {maturity.level}
              </div>
            </div>

            <div className="space-y-4 mb-12">
              {dimensions.map((dim, idx) => (
                <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <div className="font-semibold">{dim.name}</div>
                    <div className="text-sm text-gray-600">{dim.description}</div>
                  </div>
                  <div className="text-2xl font-bold text-blue-600 ml-4">
                    {scores[idx]}/5
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-bold mb-4">Personalized Recommendations</h3>
              <ul className="space-y-2 text-sm">
                {scores[0] < 3 && (
                  <li>• <strong>Data Foundation:</strong> Establish a data governance framework and centralize data sources</li>
                )}
                {scores[1] < 3 && (
                  <li>• <strong>AI Capability:</strong> Invest in AI training for your team and hire ML specialists</li>
                )}
                {scores[2] < 3 && (
                  <li>• <strong>Process Integration:</strong> Identify high-value processes for AI automation</li>
                )}
                {scores[3] < 3 && (
                  <li>• <strong>Talent & Culture:</strong> Create an AI Center of Excellence to drive adoption</li>
                )}
              </ul>
            </div>

            <div className="text-center">
              <a href="/contact" className="inline-block bg-blue-900 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-800 transition">
                Book Your Strategy Consultation →
              </a>
            </div>
          </div>
        </div>
      </main>
    );
  }

  if (currentDimension < dimensions.length) {
    const currentDim = dimensions[currentDimension];

    return (
      <main className="min-h-screen bg-gradient-to-br from-blue-900 to-indigo-900 py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="mb-8">
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>Question {currentDimension + 1} of {dimensions.length}</span>
                <span>{Math.round(((currentDimension) / dimensions.length) * 100)}% Complete</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-blue-600 h-2 rounded-full transition-all"
                  style={{ width: `${((currentDimension) / dimensions.length) * 100}%` }}
                />
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-4">{currentDim.name}</h2>
            <p className="text-gray-600 mb-8">{currentDim.description}</p>

            <div className="space-y-4">
              {currentDim.levels.map((levelData) => (
                <button
                  key={levelData.level}
                  onClick={() => handleScoreSelect(levelData.level)}
                  className="w-full text-left p-6 border-2 border-gray-200 rounded-xl hover:border-blue-500 hover:bg-blue-50 transition group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xl font-bold group-hover:text-blue-600">
                      {levelData.label}
                    </span>
                    <span className="text-2xl font-bold text-gray-400 group-hover:text-blue-600">
                      {levelData.level}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">{levelData.description}</p>
                </button>
              ))}
            </div>

            {currentDimension > 0 && (
              <button
                onClick={() => setCurrentDimension(currentDimension - 1)}
                className="mt-8 text-blue-600 font-semibold hover:text-blue-700"
              >
                ← Previous Question
              </button>
            )}
          </div>
        </div>
      </main>
    );
  }

  // Contact form before showing results
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-900 to-indigo-900 py-20">
      <div className="max-w-2xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Get Your Personalized Results
          </h2>
          <p className="text-gray-600 text-center mb-8">
            Enter your information to receive your detailed AI maturity report and custom recommendations.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold mb-2">Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Email</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Company</label>
              <input
                type="text"
                required
                value={formData.company}
                onChange={(e) => setFormData({...formData, company: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Industry</label>
              <select
                required
                value={formData.industry}
                onChange={(e) => setFormData({...formData, industry: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select Industry</option>
                <option value="construction">Construction</option>
                <option value="retail">Retail</option>
                <option value="hospitality">Hospitality</option>
                <option value="insurance">Insurance</option>
                <option value="other">Other</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-900 text-white py-4 rounded-lg font-bold text-lg hover:bg-blue-800 transition"
            >
              View My Results →
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}

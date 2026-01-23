"use client";

import { useState } from "react";

export default function AIMaturityAssessment() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    industry: "",
    phone: ""
  });

  const questions = [
    {
      question: "How would you describe your organization's current data foundation?",
      options: [
        { label: "No centralized data strategy", score: 1 },
        { label: "Some data collection, mostly siloed", score: 2 },
        { label: "Centralized data warehouse with decent quality", score: 3 },
        { label: "Advanced data infrastructure with real-time capabilities", score: 4 }
      ]
    },
    {
      question: "What's your current level of AI/ML implementation?",
      options: [
        { label: "No AI initiatives", score: 1 },
        { label: "Exploring with proof-of-concepts", score: 2 },
        { label: "Some production AI models deployed", score: 3 },
        { label: "AI-driven processes across the organization", score: 4 }
      ]
    },
    {
      question: "How ready is your team for AI transformation?",
      options: [
        { label: "Limited AI awareness", score: 1 },
        { label: "Some training, growing interest", score: 2 },
        { label: "Dedicated AI roles and active learning", score: 3 },
        { label: "AI-first culture with continuous upskilling", score: 4 }
      ]
    }
  ];

  const handleAnswer = (score: number) => {
    const newAnswers = [...answers, score];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowForm(true);
    }
  };

  const totalScore = answers.reduce((a, b) => a + b, 0);
  const maxScore = questions.length * 4;
  const percentage = Math.round((totalScore / maxScore) * 100);

  const getMaturityLevel = () => {
    if (percentage < 30) return { level: "Beginner", color: "text-red-600", message: "You're in the early stages. Let's build your AI foundation." };
    if (percentage < 50) return { level: "Developing", color: "text-orange-600", message: "You've started the journey. Let's accelerate your progress." };
    if (percentage < 75) return { level: "Intermediate", color: "text-yellow-600", message: "You're making progress. Let's optimize your AI strategy." };
    return { level: "Advanced", color: "text-green-600", message: "You're well positioned. Let's maximize your competitive advantage." };
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would send to backend/n8n webhook
    console.log("Form submitted:", { ...formData, score: totalScore, answers });

    // Redirect to calendly or show success message
    window.location.href = "/contact?assessment=complete&score=" + totalScore;
  };

  if (showForm) {
    const maturity = getMaturityLevel();

    return (
      <main className="min-h-screen bg-gradient-to-br from-blue-900 to-indigo-900 py-20">
        <div className="max-w-2xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <div className="text-center mb-8">
              <div className="text-6xl font-bold text-blue-900 mb-2">{percentage}%</div>
              <div className={`text-2xl font-bold mb-4 ${maturity.color}`}>
                {maturity.level}
              </div>
              <p className="text-lg text-gray-700">
                {maturity.message}
              </p>
            </div>

            <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 mb-8">
              <h3 className="font-bold text-lg mb-2">📅 Book Your Strategy Session</h3>
              <p className="text-sm text-gray-700 mb-4">
                Get a personalized AI transformation roadmap in a 30-minute consultation with our experts.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-2">Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="John Smith"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Email *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="john@company.com"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Company *</label>
                <input
                  type="text"
                  required
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="ABC Construction"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Industry *</label>
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
              <div>
                <label className="block text-sm font-semibold mb-2">Phone</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="(555) 123-4567"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-900 text-white py-4 rounded-lg font-bold text-lg hover:bg-blue-800 transition"
              >
                Book My Strategy Session →
              </button>
            </form>
          </div>
        </div>
      </main>
    );
  }

  const currentQ = questions[currentQuestion];

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-900 to-indigo-900 py-20">
      <div className="max-w-3xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <div className="mb-8">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Question {currentQuestion + 1} of {questions.length}</span>
              <span>{Math.round(((currentQuestion) / questions.length) * 100)}% Complete</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-600 h-2 rounded-full transition-all"
                style={{ width: `${((currentQuestion) / questions.length) * 100}%` }}
              />
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-8 text-gray-900">{currentQ.question}</h2>

          <div className="space-y-4">
            {currentQ.options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleAnswer(option.score)}
                className="w-full text-left p-6 border-2 border-gray-200 rounded-xl hover:border-blue-500 hover:bg-blue-50 transition group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-lg font-medium group-hover:text-blue-600">
                    {option.label}
                  </span>
                  <svg className="w-6 h-6 text-gray-400 group-hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </button>
            ))}
          </div>

          {currentQuestion > 0 && (
            <button
              onClick={() => {
                setCurrentQuestion(currentQuestion - 1);
                setAnswers(answers.slice(0, -1));
              }}
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

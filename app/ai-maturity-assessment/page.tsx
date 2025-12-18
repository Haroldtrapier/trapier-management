"use client";

import { useState } from "react";

export default function AIMaturityAssessment() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "", lastName: "", email: "", company: "", role: "", phone: "",
    q1_automation: "", q2_data_strategy: "", q3_team_literacy: "",
    q4_infrastructure: "", q5_leadership: "", q6_budget: "",
    q7_processes: "", q8_integration: "", q9_measurement: "", q10_culture: "",
  });

  const [score, setScore] = useState<number | null>(null);
  const [maturityLevel, setMaturityLevel] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const questions = [
    {
      id: "q1_automation",
      question: "What percentage of your business processes are currently automated?",
      options: [
        { value: "0", label: "0-10% - Mostly manual", points: 1 },
        { value: "1", label: "10-30% - Some automation", points: 2 },
        { value: "2", label: "30-50% - Moderate automation", points: 3 },
        { value: "3", label: "50-70% - Significant automation", points: 4 },
        { value: "4", label: "70%+ - Highly automated", points: 5 },
      ]
    },
    {
      id: "q2_data_strategy",
      question: "How would you describe your data strategy?",
      options: [
        { value: "0", label: "No formal strategy - data is siloed", points: 1 },
        { value: "1", label: "Beginning to consolidate", points: 2 },
        { value: "2", label: "Centralized data warehouse", points: 3 },
        { value: "3", label: "Real-time data pipeline", points: 4 },
        { value: "4", label: "AI-ready infrastructure", points: 5 },
      ]
    },
    {
      id: "q3_team_literacy",
      question: "What is the AI/ML literacy level of your team?",
      options: [
        { value: "0", label: "No AI knowledge", points: 1 },
        { value: "1", label: "Awareness but no experience", points: 2 },
        { value: "2", label: "Some team members experimenting", points: 3 },
        { value: "3", label: "Dedicated AI/ML team", points: 4 },
        { value: "4", label: "AI expertise across organization", points: 5 },
      ]
    },
    {
      id: "q4_infrastructure",
      question: "How would you rate your technology infrastructure?",
      options: [
        { value: "0", label: "Legacy systems, no cloud", points: 1 },
        { value: "1", label: "Hybrid on-prem/cloud", points: 2 },
        { value: "2", label: "Primarily cloud-based", points: 3 },
        { value: "3", label: "Modern cloud-native", points: 4 },
        { value: "4", label: "AI-optimized infrastructure", points: 5 },
      ]
    },
    {
      id: "q5_leadership",
      question: "How committed is leadership to AI transformation?",
      options: [
        { value: "0", label: "Not a priority", points: 1 },
        { value: "1", label: "Interested but cautious", points: 2 },
        { value: "2", label: "Committed with budget", points: 3 },
        { value: "3", label: "Strategic priority with roadmap", points: 4 },
        { value: "4", label: "AI-first mandate", points: 5 },
      ]
    },
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const calculateScore = async () => {
    setIsSubmitting(true);

    let totalPoints = 0;
    questions.forEach(q => {
      const answer = formData[q.id as keyof typeof formData];
      const option = q.options.find(opt => opt.value === answer);
      if (option) totalPoints += option.points;
    });

    const percentage = (totalPoints / 25) * 100;
    const calculatedScore = Math.round(percentage);

    let calculatedLevel;
    if (percentage < 20) calculatedLevel = 1;
    else if (percentage < 40) calculatedLevel = 2;
    else if (percentage < 60) calculatedLevel = 3;
    else if (percentage < 80) calculatedLevel = 4;
    else calculatedLevel = 5;

    setScore(calculatedScore);
    setMaturityLevel(calculatedLevel);
    setStep(3);
    setIsSubmitting(false);
  };

  const isContactComplete = formData.firstName && formData.lastName && formData.email && formData.company && formData.role;
  const isAssessmentComplete = questions.every(q => formData[q.id as keyof typeof formData]);

  const maturityLevels = [
    {
      level: 1,
      name: "Fragmented Awareness",
      description: "AI is on your radar but implementation is ad-hoc. No coordinated strategy.",
      nextSteps: ["Document current processes", "Identify automation candidates", "Build leadership buy-in"]
    },
    {
      level: 2,
      name: "Siloed Experiments",
      description: "Departments experimenting independently. No enterprise-wide coordination.",
      nextSteps: ["Create centralized AI strategy", "Standardize tools", "Invest in data infrastructure"]
    },
    {
      level: 3,
      name: "Coordinated Deployment",
      description: "Clear AI strategy with executive sponsorship. Structured implementation.",
      nextSteps: ["Scale successful pilots", "Integrate AI across workflows", "Advanced analytics"]
    },
    {
      level: 4,
      name: "Integrated Operations",
      description: "AI embedded in core operations. Continuous optimization.",
      nextSteps: ["Predictive capabilities", "Advanced multi-agent systems", "AI innovation lab"]
    },
    {
      level: 5,
      name: "AI-Native Organization",
      description: "AI is your competitive advantage. Leading your industry.",
      nextSteps: ["Stay at cutting edge", "Share best practices", "Build proprietary AI IP"]
    }
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">AI Maturity Assessment</h1>
          <p className="text-xl text-blue-100">Discover your AI maturity level in 5 minutes</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold text-gray-600">Step {step} of 3</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-blue-600 h-2 rounded-full transition-all" style={{ width: `${(step / 3) * 100}%` }} />
          </div>
        </div>

        {step === 1 && (
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Get Started</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold mb-2">First Name *</label>
                <input type="text" value={formData.firstName} onChange={(e) => handleInputChange("firstName", e.target.value)} required className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Last Name *</label>
                <input type="text" value={formData.lastName} onChange={(e) => handleInputChange("lastName", e.target.value)} required className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Email *</label>
                <input type="email" value={formData.email} onChange={(e) => handleInputChange("email", e.target.value)} required className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Company *</label>
                <input type="text" value={formData.company} onChange={(e) => handleInputChange("company", e.target.value)} required className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Role *</label>
                <select value={formData.role} onChange={(e) => handleInputChange("role", e.target.value)} required className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500">
                  <option value="">Select your role</option>
                  <option value="ceo">CEO/Founder</option>
                  <option value="cto">CTO/CIO</option>
                  <option value="vp">VP/Director</option>
                  <option value="manager">Manager</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            <button onClick={() => isContactComplete && setStep(2)} disabled={!isContactComplete} className={`mt-8 w-full py-4 rounded-lg font-bold text-lg transition ${isContactComplete ? "bg-blue-600 text-white hover:bg-blue-700" : "bg-gray-300 text-gray-500"}`}>
              Continue to Assessment →
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Assessment Questions</h2>
            <div className="space-y-8">
              {questions.map((q, idx) => (
                <div key={q.id}>
                  <label className="block text-lg font-semibold mb-4">{idx + 1}. {q.question}</label>
                  <div className="space-y-3">
                    {q.options.map((option) => (
                      <label key={option.value} className={`flex items-start p-4 border-2 rounded-lg cursor-pointer transition ${formData[q.id as keyof typeof formData] === option.value ? "border-blue-600 bg-blue-50" : "border-gray-200 hover:border-blue-300"}`}>
                        <input type="radio" name={q.id} value={option.value} checked={formData[q.id as keyof typeof formData] === option.value} onChange={(e) => handleInputChange(q.id, e.target.value)} className="mt-1 mr-3" />
                        <span>{option.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex gap-4 mt-8">
              <button onClick={() => setStep(1)} className="flex-1 py-4 rounded-lg font-bold bg-gray-200 hover:bg-gray-300">← Back</button>
              <button onClick={calculateScore} disabled={!isAssessmentComplete || isSubmitting} className={`flex-1 py-4 rounded-lg font-bold ${isAssessmentComplete && !isSubmitting ? "bg-blue-600 text-white hover:bg-blue-700" : "bg-gray-300 text-gray-500"}`}>
                {isSubmitting ? "Calculating..." : "See My Results →"}
              </button>
            </div>
          </div>
        )}

        {step === 3 && maturityLevel && (
          <div>
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8 text-center">
              <h2 className="text-3xl font-bold mb-4">Your AI Maturity Score</h2>
              <div className="text-8xl font-bold text-blue-600 mb-4">{score}%</div>
              <div className={`inline-block px-6 py-3 rounded-full text-xl font-bold ${maturityLevel === 1 ? "bg-red-100 text-red-800" : maturityLevel === 2 ? "bg-orange-100 text-orange-800" : maturityLevel === 3 ? "bg-yellow-100 text-yellow-800" : maturityLevel === 4 ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"}`}>
                Level {maturityLevel}: {maturityLevels[maturityLevel - 1].name}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h3 className="text-2xl font-bold mb-4">What This Means</h3>
              <p className="text-lg text-gray-700 mb-6">{maturityLevels[maturityLevel - 1].description}</p>
              <div className="mb-8">
                <h4 className="text-xl font-bold mb-3">Recommended Next Steps:</h4>
                <ol className="space-y-2">
                  {maturityLevels[maturityLevel - 1].nextSteps.map((step, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">{idx + 1}</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg shadow-lg p-8 text-center">
              <h3 className="text-3xl font-bold mb-4">Ready to Level Up?</h3>
              <p className="text-xl mb-6">Schedule a strategy session to build your custom AI transformation roadmap.</p>
              <a href="/contact" className="inline-block bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition">
                Book Strategy Session →
              </a>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
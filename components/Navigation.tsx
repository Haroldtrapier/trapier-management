"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-blue-900">Trapier Management</div>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/ai-maturity-model" className="text-gray-700 hover:text-blue-900 font-medium transition">
              AI Maturity Model
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-900 font-medium transition">
              Contact
            </Link>
            <Link href="/ai-maturity-assessment" className="bg-blue-900 text-white px-6 py-2 rounded-lg font-bold hover:bg-blue-800 transition">
              Free Assessment
            </Link>
          </div>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-gray-700">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <Link href="/ai-maturity-model" className="block py-2 text-gray-700" onClick={() => setIsMenuOpen(false)}>
              AI Maturity Model
            </Link>
            <Link href="/contact" className="block py-2 text-gray-700" onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
            <Link href="/ai-maturity-assessment" className="block mt-4 bg-blue-900 text-white px-6 py-3 rounded-lg font-bold text-center" onClick={() => setIsMenuOpen(false)}>
              Free Assessment
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
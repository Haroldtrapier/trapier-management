"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-blue-900">Trapier Management</div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/ai-maturity-model" className="text-gray-700 hover:text-blue-900 font-medium transition">
              AI Maturity Model
            </Link>

            {/* Products Dropdown */}
            <div className="relative group">
              <button className="text-gray-700 hover:text-blue-900 font-medium transition flex items-center">
                Products
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 bg-white border border-gray-200 rounded-lg shadow-lg">
                <Link href="/products/sturgeon-ai" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-blue-900 transition rounded-t-lg">
                  <div className="font-medium">Sturgeon AI</div>
                  <div className="text-sm text-gray-500">GovCon Intelligence</div>
                </Link>
                <Link href="/products/harpoon-ai" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-blue-900 transition">
                  <div className="font-medium">Harpoon AI</div>
                  <div className="text-sm text-gray-500">Sales Automation</div>
                </Link>
                <Link href="/products/empire-build-lab" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-blue-900 transition rounded-b-lg">
                  <div className="font-medium">Empire Build Lab</div>
                  <div className="text-sm text-gray-500">Custom AI Development</div>
                </Link>
              </div>
            </div>

            <Link href="/contact" className="text-gray-700 hover:text-blue-900 font-medium transition">
              Contact
            </Link>
            <Link href="/ai-maturity-assessment" className="bg-blue-900 text-white px-6 py-2 rounded-lg font-bold hover:bg-blue-800 transition">
              Free Assessment
            </Link>
          </div>

          {/* Mobile menu button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-gray-700 hover:text-blue-900 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <Link href="/ai-maturity-model" className="block py-2 text-gray-700 hover:text-blue-900 font-medium" onClick={() => setIsMenuOpen(false)}>
              AI Maturity Model
            </Link>

            {/* Mobile Products Dropdown */}
            <div className="py-2">
              <button onClick={() => setIsProductsOpen(!isProductsOpen)} className="w-full text-left font-medium text-gray-900 flex items-center justify-between">
                Products
                <svg className={`w-4 h-4 transition-transform ${isProductsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isProductsOpen && (
                <div className="pl-4 mt-2 space-y-2">
                  <Link href="/products/sturgeon-ai" className="block py-2 text-gray-700 hover:text-blue-900" onClick={() => setIsMenuOpen(false)}>
                    Sturgeon AI
                  </Link>
                  <Link href="/products/harpoon-ai" className="block py-2 text-gray-700 hover:text-blue-900" onClick={() => setIsMenuOpen(false)}>
                    Harpoon AI
                  </Link>
                  <Link href="/products/empire-build-lab" className="block py-2 text-gray-700 hover:text-blue-900" onClick={() => setIsMenuOpen(false)}>
                    Empire Build Lab
                  </Link>
                </div>
              )}
            </div>

            <Link href="/contact" className="block py-2 text-gray-700 hover:text-blue-900 font-medium" onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
            <Link href="/ai-maturity-assessment" className="block mt-4 bg-blue-900 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-800 transition text-center" onClick={() => setIsMenuOpen(false)}>
              Free Assessment
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
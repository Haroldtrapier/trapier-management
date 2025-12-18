import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-white text-xl font-bold mb-4">Trapier Management LLC</h3>
            <p className="text-gray-400 mb-4">
              Service-Disabled Veteran-Owned Small Business specializing in AI transformation for traditional industries.
            </p>
            <div className="flex items-center space-x-2 text-sm">
              <span className="bg-blue-900 text-white px-3 py-1 rounded">SDVOSB Certified</span>
            </div>
            <div className="mt-4">
              <p className="text-sm text-gray-400">Charlotte, North Carolina</p>
              <a href="mailto:info@trapiermanagement.com" className="text-sm text-blue-400 hover:text-blue-300">
                info@trapiermanagement.com
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2">
              <li><Link href="/ai-maturity-model" className="hover:text-white transition">AI Maturity Model</Link></li>
              <li><Link href="/ai-maturity-assessment" className="hover:text-white transition">Free Assessment</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/contact" className="hover:text-white transition">Contact Us</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8">
          <p className="text-sm text-gray-400 text-center">
            © {currentYear} Trapier Management LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
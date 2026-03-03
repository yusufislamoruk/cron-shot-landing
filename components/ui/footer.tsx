
import Logo from "./logo";

export default function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-12 gap-8 py-8 md:py-4 border-t border-gray-200">
          <div className="sm:col-span-12 lg:col-span-3">
            <Logo />
            <div className="text-sm text-gray-600 mt-2">
              <a
                href="/terms"
                className="text-gray-600 hover:text-gray-900 hover:underline transition duration-150 ease-in-out"
              >
                Terms
              </a>{" "}
              ·{" "}
              <a
                href="/privacy"
                className="text-gray-600 hover:text-gray-900 hover:underline transition duration-150 ease-in-out"
              >
                Privacy Policy
              </a>
            </div>
          </div>

          {/* 2nd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-gray-800 font-medium mb-2">Use Cases</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <a
                  href="/use-case/content-verification"
                  className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Content Verification
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/use-case/competition-tracking"
                  className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Competition Tracking
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/use-case/seo-monitoring"
                  className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  SEO Monitoring
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/use-case/brand-management"
                  className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Brand Management
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/use-case/trend-tracking"
                  className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Trend Tracking
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/use-case/website-compliance"
                  className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Website Compliance
                </a>
              </li>
            </ul>
          </div>

          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-gray-800 font-medium mb-2">Resources</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <a
                  href="/support"
                  className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Support
                </a>
              </li>
            </ul>
          </div>

          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-gray-800 font-medium mb-2">Company</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <a
                  href="/"
                  className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/pricing"
                  className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Pricing
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/privacy"
                  className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div className="sm:col-span-6 md:col-span-3 lg:col-span-3">
            <h6 className="text-gray-800 font-medium mb-2">Subscribe</h6>
            <p className="text-sm text-gray-600 mb-4">
              Get the latest news and articles to your inbox every month.
            </p>
            
          </div>
        </div>

        <div className="md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-gray-200">
          <div className="text-sm text-gray-600 mr-4">
            &copy; cronshot.io All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
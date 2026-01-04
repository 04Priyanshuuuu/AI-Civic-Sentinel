export default function Footer() {
  return (
    <footer
      className="relative border-t border-slate-200"
      style={{
        backgroundImage: "url('/images/footer.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Top Glow */}
      <div className="absolute inset-x-0 -top-24 h-24 bg-gradient-to-r from-blue-100/40 via-indigo-100/40 to-cyan-100/40 blur-3xl pointer-events-none" />

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 md:px-12 py-20">
        {/* About */}
        <div className="mb-20 max-w-4xl">
          <h2 className="text-4xl font-extrabold tracking-tight text-slate-900">
            AI Civic Sentinel
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            AI Civic Sentinel empowers citizens to report civic issues
            effortlessly using AI-powered image analysis, smart severity
            detection, and intelligent department mapping — enabling faster and
            more transparent governance.
          </p>
        </div>

        {/* Links Grid */}
        <div className="grid gap-14 sm:grid-cols-2 md:grid-cols-4">
          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-900 mb-6">
              Contact
            </h4>
            <ul className="space-y-4 text-sm text-slate-600">
              <li>
                <span className="block text-slate-900 font-medium">Phone</span>
                <a
                  href="https://wa.me/919555669802"
                  className="hover:text-blue-600 transition"
                >
                  +91 95556 69802
                </a>
              </li>
              <li>
                <span className="block text-slate-900 font-medium">Email</span>
                <a
                  href="mailto:codevengers4@gmail.com"
                  className="hover:text-blue-600 transition"
                >
                  codevengers4@gmail.com
                </a>
              </li>
              <li>
                <span className="block text-slate-900 font-medium">
                  Address
                </span>
                MMMUT, Gorakhpur, Uttar Pradesh
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-900 mb-6">
              Social
            </h4>
            <ul className="space-y-3 text-sm">
              {["WhatsApp", "Telegram", "Instagram", "GitHub"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-slate-600 hover:text-blue-600 transition"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-900 mb-6">
              Company
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="/about"
                  className="text-slate-600 hover:text-blue-600 transition"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  className="text-slate-600 hover:text-blue-600 transition"
                >
                  Terms of Use
                </a>
              </li>
              <li>
                <a
                  href="/privacy"
                  className="text-slate-600 hover:text-blue-600 transition"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/refund"
                  className="text-slate-600 hover:text-blue-600 transition"
                >
                  Refund Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Account */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-900 mb-6">
              Account
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="/signup"
                  className="text-slate-600 hover:text-blue-600 transition"
                >
                  Create Account
                </a>
              </li>
              <li>
                <a
                  href="/login"
                  className="text-slate-600 hover:text-blue-600 transition"
                >
                  Log In
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>© 2026 AI Civic Sentinel. All rights reserved.</p>
          <p>
            Built with <span className="text-red-500">❤️</span> for smarter
            cities
          </p>
        </div>
      </div>
    </footer>
  );
}

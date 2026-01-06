import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-12 md:grid-cols-4">
        {/* Brand */}
        <div className="space-y-4">
          <h2 className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
            ModernBlog
          </h2>
          <p className="text-sm text-zinc-500 max-w-xs">
            A modern blog about engineering, design, and building products with
            clarity and purpose.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-sm font-semibold text-white mb-4">Navigation</h3>
          <ul className="space-y-3 text-sm text-zinc-400">
            <li>
              <Link to="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-white">
                Articles
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-white">
                About
              </Link>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-sm font-semibold text-white mb-4">Resources</h3>
          <ul className="space-y-3 text-sm text-zinc-400">
            <li>
              <a className="hover:text-white">Documentation</a>
            </li>
            <li>
              <a className="hover:text-white">Changelog</a>
            </li>
            <li>
              <a className="hover:text-white">Roadmap</a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-sm font-semibold text-white mb-4">Subscribe</h3>
          <p className="text-sm text-zinc-500 mb-4">
            Get new articles directly to your inbox.
          </p>
          <form className="flex gap-2">
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-xl bg-zinc-900 border text-white border-zinc-800 px-4 py-2 text-sm focus:outline-none focus:border-indigo-500"
            />
            <button
              type="submit"
              className="rounded-xl bg-indigo-600 px-4 py-2 text-sm font-medium text-white"
            >
              Join
            </button>
          </form>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
          <span>© 2026 ModernBlog. All rights reserved.</span>
          <div className="flex gap-6">
            <a className="hover:text-white">Privacy</a>
            <a className="hover:text-white">Terms</a>
            <a className="hover:text-white">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

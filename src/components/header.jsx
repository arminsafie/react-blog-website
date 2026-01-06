import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll for background opacity
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const NavLinks = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "Articles", path: "/articles" },
    { id: 3, name: "About", path: "/about" },
  ];

  return (
    <motion.header
      className={`fixed top-0 inset-x-0 z-50 backdrop-blur-md transition-colors duration-300 ${
        scrolled ? "bg-zinc-900/90 border-b border-zinc-800" : "bg-zinc-900/75"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand */}
        <Link to="/" className="group">
          <div className="flex flex-col">
            <span className="text-2xl font-extrabold  tracking-tight bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
              ModernBlog
            </span>
            <span className="text-[11px] text-zinc-100 group-hover:text-zinc-400 transition">
              Engineering • Design • Growth
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10 text-sm font-medium">
          {NavLinks.map((item) => (
            <NavLink
              key={item.id}
              to={item.path}
              className={({ isActive }) =>
                `relative text-blue-100 hover:text-white transition
                 after:absolute after:-bottom-1 after:left-0 after:h-[2px] 
                 after:w-full after:scale-x-0 after:bg-indigo-500 after:origin-left after:transition-transform
                 hover:after:scale-x-100 ${
                   isActive ? "text-white after:scale-x-100" : ""
                 }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="rounded-xl border border-zinc-700 px-4 py-2 text-sm text-zinc-300 hover:bg-zinc-900 transition"
          >
            <Link to="/login">Login</Link>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="rounded-xl bg-indigo-600 px-5 py-2 text-sm font-medium text-white shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 transition"
          >
            <Link to="/subscription">Subscribe</Link>
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 rounded-xl hover:bg-zinc-900  text-white transition"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={
          open ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }
        }
        transition={{ duration: 0.3 }}
        className="overflow-hidden lg:hidden border-b border-zinc-800 bg-zinc-950"
      >
        <div className="px-6 py-6 space-y-6 text-sm">
          {NavLinks.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              onClick={() => setOpen(false)}
              className="block text-zinc-400 hover:text-white transition font-medium"
            >
              {item.name}
            </Link>
          ))}

          <div className="pt-4 border-t border-zinc-800 space-y-3">
            <button className="w-full rounded-xl border border-zinc-700 py-2 text-zinc-300 hover:bg-zinc-900 transition">
              <Link to="/login">Login</Link>
            </button>
            <button className="w-full rounded-xl bg-indigo-600 py-2 text-white hover:bg-indigo-500 transition">
              <Link to="/subscription">Subscribe</Link>
            </button>
          </div>
        </div>
      </motion.div>
    </motion.header>
  );
}

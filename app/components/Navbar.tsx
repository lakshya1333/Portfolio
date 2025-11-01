"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Experience", path: "/experience" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-50 w-full px-4 md:px-8 py-6 backdrop-blur-sm"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="group flex items-center gap-2" onClick={closeMenu}>
            <div className="relative">
              <div className="absolute inset-0 bg-linear-to-r from-cyan-500 to-purple-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition"></div>
              <div className="relative px-4 py-2 bg-black rounded-lg border border-cyan-500/50">
                <span className="text-xl font-bold gradient-text">{"<LJ />"}</span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8 items-center">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className="relative group"
              >
                <span
                  className={`text-lg font-medium transition-colors ${
                    pathname === item.path
                      ? "text-cyan-400"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {item.name}
                </span>
                {pathname === item.path && (
                  <motion.div
                    layoutId="navbar-underline"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-linear-to-r from-cyan-500 to-purple-500"
                    initial={false}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-cyan-400 hover:text-cyan-300 transition-colors z-[60]"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <FaTimes className="text-2xl" />
            ) : (
              <FaBars className="text-2xl" />
            )}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu - Outside nav for proper positioning */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[998] md:hidden"
              onClick={closeMenu}
            />

            {/* Slide-in Menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[75vw] max-w-[300px] bg-black border-l border-cyan-500/30 z-[999] md:hidden overflow-y-auto"
            >
              <div className="p-6">
                {/* Close button */}
                <div className="flex justify-end mb-8">
                  <button
                    onClick={closeMenu}
                    className="p-3 text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10 rounded-lg transition-all"
                    aria-label="Close menu"
                  >
                    <FaTimes className="text-2xl" />
                  </button>
                </div>

                {/* Menu Items */}
                <div className="space-y-3">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.path}
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.05 + 0.1 }}
                    >
                      <Link
                        href={item.path}
                        onClick={closeMenu}
                        className="block"
                      >
                        <div
                          className={`py-4 px-5 rounded-lg border transition-all ${
                            pathname === item.path
                              ? "bg-cyan-500/20 border-cyan-500 text-cyan-400 shadow-lg shadow-cyan-500/20"
                              : "bg-white/5 border-gray-700 text-gray-300 hover:border-cyan-500/50 hover:text-white hover:bg-white/10"
                          }`}
                        >
                          <span className="text-lg font-medium">{item.name}</span>
                          {pathname === item.path && (
                            <div className="mt-2 h-0.5 bg-linear-to-r from-cyan-500 to-purple-500 rounded-full" />
                          )}
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Decorative Element */}
                <div className="mt-16 pt-6 border-t border-gray-800">
                  <p className="text-center text-gray-500 text-sm">
                    <span className="gradient-text font-bold text-lg">{"<LJ />"}</span>
                  </p>
                  <p className="text-center text-gray-600 text-xs mt-2">
            
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

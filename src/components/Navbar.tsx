
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/image", label: "Image" },
  { href: "/video", label: "Video" },
  { href: "/resources", label: "Resources" },
  { href: "/download", label: "Download" },
  { href: "/support", label: "Support" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="absolute left-0 top-0 z-50 w-full"
    >
      <div className="mx-auto flex h-[68px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">

        {/* Logo */}
        <Link
          href="/"
          onClick={() => setMobileOpen(false)}
          className="group relative z-10"
        >
          <motion.span
            whileHover={{ scale: 1.05 }}
            className="font-serif text-[23px] font-bold italic tracking-[-1.5px] text-white"
          >
            PixelForge
            <span className="text-white/70">.</span>
          </motion.span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-5 lg:flex">
          {navLinks.map((link) => {
            const active = isActive(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className="group relative py-2 text-[11px] font-medium tracking-wide text-white/85 transition-colors duration-300 hover:text-white"
              >
                {link.label}

                <motion.span
                  initial={false}
                  animate={{
                    scaleX: active ? 1 : 0,
                    opacity: active ? 1 : 0,
                  }}
                  className="absolute -bottom-0.5 left-0 h-[2px] w-full origin-left rounded-full bg-white"
                />

                <span className="absolute -bottom-0.5 left-0 h-[2px] w-full origin-left scale-x-0 rounded-full bg-white/70 transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="hidden items-center gap-2 lg:flex">
          <Link
            href="/download"
            className="group inline-flex items-center gap-1 rounded-full border border-white/30 px-4 py-2 text-[11px] font-semibold text-white transition-all duration-300 hover:border-white hover:bg-white/15"
          >
            Sign up
            <ArrowUpRight
              size={12}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>

          <Link
            href="/download"
            className="rounded-full bg-white px-4 py-2 text-[11px] font-semibold text-violet-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-violet-50 hover:shadow-lg"
          >
            Log in
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          className="relative z-50 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition hover:bg-white/15 lg:hidden"
        >
          <AnimatePresence mode="wait" initial={false}>
            {mobileOpen ? (
              <motion.span
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X size={21} />
              </motion.span>
            ) : (
              <motion.span
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu size={21} />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            className="absolute left-4 right-4 top-[70px] overflow-hidden rounded-2xl border border-white/20 bg-[#6825ed]/95 p-4 shadow-2xl backdrop-blur-xl lg:hidden"
          >
            <nav className="flex flex-col gap-1">
              {navLinks.map((link, index) => {
                const active = isActive(link.href);

                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 ${
                        active
                          ? "bg-white text-violet-700"
                          : "text-white hover:bg-white/15"
                      }`}
                    >
                      {link.label}
                      {active && <ArrowUpRight size={16} />}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            <div className="mt-4 grid grid-cols-2 gap-3 border-t border-white/20 pt-4">
              <Link
                href="/download"
                onClick={() => setMobileOpen(false)}
                className="rounded-full border border-white/50 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Sign up
              </Link>

              <Link
                href="/download"
                onClick={() => setMobileOpen(false)}
                className="rounded-full bg-white py-3 text-center text-sm font-semibold text-violet-700 transition hover:bg-violet-50"
              >
                Log in
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

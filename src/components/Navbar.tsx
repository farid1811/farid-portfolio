"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X, BarChart3, Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

export default function Navbar() {
  const pathname = usePathname();
  const [dark, setDark] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { lang, setLang } = useLanguage();
  const tNav = translations[lang].nav;

  const navLinks = [
    { name: tNav.home, href: "/" },
    { name: tNav.about, href: "/about" },
    { name: tNav.projects, href: "/projects" },
    { name: tNav.research, href: "/research" },
    { name: tNav.resume, href: "/resume" },
    { name: tNav.contact, href: "/contact" },
  ];

  useEffect(() => {
    const isDark =
      document.documentElement.classList.contains("dark") ||
      localStorage.getItem("theme") === "dark";
    if (isDark) {
      document.documentElement.classList.add("dark");
      setDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      setDark(false);
    }
  }, []);

  const toggleTheme = () => {
    if (dark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDark(true);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground transition-transform group-hover:scale-105">
            <BarChart3 className="h-5 w-5" />
          </div>
          <span className="font-semibold text-lg tracking-tight transition-colors group-hover:text-primary/80">
            Farid{" "}
            <span className="font-light text-muted-foreground hidden sm:inline">
              {tNav.roleSubtitleDesktop}
            </span>
            <span className="font-light text-muted-foreground sm:hidden">
              {tNav.roleSubtitleMobile}
            </span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNav"
                    className="absolute inset-0 rounded-full bg-secondary"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          {/* Language Switcher */}
          <div className="flex items-center rounded-xl border border-border bg-card p-0.5 text-xs font-semibold">
            <button
              onClick={() => setLang("en")}
              className={`px-2.5 py-1 rounded-lg transition-all ${
                lang === "en"
                  ? "bg-primary text-primary-foreground shadow-sm font-bold"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              aria-label="Switch to English"
            >
              EN
            </button>
            <button
              onClick={() => setLang("id")}
              className={`px-2.5 py-1 rounded-lg transition-all ${
                lang === "id"
                  ? "bg-primary text-primary-foreground shadow-sm font-bold"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              aria-label="Ganti ke Bahasa Indonesia"
            >
              ID
            </button>
          </div>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-card text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Toggle dark mode"
          >
            {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          {/* Contact Button */}
          <Link
            href="/contact"
            className="inline-flex h-9 items-center justify-center rounded-xl bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            {tNav.contactMe}
          </Link>
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-2">
          {/* Mobile Language Switcher */}
          <div className="flex items-center rounded-lg border border-border bg-card p-0.5 text-xs font-semibold">
            <button
              onClick={() => setLang("en")}
              className={`px-2 py-0.5 rounded text-[11px] transition-all ${
                lang === "en"
                  ? "bg-primary text-primary-foreground font-bold"
                  : "text-muted-foreground"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLang("id")}
              className={`px-2 py-0.5 rounded text-[11px] transition-all ${
                lang === "id"
                  ? "bg-primary text-primary-foreground font-bold"
                  : "text-muted-foreground"
              }`}
            >
              ID
            </button>
          </div>

          <button
            onClick={toggleTheme}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-card text-muted-foreground hover:text-foreground"
            aria-label="Toggle dark mode"
          >
            {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-card text-muted-foreground hover:text-foreground"
            aria-label="Open mobile menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-border bg-background/95 backdrop-blur-md overflow-hidden"
          >
            <div className="space-y-1 px-4 pb-6 pt-3">
              {navLinks.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.href !== "/" && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                      isActive
                        ? "bg-secondary text-foreground font-semibold"
                        : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <div className="pt-4 border-t border-border mt-4">
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="flex h-11 w-full items-center justify-center rounded-xl bg-primary text-primary-foreground text-sm font-medium shadow"
                >
                  {tNav.contactMe}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

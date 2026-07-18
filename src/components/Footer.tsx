import React from "react";
import Link from "next/link";
import { Mail, ArrowUpRight, FileText } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Brand Panel */}
          <div className="space-y-4 xl:col-span-1">
            <span className="font-semibold text-lg tracking-tight">
              Farid <span className="font-light text-muted-foreground">/ Software Engineer — AI &amp; Data</span>
            </span>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              Muhammad Farid Fitriansyah — Computer Science graduate (GPA 3.86) specializing in Machine Learning, Data Analytics, BI, and Software Engineering.
            </p>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-muted-foreground font-medium">Open for Opportunities</span>
            </div>
          </div>

          {/* Sitemaps */}
          <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase font-mono text-xs">Platform</h3>
                <ul className="mt-4 space-y-3">
                  <li>
                    <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      Projects &amp; Systems
                    </Link>
                  </li>
                  <li>
                    <Link href="/research" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      Research &amp; Thesis
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase font-mono text-xs">Professional</h3>
                <ul className="mt-4 space-y-3">
                  <li>
                    <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      Biography
                    </Link>
                  </li>
                  <li>
                    <Link href="/resume" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      Interactive Resume
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      Contact Interface
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Socials & Downloads */}
            <div>
              <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase font-mono text-xs">Connect</h3>
              <div className="mt-4 flex gap-3">
                <a
                  href="https://github.com/farid1811"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-background text-muted-foreground hover:text-foreground hover:bg-secondary transition-all"
                  aria-label="GitHub Profile"
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/muhammad-farid-fitriansyah-53527a249"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-background text-muted-foreground hover:text-foreground hover:bg-secondary transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                </a>
                <a
                  href="mailto:mhdfarid1811@gmail.com"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-background text-muted-foreground hover:text-foreground hover:bg-secondary transition-all"
                  aria-label="Send Email"
                >
                  <Mail className="h-4 w-4" />
                </a>
              </div>
              <div className="mt-6">
                <a
                  href="/Muhammad-Farid-Fitriansyah-CV.docx"
                  download
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-500 hover:text-indigo-600 transition-colors"
                >
                  <FileText className="h-3.5 w-3.5" />
                  Download Official CV (.docx)
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom panel */}
        <div className="mt-12 border-t border-border pt-8 md:flex md:items-center md:justify-between">
          <p className="text-xs text-muted-foreground md:order-1">
            &copy; {new Date().getFullYear()} Muhammad Farid Fitriansyah. Universitas Samudra (GPA 3.86).
          </p>
          <p className="mt-4 text-xs text-muted-foreground md:order-2 md:mt-0">
            Built with Next.js 14, React 18, TypeScript &amp; TailwindCSS.
          </p>
        </div>
      </div>
    </footer>
  );
}

"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Download, FileText, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface EvidenceModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  organization?: string;
  fileUrl: string;
  badge?: string;
}

export default function EvidenceModal({
  isOpen,
  onClose,
  title,
  organization,
  fileUrl,
  badge,
}: EvidenceModalProps) {
  const { lang } = useLanguage();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-background/80 backdrop-blur-md transition-opacity"
          aria-hidden="true"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.2 }}
          className="relative flex flex-col w-full max-w-5xl h-[88vh] bg-card border border-border rounded-2xl shadow-2xl overflow-hidden z-10"
          role="dialog"
          aria-modal="true"
          aria-label={title}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-3.5 border-b border-border bg-card/90">
            <div className="flex items-center gap-3 min-w-0 pr-4">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20">
                <FileText className="h-4 w-4" />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-semibold text-foreground truncate">
                    {title}
                  </h3>
                  {badge && (
                    <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium bg-primary/10 text-primary border border-primary/20">
                      {badge}
                    </span>
                  )}
                </div>
                {organization && (
                  <p className="text-xs text-muted-foreground truncate">
                    {organization}
                  </p>
                )}
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2 shrink-0">
              <a
                href={fileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border bg-secondary hover:bg-secondary/80 text-foreground text-xs font-medium transition-colors"
                title={lang === "id" ? "Buka di tab baru" : "Open in new tab"}
              >
                <ExternalLink className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">
                  {lang === "id" ? "Tab Baru" : "New Tab"}
                </span>
              </a>

              <a
                href={fileUrl}
                download
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border bg-secondary hover:bg-secondary/80 text-foreground text-xs font-medium transition-colors"
                title={lang === "id" ? "Unduh dokumen" : "Download document"}
              >
                <Download className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">
                  {lang === "id" ? "Unduh" : "Download"}
                </span>
              </a>

              <button
                onClick={onClose}
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                aria-label={lang === "id" ? "Tutup" : "Close"}
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* PDF Viewer Body */}
          <div className="relative flex-1 w-full bg-slate-950/40 overflow-hidden">
            <iframe
              src={`${fileUrl}#toolbar=0&navpanes=0`}
              title={title}
              className="w-full h-full border-0"
            />
          </div>

          {/* Footer Bar */}
          <div className="flex items-center justify-between px-5 py-2.5 border-t border-border bg-card/90 text-xs text-muted-foreground">
            <div className="flex items-center gap-1.5 text-[11px]">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
              <span>
                {lang === "id"
                  ? "Dokumen terverifikasi resmi & autentik."
                  : "Officially verified & authentic document."}
              </span>
            </div>
            <a
              href={fileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] text-primary hover:underline font-medium"
            >
              {lang === "id" ? "Tampilan tidak muncul? Buka file langsung →" : "Preview not loading? Open direct file →"}
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FileText, ShieldCheck, Award, ExternalLink, Image as ImageIcon } from "lucide-react";
import type { AchievementItem } from "@/lib/achievementsData";
import { useLanguage } from "@/context/LanguageContext";
import EvidenceModal from "./EvidenceModal";

interface EvidenceCardProps {
  item: AchievementItem;
}

export default function EvidenceCard({ item }: EvidenceCardProps) {
  const { lang, t } = useLanguage();
  const [modalOpen, setModalOpen] = useState(false);
  const [activeFile, setActiveFile] = useState<string | null>(null);
  const [activeTitle, setActiveTitle] = useState<string>("");

  const handleOpenPrimary = () => {
    if (item.evidenceFile) {
      setActiveFile(item.evidenceFile);
      setActiveTitle(t(item.title));
      setModalOpen(true);
    }
  };

  const handleOpenSecondary = () => {
    if (item.secondaryFile) {
      setActiveFile(item.secondaryFile);
      setActiveTitle(`${t(item.title)} — 2024 Certificate`);
      setModalOpen(true);
    }
  };

  return (
    <>
      <div
        className={`group relative flex flex-col justify-between rounded-2xl border transition-all duration-300 ${
          item.isSecondary
            ? "border-border/60 bg-card/40 p-4"
            : "border-border bg-card/70 backdrop-blur-sm p-6 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
        }`}
      >
        <div>
          {/* Header Row */}
          <div className="flex items-start justify-between gap-3 mb-3">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-secondary text-secondary-foreground border border-border">
                {item.date}
              </span>
              {item.badge && (
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-primary/10 text-primary border border-primary/20">
                  <Award className="h-3 w-3" />
                  {item.badge}
                </span>
              )}
            </div>

            <span className="text-[11px] text-muted-foreground font-mono text-right">
              {t(item.type)}
            </span>
          </div>

          {/* Title & Organization */}
          <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
            {t(item.title)}
          </h3>
          <p className="text-xs font-medium text-muted-foreground mt-0.5 mb-3">
            {item.organization}
          </p>

          {/* Description */}
          <p className="text-sm text-muted-foreground leading-relaxed font-light mb-4">
            {t(item.description)}
          </p>

          {/* Coverage / Competency Tags */}
          {item.coverage && item.coverage.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-4">
              {item.coverage.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-background border border-border/80 text-muted-foreground font-mono"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Authentic Photo Thumbnails if available */}
          {item.photos && item.photos.length > 0 && (
            <div className="flex items-center gap-2 mb-4">
              {item.photos.map((photo, pIdx) => (
                <div
                  key={pIdx}
                  className="relative h-16 w-24 rounded-lg overflow-hidden border border-border bg-secondary"
                >
                  <Image
                    src={photo}
                    alt={`${t(item.title)} Documentation`}
                    fill
                    sizes="100px"
                    className="object-cover object-center group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute inset-0 bg-slate-950/20" />
                </div>
              ))}
              <span className="text-[11px] text-muted-foreground flex items-center gap-1">
                <ImageIcon className="h-3 w-3" />
                {lang === "id" ? "Dokumentasi autentik" : "Authentic photo"}
              </span>
            </div>
          )}
        </div>

        {/* Action Button Row */}
        <div className="pt-4 border-t border-border/70 flex flex-wrap items-center gap-2 mt-2">
          {item.evidenceFile && (
            <button
              onClick={handleOpenPrimary}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-primary text-primary-foreground text-xs font-semibold shadow-sm hover:opacity-90 active:scale-95 transition-all"
              title={t(item.tooltip) || t(item.buttonLabel)}
            >
              <FileText className="h-3.5 w-3.5" />
              <span>{t(item.buttonLabel)}</span>
            </button>
          )}

          {item.secondaryFile && item.secondaryButtonLabel && (
            <button
              onClick={handleOpenSecondary}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border border-border bg-card hover:bg-secondary text-foreground text-xs font-medium transition-colors"
            >
              <FileText className="h-3.5 w-3.5 text-muted-foreground" />
              <span>{t(item.secondaryButtonLabel)}</span>
            </button>
          )}

          <div className="ml-auto flex items-center gap-1 text-[11px] text-muted-foreground">
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-500" />
            <span className="hidden sm:inline">
              {lang === "id" ? "Terverifikasi" : "Verified"}
            </span>
          </div>
        </div>
      </div>

      {/* Modal */}
      {activeFile && (
        <EvidenceModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          title={activeTitle}
          organization={item.organization}
          fileUrl={activeFile}
          badge={item.badge}
        />
      )}
    </>
  );
}

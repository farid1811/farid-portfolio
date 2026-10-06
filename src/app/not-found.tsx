"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Compass } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function NotFound() {
  const { lang } = useLanguage();
  const isId = lang === "id";

  return (
    <div className="flex-1 flex flex-col items-center justify-center text-center px-4 py-24">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -z-10 h-64 w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/5 blur-[100px]" />

      <div className="space-y-6 max-w-md">
        {/* Visual icon */}
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-500">
          <Compass className="h-8 w-8 animate-spin" style={{ animationDuration: "10s" }} />
        </div>

        <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
          {isId ? "Halaman Tidak Ditemukan" : "Coordinate Not Found"}
        </h1>

        <p className="text-sm text-muted-foreground leading-relaxed">
          {isId
            ? "Jalur sistem yang Anda minta tidak ditemukan atau telah diperbarui. Silakan periksa kembali tautan dan navigasi Anda."
            : "The requested system pathway does not exist or has been re-architected. Verify your routing coordinates and try again."}
        </p>

        <div className="pt-4">
          <Link
            href="/"
            className="inline-flex h-11 items-center justify-center rounded-xl bg-primary px-6 text-sm font-semibold text-primary-foreground shadow transition-transform hover:scale-[1.02] active:scale-[0.98] gap-1.5"
          >
            <ArrowLeft className="h-4 w-4" />
            {isId ? "Kembali ke Beranda" : "Return to Dashboard"}
          </Link>
        </div>
      </div>
    </div>
  );
}

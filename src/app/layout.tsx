import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: {
    default: "Muhammad Farid Fitriansyah — Software Engineer (AI, Data & Intelligent Systems)",
    template: "%s | Muhammad Farid Fitriansyah",
  },
  description: "Computer Science graduate (Sarjana Ilmu Komputer, GPA 3.86) from Universitas Samudra specializing in Data Analytics, Machine Learning (SGD, LSTM, RAG), BI Dashboards, and Software Engineering.",
  keywords: [
    "Muhammad Farid Fitriansyah",
    "Software Engineer",
    "AI Engineer",
    "Data Analyst",
    "Machine Learning Engineer",
    "Universitas Samudra",
    "Stochastic Gradient Descent",
    "LSTM Forecasting",
    "RAG Architecture",
    "Clean Architecture",
    "Python",
    "PHP Laravel",
    "Next.js",
  ],
  authors: [{ name: "Muhammad Farid Fitriansyah" }],
  creator: "Muhammad Farid Fitriansyah",
  metadataBase: new URL("https://farid-portfolio.vercel.app"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://farid-portfolio.vercel.app",
    title: "Muhammad Farid Fitriansyah — Software Engineer (AI, Data & Intelligent Systems)",
    description: "Computer Science graduate (Sarjana Ilmu Komputer, GPA 3.86) from Universitas Samudra specializing in Data Analytics, Machine Learning, BI, and Software Engineering.",
    siteName: "Muhammad Farid Fitriansyah Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Muhammad Farid Fitriansyah — Software Engineer Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Farid Fitriansyah — Software Engineer",
    description: "Computer Science graduate specializing in AI, Machine Learning, Data Analytics, BI, and Software Engineering.",
    images: ["/og-image.png"],
    creator: "@farid1811",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col bg-background text-foreground">
        {/* Grain overlay for SaaS aesthetic */}
        <div className="grain-overlay" />
        
        {/* Navbar */}
        <Navbar />
        
        {/* Main Content Area */}
        <main className="flex-1 flex flex-col">
          {children}
        </main>
        
        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}

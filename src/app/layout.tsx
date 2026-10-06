import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/context/LanguageContext";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: {
    default: "Muhammad Farid Fitriansyah — Data Analyst | Business Intelligence | Machine Learning",
    template: "%s | Muhammad Farid Fitriansyah — Data Analyst",
  },
  description: "Portfolio of Muhammad Farid Fitriansyah — Data Analyst specializing in Business Intelligence, Machine Learning, Data Preparation, Predictive Analytics, and data-driven solution development.",
  keywords: [
    "Muhammad Farid Fitriansyah",
    "Data Analyst",
    "Business Intelligence",
    "Machine Learning",
    "Data Analytics",
    "Python",
    "SQL",
    "Microsoft Excel",
    "Data Visualization",
    "Predictive Modeling",
    "Time Series",
    "LSTM",
    "SGD Regression",
    "Universitas Samudra",
  ],
  authors: [{ name: "Muhammad Farid Fitriansyah" }],
  creator: "Muhammad Farid Fitriansyah",
  metadataBase: new URL("https://farid-portfolio-woad.vercel.app"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://farid-portfolio-woad.vercel.app",
    title: "Muhammad Farid Fitriansyah — Data Analyst | Business Intelligence | Machine Learning",
    description: "Turning data into actionable insights through data preparation, analysis, visualization, predictive modeling, and data-driven solution development.",
    siteName: "Muhammad Farid Fitriansyah Portfolio",
    images: [
      {
        url: "/images/farid-hero-blazer.webp",
        width: 800,
        height: 800,
        alt: "Muhammad Farid Fitriansyah — Data Analyst | Business Intelligence | Machine Learning",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Farid Fitriansyah — Data Analyst | Business Intelligence | Machine Learning",
    description: "Turning data into actionable insights through data preparation, analysis, visualization, predictive modeling, and data-driven solution development.",
    images: ["/images/farid-hero-blazer.webp"],
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
        <LanguageProvider>
          <div className="grain-overlay" />
          <Navbar />
          <main className="flex-1 flex flex-col">
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}

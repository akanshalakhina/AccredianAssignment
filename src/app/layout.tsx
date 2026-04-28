import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Accredian Enterprise | Upskill Your Workforce",
  description:
    "India's #1 enterprise L&D platform. Deliver IIT-backed certification programs to your team with real-time analytics and dedicated support.",
  keywords: ["enterprise learning", "corporate training", "upskilling", "IIT certified", "L&D"],
  openGraph: {
    title: "Accredian Enterprise | Upskill Your Workforce",
    description:
      "Partner with Accredian to deliver world-class certification programs to your team.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

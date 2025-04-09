import type { Metadata } from "next";
import "./globals.css";
import { AppProvider } from "@/context";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Quack!",
  description: "Pergunte ao Pato, um assistente virtual de IA",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Pergunte ao Pato!",
    description: "Pergunte ao Pato, um assistente virtual de IA",
    url: "https://daffy-duck-code.vercel.app/",
    siteName: "Pergunte ao Pato!",
    images: [{
      url: "https://daffy-duck-code.vercel.app/assets/OG/thumbOG.jpg",
      width: 1200,
      height: 600,
    },
    ],
    locale: "pt-BR",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body >
        <AppProvider>
          {children}
        </AppProvider>
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SmoothScroll } from "@/components/layout/smooth-scroll";

const manrope = localFont({
  src: "../assets/fonts/manrope-latin-variable.woff2",
  variable: "--font-manrope",
  weight: "200 800",
  style: "normal",
  display: "swap"
});

const caprasimo = localFont({
  src: "../assets/fonts/caprasimo-latin-400.woff2",
  variable: "--font-caprasimo",
  weight: "400",
  style: "normal",
  display: "swap"
});

const caveat = localFont({
  src: "../assets/fonts/caveat-latin-variable.woff2",
  variable: "--font-caveat",
  weight: "400 700",
  style: "normal",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Brasa & Bairro — Cardápio Digital e Pedido Organizado",
  description: "Experiência da Capital Food Ops para restaurantes: cardápio bonito, pedido organizado no WhatsApp e operação clara para o dono.",
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png"
  },
  openGraph: {
    title: "Brasa & Bairro — Cardápio Digital e Pedido Organizado",
    description: "Cardápio bonito, pedido organizado no WhatsApp e operação clara para restaurante.",
    type: "website",
    locale: "pt_BR"
  },
  twitter: {
    card: "summary_large_image",
    title: "Brasa & Bairro — Cardápio Digital e Pedido Organizado",
    description: "Cardápio bonito, pedido organizado no WhatsApp e operação clara para restaurante."
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${manrope.variable} ${caprasimo.variable} ${caveat.variable}`}>
      <body className="font-sans antialiased">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head"; // ← Importamos Head manualmente

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "PreviApp",
  description: "La mejor parte de la noche",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <Head>
        <link rel="Manifest" href="/Manifest.json" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AAVRIT PACKAGING | Industrial Corrugated Box Manufacturing India",
  description:
    "AAVRIT PACKAGING – Protection in Every Layer. Engineered corrugated boxes, heavy-duty 3/5/7-ply industrial packaging, die-cut cartons, and sustainable kraft solutions manufactured in India.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@500;600;700&family=Source+Sans+3:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-[#F5F2EB] text-[#202A2E] font-sans selection:bg-[#E97835] selection:text-white">
        {children}
      </body>
    </html>
  );
}

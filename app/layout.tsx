import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "سيلفر كيتشن | أجهزة مطبخ احترافية",
  description:
    "إعادة تعريف كفاءة المطبخ بأجهزة احترافية للمنزل الحديث. الجودة، المتانة، والابتكار في كل قطعة.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className="scroll-smooth">
      <head>
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link href="https://fonts.gstatic.com" rel="preconnect" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Kufi+Arabic:wght@300;400;500;600;700;800&family=Outfit:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-off-white text-charcoal transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}

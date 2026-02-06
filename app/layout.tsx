import type { Metadata, Viewport } from "next";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: "بيتي | أجهزة مطبخ احترافية وصحية في الجزائر",
  description:
    "اكتشف مجموعة بيتي للأجهزة المنزلية الذكية. قلايات هوائية، خلاطات ومطاحن عالية الجودة لتحويل مطبخك إلى مساحة احترافية وصحية.",
  keywords: [
    "بيتي",
    "أجهزة مطبخ",
    "قلاية هوائية",
    "طهي صحي",
    "الجزائر",
    "أجهزة منزلية",
    "خلاط كهربائي",
  ],
  authors: [{ name: "Bayti" }],
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "ar_DZ",
    url: "https://bayti-dz.vercel.app/", // Assuming a placeholder if not known
    siteName: "بيتي - Bayti",
    title: "بيتي | أجهزة مطبخ احترافية وصحية",
    description:
      "أفضل أجهزة المطبخ الذكية في الجزائر. جودة احترافية وتصميم عصري لطعام صحي ولذيذ.",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "Logo Bayti - بيتي",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "بيتي | أجهزة مطبخ احترافية",
    description:
      "ارتقِ بتجربة الطهي مع أجهزة بيتي الذكية. قلايات هوائية وفراّمات احترافية.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "https://bayti-dz.vercel.app/",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
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
        {/* Meta Pixel */}
        <Script
          id="facebook-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1996891180857184');
              fbq('track', 'PageView');
            `,
          }}
        />
      </head>
      <body className="antialiased bg-off-white text-charcoal transition-colors duration-300">
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1996891180857184&ev=PageView&noscript=1"
          />
        </noscript>

        {children}
      </body>
    </html>
  );
}

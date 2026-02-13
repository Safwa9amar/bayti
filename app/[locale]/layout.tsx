import type { Metadata, Viewport } from "next";
import "../globals.css";
import Script from "next/script";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { ThemeProvider } from "@/components/admin/ThemeProvider";
import { GluestackWrapper } from "@/components/admin/GluestackWrapper";

import "@/app/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://bayti-dz.vercel.app/"),
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
    url: "https://bayti-dz.vercel.app/",
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

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      dir={locale === "ar" ? "rtl" : "ltr"}
      className="scroll-smooth"
      suppressHydrationWarning
    >
      <head>
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link href="https://fonts.gstatic.com" rel="preconnect" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Kufi+Arabic:wght@300;400;500;600;700;800&family=Outfit:wght@400;600;700&display=swap"
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
              fbq('init', '${process.env.NEXT_PUBLIC_CAMPAGN_ID}');
              fbq('track', 'PageView');
            `,
          }}
        />
      </head>
      <body className="antialiased bg-off-white text-charcoal transition-colors duration-300">
        <ThemeProvider>
          <NextIntlClientProvider messages={messages}>
            <GluestackWrapper>
              <noscript>
                <img
                  height="1"
                  width="1"
                  style={{ display: "none" }}
                  src={`https://www.facebook.com/tr?id=${process.env.NEXT_PUBLIC_CAMPAGN_ID}&ev=PageView&noscript=1`}
                />
              </noscript>
              {children}
            </GluestackWrapper>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

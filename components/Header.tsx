import { HeaderData } from "@/types/header";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

interface HeaderProps {
  data?: HeaderData;
}

export default function Header({ data }: HeaderProps) {
  const t = useTranslations("Header");

  if (data) {
    return (
      <section className="relative h-[400px] md:h-[500px] lg:h-[650px] overflow-hidden ">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            alt={data.image.alt}
            src={data.image.url}
          />
          <div className="absolute inset-0 bg-gradient-to-l from-brand-dark/70 via-brand-dark/40 to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative h-full flex items-center">
          <div className="max-w-2xl text-white space-y-8 animate-fade-in">
            <span className="inline-flex items-center gap-2 px-4 py-1 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full text-primary font-semibold text-sm">
              {data.badge.icon && <span>{data.badge.icon}</span>}
              {data.badge.text}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              {data.title.text1}
              <span className="text-primary underline decoration-brand-warm/30 underline-offset-8">
                {data.title.highlight}
              </span>
              {data.title.text2}
            </h2>
            <p className="text-xl text-brand-warm/90 leading-relaxed max-w-lg">
              {data.description}
            </p>
            <div className="flex gap-4">
              <a
                href={data.primaryButton.href}
                className="bg-primary hover:bg-primary/90 text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl shadow-primary/20 transition-all hover:-translate-y-1 block text-center"
              >
                {data.primaryButton.label}
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          alt="Modern kitchen with elegant wooden shelves and navy blue cabinets"
          src="/header-bg.jpg"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-brand-dark/70 via-brand-dark/40 to-transparent"></div>
      </div>
      <div className="container mx-auto px-4 lg:px-8 relative h-full flex items-center">
        <div className="max-w-2xl text-white space-y-8 animate-fade-in">
          <span className="inline-block px-4 py-1 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full text-primary font-semibold text-sm">
            {t("badge")}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            {t("titlePrefix")} <br />
            <span className="text-primary underline decoration-brand-warm/30 underline-offset-8">
              {t("titleSuffix")}
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-brand-warm/90 leading-relaxed max-w-lg">
            {t("description")}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link
              href="/store/products"
              className="bg-primary hover:bg-primary/90 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg shadow-xl shadow-primary/20 transition-all hover:-translate-y-1 inline-block text-center"
            >
              {t("shopNow")}
            </Link>
            <Link
              href="/store/products"
              className="bg-white/10 backdrop-blur-md border border-white/30 hover:bg-white/20 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg transition-all inline-block text-center"
            >
              {t("viewProducts")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

import headerDataJson from "@/data/headerData.json";
import { HeaderData } from "@/types/header";

const defaultHeaderData: HeaderData = headerDataJson;

interface HeaderProps {
  data?: HeaderData;
}

export default function Header({ data = defaultHeaderData }: HeaderProps) {
  return (
    <header className="relative overflow-hidden pt-12 pb-16 lg:pt-24 lg:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/20 text-terracotta font-semibold text-sm">
              <span className="ml-2">{data.badge.icon}</span> {data.badge.text}
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight text-charcoal">
              {data.title.text1}{" "}
              <span className="text-terracotta">{data.title.highlight}</span>{" "}
              {data.title.text2}
            </h1>
            <p className="text-lg text-charcoal/80 max-w-lg leading-relaxed">
              {data.description}
            </p>
            <a
              className="px-8 py-4 bg-primary hover:bg-terracotta text-charcoal hover:text-white font-bold rounded-xl shadow-lg transition-all text-center"
              href={data.primaryButton.href}
            >
              {data.primaryButton.label}
            </a>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-transparent blur-3xl opacity-50"></div>
            <img
              alt={data.image.alt}
              className="rounded-3xl shadow-2xl relative z-10 border-8 border-white"
              src={data.image.url}
            />
          </div>
        </div>
      </div>
    </header>
  );
}

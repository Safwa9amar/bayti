import {
  MdHome,
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdPayments,
} from "react-icons/md";
import { FaWhatsapp, FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-warm text-brand-dark pt-24 pb-12 transition-colors duration-300">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-primary flex items-center gap-2">
              <img
                src="/logo.png"
                alt="بيتي"
                className="h-22 w-auto rounded-xl"
              />
            </h2>
            <p className="text-brand-dark/70 leading-relaxed font-semibold">
              جَوْدَةٌ تَلْمَسُهَا فِي كُلِّ رُكْنٍ
            </p>
            <div className="flex gap-4">
              <a
                className="w-10 h-10 bg-brand-dark rounded-md flex items-center justify-center hover:bg-primary transition-colors"
                href="#"
              >
                <FaFacebook className="text-white text-xl" />
              </a>
              <a
                className="w-10 h-10 bg-brand-dark rounded-md flex items-center justify-center hover:bg-primary transition-colors"
                href="#"
              >
                <FaInstagram className="text-white text-xl" />
              </a>
              <a
                className="w-10 h-10 bg-brand-dark rounded-md flex items-center justify-center hover:bg-primary transition-colors"
                href="#"
              >
                <FaTiktok className="text-white text-xl" />
              </a>
            </div>
          </div>
          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-8 relative inline-block text-primary">
              {t("quickLinks")}
              <span className="absolute -bottom-2 right-0 w-8 h-1 bg-primary"></span>
            </h4>
            <ul className="space-y-4 text-brand-dark/60 font-medium">
              <li>
                <a className="hover:text-primary transition-colors" href="#">
                  {t("about")}
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#">
                  الأسئلة الشائعة
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#">
                  {t("policy")}
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#">
                  طرق التوصيل
                </a>
              </li>
            </ul>
          </div>
          {/* Categories */}
          <div>
            <h4 className="text-xl font-bold mb-8 relative inline-block text-primary">
              الأقسام
              <span className="absolute -bottom-2 right-0 w-8 h-1 bg-primary"></span>
            </h4>
            <ul className="space-y-4 text-brand-dark/60 font-medium">
              <li>
                <a className="hover:text-primary transition-colors" href="#">
                  مقالي هوائية
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#">
                  أدوات الطبخ
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#">
                  ماكينات القهوة
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#">
                  أجهزة العناية بالمنزل
                </a>
              </li>
            </ul>
          </div>
          {/* Contact & WhatsApp */}
          <div>
            <h4 className="text-xl font-bold mb-8 relative inline-block text-primary ">
              {t("contact")}
              <span className="absolute -bottom-2 right-0 w-8 h-1 bg-primary"></span>
            </h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-brand-dark/40 font-medium">
                <span dir="ltr">0673124281</span>
              </div>
              <div className="flex items-center gap-3 text-brand-dark/40 font-medium">
                <span>Bayti.226@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-brand-dark/40 font-medium">
                <span>سطيف</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-brand-dark/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-brand-dark/30 text-xs">
          <p dir="rtl">{t("rights", { year })}</p>
          <div className="flex gap-6 items-center">
            <img
              alt="Visa"
              className="h-4 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all cursor-help"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbxrzRs9_ovaYeOi8N1Cef6pV-xQ_f3H9_zHFWW0lxDfJcn35uLjCBsJ4S4R_7kmBNpn6l1kNfYPGMdQ8LA0xyggEkIsR5Ock88BzGhLSLEm-LKKkoYiFMGsKNxcqCxML__CCv82BQeUGR5IIY-R7UjL8aOV3pSzC2DKOBJu4TQW9Fxj1qbjNvn9SFmDg70_f1fYBa08RMXfeoSdBIjOULLned7gjcDdZvhJ0cl-DNJbZfWYq5SGioxeHak6pAWAPATOhf7T3dLsnn"
              title="Visa"
            />
            <img
              alt="Mastercard"
              className="h-4 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all cursor-help"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuALbFjV98XOuUO3I_6b6NS-Q0u5rJnBbP8VvdeQ6lr-hs1oiGxTWeSlnEWbY5pUZLNx9s6W40kL1LluV71IzcjZAyuMvDpWiSW4RyMN85pZhm1d97uf-qfLMwBmfwylk2Rbt8HPbBP1_IDEkLj-NEeXqlua5xclGCfTySKop67DR3KsGt3jmT1zVo4ab6t-WNe714LqyrmsGA8t0im6eXw6nFIF2F_9nuSk2dIUloZYYMy7THcoWU-QqARUV5HqFbu9WndDocRC1GSA"
              title="Mastercard"
            />
            <span className="flex items-center gap-1">
              <MdPayments className="text-primary text-xl" />
              الدفع عند الاستلام
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

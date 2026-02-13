import { MdVerified, MdLocalShipping, MdPayments } from "react-icons/md";
import { useTranslations } from "next-intl";

export default function Benefits() {
  const t = useTranslations("Benefits");

  return (
    <section className="container mx-auto px-4 lg:px-8 -mt-16 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-background-dark p-8 rounded-xl shadow-lg border-b-4 border-primary flex items-center gap-6 group hover:-translate-y-1 transition-all">
          <div className="bg-primary/10 p-4 rounded-full text-primary group-hover:scale-110 transition-transform">
            <MdVerified className="text-3xl" />
          </div>
          <div>
            <h3 className="font-bold text-lg text-brand-dark dark:text-brand-warm">
              {t("quality.title")}
            </h3>
            <p className="text-sm text-brand-dark/60 dark:text-brand-warm/60">
              {t("quality.subtitle")}
            </p>
          </div>
        </div>
        <div className="bg-white dark:bg-background-dark p-8 rounded-xl shadow-lg border-b-4 border-primary flex items-center gap-6 group hover:-translate-y-1 transition-all">
          <div className="bg-primary/10 p-4 rounded-full text-primary group-hover:scale-110 transition-transform">
            <MdLocalShipping className="text-3xl" />
          </div>
          <div>
            <h3 className="font-bold text-lg text-brand-dark dark:text-brand-warm">
              {t("delivery.title")}
            </h3>
            <p className="text-sm text-brand-dark/60 dark:text-brand-warm/60">
              {t("delivery.subtitle")}
            </p>
          </div>
        </div>
        <div className="bg-white dark:bg-background-dark p-8 rounded-xl shadow-lg border-b-4 border-primary flex items-center gap-6 group hover:-translate-y-1 transition-all">
          <div className="bg-primary/10 p-4 rounded-full text-primary group-hover:scale-110 transition-transform">
            <MdPayments className="text-3xl" />
          </div>
          <div>
            <h3 className="font-bold text-lg text-brand-dark dark:text-brand-warm">
              {t("payment.title")}
            </h3>
            <p className="text-sm text-brand-dark/60 dark:text-brand-warm/60">
              {t("payment.subtitle")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

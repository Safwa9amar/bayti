import { MdFormatQuote } from "react-icons/md";
import { useTranslations } from "next-intl";

export default function Testimonials() {
  const t = useTranslations("Testimonials");
  const avatars = [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuC300sTygI41RxgH96xjtE5my6Oc0KcCBUdjs765ARFXBaajIOxwqqXL14BzCdxPTkg7ngGZJ8ASBYfnVmdUd9BrbyHIv9SFFd3SxsdcurwLTHoCSWZ7Zz_cIaZhTy7SCl6XOKPXF5d1ws6ENipcD4vDnddN9Pd8Tr9lw3IFhCjQ0oBW0ZdsXZHE2JYbYyXTCbLGgSGUhPKnowW_YfibdqUA0knuKMMdpYbt-h0CwJGVIM2kdG10kka5bJddHBkF4KNzokMdkBqjT7A",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBzwPKKSp0Pae8dSCF-xXG_ZzPLio3gw9MvR67EnvDZm-EfxTAkhHqmJWmA3d5-KVpbW_8Vf7QX1seiFwGbFB6evpfOjKKdMzbqnm3TLD_oKKW7uXVW5Q-qegs14uoVFnjHOJugLtpoeKr8I5fmk5UQgjm1c1BkNBlNqBftI3HUVZEwdxp5DHw7T5aYqgCxjMueDBMLeetO2Y64jUicmr-KzkKp_Zb9hCkTfafF8CjX8pe0P3c_ofo6tn2MgnNJECZ9wzEYFN_FCWLv",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAk2a0vmL839W-zSluqHyzxPmBHL4EZuaDWbyMkpRVQfBomoded4ZGfzTMBnNJeIxcQdoCgelnUSvq7uNza_ZZFf2lLdGClz2ziRxPyqmSEIZ1ACUym_FYfGGaFYegpRAZgBl3KkHP4E42pq67frJ6qZ86BaPe6MFq_db-Rg2UdfMCpr-H8UWUhy3iawaukmS3Omc1uWcOHHQ7xX1wdUpfdshcLJwjhQIr8ciFnOaXxBCyhg6PwpsgtDaonzcddQCLx7nMhW0yCgavX",
  ];

  const testimonials = [0, 1, 2].map((i) => ({
    text: t(`items.${i}.text`),
    author: t(`items.${i}.author`),
    location: t(`items.${i}.location`),
    avatar: avatars[i],
  }));

  return (
    <section
      className="container mx-auto px-4 lg:px-8 py-24 overflow-hidden"
      id="testimonials"
    >
      <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
        <h2 className="text-4xl font-bold text-brand-dark dark:text-brand-warm">
          {t("title")}
        </h2>
        <p className="text-brand-dark/60 dark:text-brand-warm/60 italic">
          {t("subtitle")}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((item, i) => (
          <div
            key={i}
            className="bg-white dark:bg-background-dark p-8 rounded-2xl shadow-sm border border-primary/10 relative"
          >
            <MdFormatQuote className="text-5xl text-primary/20 absolute top-4 left-4" />
            <p className="mb-6 relative z-10 text-lg text-brand-dark dark:text-brand-warm">
              {item.text}
            </p>
            <div className="flex items-center gap-4">
              <img
                className="w-12 h-12 rounded-full object-cover"
                alt={item.author}
                src={item.avatar}
              />
              <div>
                <h4 className="font-bold text-brand-dark dark:text-brand-warm">
                  {item.author}
                </h4>
                <p className="text-xs text-brand-dark/50 dark:text-brand-warm/50">
                  {item.location}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

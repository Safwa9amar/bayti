import { Link } from "@/i18n/routing";
import { products as allProducts, Product } from "@/lib/products";
import { MdStar, MdStarBorder, MdShoppingCart } from "react-icons/md";
import { useTranslations } from "next-intl";

interface ProductListProps {
  products?: Product[];
  title?: string;
  subtitle?: string;
}

export default function ProductList({
  products = allProducts,
  title,
  subtitle,
}: ProductListProps) {
  const t = useTranslations("ProductList");
  const displayTitle = title || t("title");
  const displaySubtitle = subtitle || t("subtitle");

  return (
    <section className="bg-brand-warm/50 dark:bg-white/5 py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold text-brand-dark dark:text-brand-warm">
              {displayTitle}
            </h2>
            <p className="text-brand-dark/60 dark:text-brand-warm/60">
              {displaySubtitle}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white dark:bg-background-dark rounded-xl shadow-sm hover:shadow-xl transition-all group border border-primary/5 overflow-hidden"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt={product.title}
                  src={product.imageSrc}
                />
                <span className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                  {t("cashOnDelivery")}
                </span>
                {product.discount && (
                  <span className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    - {product.discount}
                  </span>
                )}
              </div>
              <div className="p-6">
                <div className="flex items-center gap-1 text-yellow-500 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>
                      {i < Math.floor(product.rating) ? (
                        <MdStar className="text-sm" />
                      ) : (
                        <MdStarBorder className="text-sm" />
                      )}
                    </span>
                  ))}
                  <span className="text-xs text-brand-dark/40 dark:text-brand-warm/40 mr-1">
                    ({Math.floor(Math.random() * 50) + 10} {t("reviews")})
                  </span>
                </div>
                <h3 className="font-bold text-lg mb-2 text-brand-dark dark:text-brand-warm">
                  {product.title}
                </h3>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-primary font-bold text-2xl">
                    {product.price}
                  </span>
                  {product.oldPrice && (
                    <span className="text-brand-dark/40 dark:text-brand-warm/40 line-through text-sm">
                      {product.oldPrice}
                    </span>
                  )}
                </div>
                <Link
                  href={`/store/product/${product.id}` as any}
                  className="w-full bg-primary/10 hover:bg-primary text-primary hover:text-white py-3 rounded-lg font-bold transition-colors flex items-center justify-center gap-2"
                >
                  {t("orderNow")}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { MdStar, MdStarBorder, MdCheckCircle } from "react-icons/md";

interface ProductFeature {
  label: string;
  value: string;
}

interface ProductInfoProps {
  title: string;
  rating: number;
  reviewsCount: string;
  price: string;
  oldPrice: string;
  discount: string;
  description: string;
  features: ProductFeature[];
}

export default function ProductInfo({
  title,
  rating,
  reviewsCount,
  price,
  oldPrice,
  discount,
  description,
  features,
}: ProductInfoProps) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <div className="flex text-terracotta">
          {[...Array(5)].map((_, i) =>
            i < Math.floor(rating) ? (
              <MdStar key={i} className="text-sm" />
            ) : (
              <MdStarBorder key={i} className="text-sm" />
            ),
          )}
        </div>
        <span className="text-sm font-semibold text-charcoal/60">
          {rating} ({reviewsCount})
        </span>
      </div>
      <h2 className="text-4xl font-bold text-charcoal">{title}</h2>
      <p className="text-charcoal/60 mt-2">{description}</p>

      <div className="flex items-center gap-4 mt-6">
        <span className="text-4xl font-bold text-terracotta">{price}</span>
        <span className="text-xl text-charcoal/40 line-through">
          {oldPrice}
        </span>
        <span className="bg-terracotta text-white px-2 py-1 rounded text-xs font-bold">
          {discount}
        </span>
      </div>

      <div className="prose prose-sm max-w-none text-charcoal/80 mt-6">
        <ul className="grid grid-cols-1 gap-2 list-none p-0">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <MdCheckCircle className="text-terracotta text-lg" />
              <strong>{feature.label}</strong> {feature.value}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

import ProductGallery from "./product/ProductGallery";
import ProductInfo from "./product/ProductInfo";
import OrderForm from "./product/OrderForm";
import TrustBadges from "./product/TrustBadges";
import { Product } from "@/lib/products";

interface ProductDetailsProps {
  product: Product;
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  return (
    <section
      className="py-24 bg-white border-t border-secondary"
      id="product-detail"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12">
          <ProductGallery alt={product.title} imageSrc={product.imageSrc} />
          <div className="lg:col-span-5">
            <div className="space-y-6">
              <ProductInfo {...product} />
              <div className="bg-secondary/20 p-6 rounded-2xl border border-secondary/50 mt-8">
                <OrderForm
                  productName={product.title}
                  basePrice={product.priceValue}
                />
                <TrustBadges />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import ProductGallery from "./product/ProductGallery";
import ProductInfo from "./product/ProductInfo";
import OrderForm from "./product/OrderForm";
import TrustBadges from "./product/TrustBadges";

export default function ProductDetails() {
  const productData = {
    title: "قلاية هوائية IRIS سعة 10 لتر \n IPE-AF10-220X",
    rating: 4.8,
    reviewsCount: "865 تقييم",
    price: "24,900 د.ج",
    oldPrice: "29,900 د.ج",
    discount: "خصم 17%",
    description:
      "استمتع بتحضير الطعام بطريقة صحية وسريعة مع القلاية الهوائية الحديثة، التي تجمع بين التكنولوجيا المتقدمة والتصميم الأنيق لتلبية احتياجاتك اليومية. خيارك المثالي لوجبات مقرمشة بدون زيت.",
    imageSrc: "/2323.png",

    features: [
      {
        label: "سعة كبيرة 10 لتر",
        value: "مثالية للعائلات والولائم",
      },
      {
        label: "شاشة رقمية ذكية",
        value: "واجهة تحكم سهلة مع 12 برنامج طهي",
      },
      {
        label: "طهي صحي بدون زيت",
        value: "تقنية الهواء الساخن لتقليل الدهون",
      },
      {
        label: "تصميم عصري وآمن",
        value: "هيكل مقاوم للحرارة ومقبض مريح",
      },
      {
        label: "تعدد الاستخدامات",
        value: "قلي، شوي، تحميص، وخَبز",
      },
    ],
  };

  return (
    <section
      className="py-24 bg-white border-t border-secondary"
      id="product-detail"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12">
          <ProductGallery
            alt={productData.title}
            imageSrc={productData.imageSrc}
          />
          <div className="lg:col-span-5">
            <div className="space-y-6">
              <ProductInfo {...productData} />
              <div className="bg-secondary/20 p-6 rounded-2xl border border-secondary/50 mt-8">
                <OrderForm />
                <TrustBadges />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

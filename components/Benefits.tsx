export default function Benefits() {
  return (
    <section className="py-24 bg-secondary/20" id="benefits">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">بنيت للتميز</h2>
          <p className="text-charcoal/60">
            لماذا تثق آلاف المطابخ في بيتي لاحتياجات الطهي الصحي اليومية.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-secondary hover:border-terracotta transition-colors">
            <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center text-terracotta mb-6">
              <span className="material-symbols-outlined text-3xl">
                restaurant
              </span>
            </div>
            <h3 className="text-xl font-bold mb-3">سعة عائلية ضخمة</h3>
            <p className="text-charcoal/60 leading-relaxed">
              سعة 10 لتر تتيح لك تحضير وجبات كاملة للعائلة أو للضيوف في مرة
              واحدة بكل سهولة.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-secondary hover:border-terracotta transition-colors">
            <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center text-terracotta mb-6">
              <span className="material-symbols-outlined text-3xl">
                settings_suggest
              </span>
            </div>
            <h3 className="text-xl font-bold mb-3">12 برنامج طهي ذكي</h3>
            <p className="text-charcoal/60 leading-relaxed">
              شاشة لمس رقمية مع برامج مسبقة للقلي، الشوي، الخبز، وتجفيف الفواكه
              بضغطة زر.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-secondary hover:border-terracotta transition-colors">
            <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center text-terracotta mb-6">
              <span className="material-symbols-outlined text-3xl">
                health_and_safety
              </span>
            </div>
            <h3 className="text-xl font-bold mb-3">طهي صحي ومقرمش</h3>
            <p className="text-charcoal/60 leading-relaxed">
              تقنية الهواء الساخن السريعة تمنحك قرمشة مثالية مع دهون أقل بنسبة
              تصل إلى 85%.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

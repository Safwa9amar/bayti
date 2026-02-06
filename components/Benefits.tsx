export default function Benefits() {
  return (
    <section className="py-24 bg-secondary/20" id="benefits">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">بنيت للتميز</h2>
          <p className="text-charcoal/60">
            لماذا تعتبر قلاية بيتي الخيار الأمثل لمطبخك واحتياجاتك اليومية.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-secondary hover:border-terracotta transition-colors">
            <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center text-terracotta mb-6">
              <span className="material-symbols-outlined text-3xl">
                hot_tub
              </span>
            </div>
            <h3 className="text-xl font-bold mb-3">تقنية الهواء الحديثة</h3>
            <p className="text-charcoal/60 leading-relaxed">
              تقنية الهواء الساخن الحديثة لطهي الطعام بدون زيت، مما يضمن لك
              وجبات صحية ومقرمشة.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-secondary hover:border-terracotta transition-colors">
            <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center text-terracotta mb-6">
              <span className="material-symbols-outlined text-3xl">groups</span>
            </div>
            <h3 className="text-xl font-bold mb-3">سعة عائلية كبيرة</h3>
            <p className="text-charcoal/60 leading-relaxed">
              سعة كبيرة تتيح لك تحضير أطباق متنوعة لعائلتك ولضيوفك بكل سهولة
              ويسر.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-secondary hover:border-terracotta transition-colors">
            <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center text-terracotta mb-6">
              <span className="material-symbols-outlined text-3xl">tune</span>
            </div>
            <h3 className="text-xl font-bold mb-3">تحكم سهل وذكي</h3>
            <p className="text-charcoal/60 leading-relaxed">
              لوحة تحكم سهلة الاستخدام لضبط درجة الحرارة والوقت بما يتناسب مع كل
              نوع من الطعام.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

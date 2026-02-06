export default function Testimonials() {
  return (
    <section className="py-24 bg-charcoal text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-8">ماذا يقول الشيفات</h2>
            <div className="space-y-8">
              <div className="border-r-4 border-primary pr-6 py-2">
                <div className="flex text-primary mb-2">
                  <span className="material-symbols-outlined filled">star</span>
                  <span className="material-symbols-outlined filled">star</span>
                  <span className="material-symbols-outlined filled">star</span>
                  <span className="material-symbols-outlined filled">star</span>
                  <span className="material-symbols-outlined filled">star</span>
                </div>
                <p className="text-lg italic mb-4">
                  "القلاية الهوائية من بيتي غيرت مفهومي للطبخ الصحي. البطاطس
                  مقرمشة جداً والدجاج ينضج بسرعة مذهلة بدون أي زيت. السعة
                  الكبيرة مثالية لعائلتي."
                </p>
                <p className="font-bold">— سارة ج.، أم مهتمة بالصحة</p>
              </div>
              <div className="border-r-4 border-primary pr-6 py-2">
                <div className="flex text-primary mb-2">
                  <span className="material-symbols-outlined filled">star</span>
                  <span className="material-symbols-outlined filled">star</span>
                  <span className="material-symbols-outlined filled">star</span>
                  <span className="material-symbols-outlined filled">star</span>
                  <span className="material-symbols-outlined filled">star</span>
                </div>
                <p className="text-lg italic mb-4">
                  "واجهة التحكم باللمس سهلة جداً، والبرامج المسبقة دقيقة. جربت
                  الخبز والشوي والنتائج كانت دائماً مبهرة. أفضل استثمار لمطبخي
                  هذا العام."
                </p>
                <p className="font-bold">— حمزة ح.، هاوي طهي</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/5 p-8 rounded-2xl flex flex-col items-center text-center">
              <span className="material-symbols-outlined text-4xl text-primary mb-4">
                verified
              </span>
              <h4 className="font-bold mb-1">ضمان 12 شهر</h4>
              <p className="text-white/60 text-sm">حماية كاملة واستبدال</p>
            </div>
            <div className="bg-white/5 p-8 rounded-2xl flex flex-col items-center text-center">
              <span className="material-symbols-outlined text-4xl text-primary mb-4">
                local_shipping
              </span>
              <h4 className="font-bold mb-1">شحن سريع</h4>
              <p className="text-white/60 text-sm">توصيل خلال1-2 أيام عمل</p>
            </div>
            <div className="bg-white/5 p-8 rounded-2xl flex flex-col items-center text-center">
              <span className="material-symbols-outlined text-4xl text-primary mb-4">
                support_agent
              </span>
              <h4 className="font-bold mb-1">دعم 24/7</h4>
              <p className="text-white/60 text-sm">مساعدة عبر الدردشة الحية</p>
            </div>
            <div className="bg-white/5 p-8 rounded-2xl flex flex-col items-center text-center">
              <span className="material-symbols-outlined text-4xl text-primary mb-4">
                credit_card
              </span>
              <h4 className="font-bold mb-1">دفع عند الاستلام</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

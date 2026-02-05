export default function OtherProducts() {
  return (
    <section className="py-24" id="products">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-bold">منتجات أخرى</h2>
            <p className="text-charcoal/60 mt-2">
              استكشف أفضل منتجات المطبخ مبيعاً لدينا.
            </p>
          </div>
          <a
            className="text-terracotta font-bold flex items-center gap-2 hover:underline"
            href="#"
          >
            مشاهدة الكل{" "}
            <span className="material-symbols-outlined text-sm">
              arrow_back
            </span>
          </a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-secondary">
            <div className="relative aspect-square overflow-hidden bg-secondary/10">
              <img
                alt="مطحنة توابل ستانلس ستيل"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcQ1rpgSZgVZP6ZdZIBu5Y9-qFiWIYvL-OeLpYnTF-luxIBCyOeVr1CRKpdszEBP7ZDo1MUb-nnWyE87Y927yD0cLEHXSBDhCEVdefFFsqUiPocBYJpFbK5tTxehxw7Z9Ks0HvLE6_Z1LEFe01DC1dW2v-TaH7-XtTeNa5JimqUPOIVcNZ3CCbj7KYacTk1-rTovzvl0olLKnjPUcnI03mCEV4GmLVdZw_MY-Ci2tC0eGC8vZ1BTzyCIqXYBSan8LDDQxH0bryFmeC"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold">مطحنة توابل احترافية</h3>
                <div className="flex items-center text-terracotta">
                  <span className="material-symbols-outlined filled text-sm">
                    star
                  </span>
                  <span className="text-sm font-bold mr-1">4.8</span>
                </div>
              </div>
              <p className="text-charcoal/60 text-sm mb-4">
                مطحنة ستانلس ستيل صناعية للقهوة، المكسرات والتوابل.
              </p>
              <div className="flex items-center justify-between mt-auto">
                <div>
                  <span className="text-2xl font-bold">49.99 د.ج</span>
                  <span className="text-charcoal/40 line-through text-sm mr-2">
                    64.00 د.ج
                  </span>
                </div>
                <button className="w-12 h-12 bg-primary hover:bg-terracotta text-charcoal hover:text-white rounded-xl flex items-center justify-center transition-colors shadow-lg">
                  <span className="material-symbols-outlined">
                    shopping_bag
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-secondary">
            <div className="relative aspect-square overflow-hidden bg-secondary/10">
              <img
                alt="فرامة ثوم ذكية"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQyrV__MsImAU_6ZqBdvIhGyvAlzOHM9HnkvEmaRQQrS4l9WhcEIjujkZ49jb8YmXNGz53N7XU-Jy_QfuvfKFCANkMINj8bg0IvLXJvK_94LmYnvKih8LgE-pRdMAo7WzAG8vclAG6Gf6XXcXA7r_qzjv59XNR2M3YLU5gKNC3KIN4HkZF2A25dUWvu_2MXKZHn8nQEDMXh4Q79UiGY1JfHBHcn7QoWWSGDS_-iXNbhBHVUCdn_DXKfnBw_MGH7LA9_spxS-zoEwWb"
              />
              <span className="absolute top-4 right-4 bg-terracotta text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                الأكثر تقييماً
              </span>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold">آلة ثوم كهربائية</h3>
                <div className="flex items-center text-terracotta">
                  <span className="material-symbols-outlined filled text-sm">
                    star
                  </span>
                  <span className="text-sm font-bold mr-1">5.0</span>
                </div>
              </div>
              <p className="text-charcoal/60 text-sm mb-4">
                فرامة ثوم وخضروات ذكية لاسلكية. تعمل بضغطة واحدة.
              </p>
              <div className="flex items-center justify-between mt-auto">
                <div>
                  <span className="text-2xl font-bold">24.99 د.ج</span>
                  <span className="text-charcoal/40 line-through text-sm mr-2">
                    39.99 د.ج
                  </span>
                </div>
                <button className="w-12 h-12 bg-primary hover:bg-terracotta text-charcoal hover:text-white rounded-xl flex items-center justify-center transition-colors shadow-lg">
                  <span className="material-symbols-outlined">
                    shopping_bag
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

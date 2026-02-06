export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <img
              src="/logo.png"
              alt="Bayti Logo"
              className="h-24 w-auto rounded-xl"
            />
          </div>
          <div className="hidden md:flex items-center  space-x-8 font-medium">
            <a className="hover:text-terracotta transition-colors" href="#">
              الرئيسية
            </a>
            <a
              className="hover:text-terracotta transition-colors"
              href="#products"
            >
              المنتجات
            </a>
            <a
              className="hover:text-terracotta transition-colors"
              href="#benefits"
            >
              المميزات
            </a>

            <a className="hover:text-terracotta transition-colors" href="#">
              آراء العملاء
            </a>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 text-charcoal hover:bg-secondary/30 rounded-full">
              <span className="material-symbols-outlined">search</span>
            </button>
            <button className="p-2 text-charcoal hover:bg-secondary/30 rounded-full relative">
              <span className="material-symbols-outlined">shopping_cart</span>
              <span className="absolute top-1 right-1 w-4 h-4 bg-terracotta text-white text-[10px] flex items-center justify-center rounded-full font-bold">
                2
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

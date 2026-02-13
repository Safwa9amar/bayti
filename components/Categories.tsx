import { Link } from "@/i18n/routing";
import { MdWest } from "react-icons/md";
import { useTranslations } from "next-intl";

export default function Categories() {
  const t = useTranslations("Categories");

  return (
    <section className="container mx-auto px-4 lg:px-8 py-24">
      <div className="flex justify-between items-end mb-12">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold text-brand-dark dark:text-brand-warm">
            {t("title")}
          </h2>
          <div className="w-20 h-1.5 bg-primary rounded-full"></div>
        </div>
        <Link
          className="text-primary font-semibold flex items-center gap-2 hover:gap-4 transition-all"
          href="/store/products"
        >
          {t("viewAll")}
          <MdWest className="text-xl" />
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Link
          href="/store/products?category=أجهزة طبخ"
          className="relative h-[300px] group overflow-hidden rounded-xl cursor-pointer block"
        >
          <img
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            alt="Modern air fryer in a kitchen setting"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtOMAtEw284s93Fkk6b_NU-1ooSDtRnll89TLXmyXViRDHM5WtqECIjwYuCYfF_bdX2yoCgS82Pi1r_e8M67L5ufcPkuRH5DjR3Xl9O384t-gKu4LiI4tRL8t6VBrSEdA56AHJeD8KmPe7Z_4q1rVfGjuI2qpOZAKu-xfvFSiJ0rhjQp9Y7yuS3nBo49kyWtwiRIvoi_IkykpnDXdzivGXkY_BAldgm9Az7E3926i0E_h1E_50uJ4Vinry3TJGH86ow5nYjVNcPEqa"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-8">
            <div className="text-white">
              <h3 className="text-2xl font-bold mb-2">
                {t("items.cookingAppliences.title")}
              </h3>
              <p className="text-brand-warm/80">
                {t("items.cookingAppliences.description")}
              </p>
            </div>
          </div>
        </Link>
        <Link
          href="/store/products?category=أدوات مطبخ"
          className="relative h-[300px] group overflow-hidden rounded-xl cursor-pointer block"
        >
          <img
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            alt="Assorted high-end kitchen mixer and blender"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB89JwvOiQHpMMuERLvFPvuPbN2Qg-i03M03tiBSiXS2lpURDAtJAq5d4__OOY0tX1tkWcvKjVfjSt__SlAY-ABBxSzf4nEcZGQoHJXaNWh1U_fhLLVosxDv_h-vsh1GZW0AoMCbD4IV32y_1DrxEK01iu1A4pCSvl32Og_4FWAwvJ_8oyIg1HWOs61yOc6X20is1HyrLcZa3_yNHPAa1h-_XVrmtJNOD7w33xto_k4lvKDsm6lACCLbkD_swa79BFDbKe7NtJo7kgf"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-8">
            <div className="text-white">
              <h3 className="text-2xl font-bold mb-2">
                {t("items.kitchenTools.title")}
              </h3>
              <p className="text-brand-warm/80">
                {t("items.kitchenTools.description")}
              </p>
            </div>
          </div>
        </Link>
        <Link
          href="/store/products?category=تنظيم المنزل"
          className="relative h-[300px] group overflow-hidden rounded-xl cursor-pointer block"
        >
          <img
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            alt="Neatly organized kitchen storage and shelves"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuATntvJxFaFkEQOBuSnyQ-DxtcQ4fjvr4uHpuOItlKhx8PKMUInqiTfZ2kxCLEs1b7DLr4TitdCmSP6qFXrEsfhFOFzerXyl9Jo5r0g8NFOPCcp2yaj3lDR7Niq71P9DU048pKQtfnRIcEXMV9wPUImpksLuglTH4kkJcXWgCR481b7-LwCgEW9YPnTUMweA79X_ZWiUc0nsfReE2cxIxo2XWaHlxBaDyz0J7ygzYxoDImnti9_WGO0idywbuMp0Psyw7SU5EQdC3hx"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-8">
            <div className="text-white">
              <h3 className="text-2xl font-bold mb-2">
                {t("items.homeOrganization.title")}
              </h3>
              <p className="text-brand-warm/80">
                {t("items.homeOrganization.description")}
              </p>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}

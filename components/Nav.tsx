"use client";

import { useState } from "react";
import { Link } from "@/i18n/routing";
import {
  MdHome,
  MdSearch,
  MdShoppingCart,
  MdMenu,
  MdClose,
} from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { useTranslations } from "next-intl";

export default function Nav() {
  const t = useTranslations("Nav");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white dark:bg-background-dark backdrop-blur-md border-b border-brand-dark/20 shadow-sm">
        <div className="container mx-auto px-4 lg:px-8 py-3 md:py-4">
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <div className="shrink-0">
              <Link href="/" className="flex items-center">
                <img
                  src="/logo.png"
                  alt="بيتي"
                  className="h-14 md:h-20 w-auto rounded-xl"
                />
              </Link>
            </div>

            {/* Search Bar - Desktop Only */}
            {/* <div className="flex-grow max-w-2xl hidden lg:block">
              <div className="relative group">
                <input
                  className="w-full bg-brand-warm/70 dark:bg-primary/10 border border-brand-dark/10 rounded-full py-3 pr-12 pl-4 text-brand-dark dark:text-brand-warm placeholder:text-brand-dark/50 focus:ring-2 focus:ring-primary transition-all outline-none"
                  placeholder={t("searchPlaceholder")}
                  type="text"
                />
                <MdSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-brand-dark dark:text-primary text-2xl" />
              </div>
            </div> */}

            {/* Actions - Desktop */}
            <div className="hidden md:flex items-center gap-4 lg:gap-6">
              <a
                className="flex items-center gap-2 text-brand-dark dark:text-primary hover:scale-105 transition-transform"
                href="https://wa.me/+213673124281"
              >
                <span className="hidden lg:inline text-sm font-bold">
                  {t("contact")}
                </span>
                <div className="bg-primary/20 p-2 rounded-full">
                  <FaWhatsapp className="text-xl lg:text-2xl text-primary" />
                </div>
              </a>
              <div className="relative cursor-pointer group">
                <MdShoppingCart className="text-2xl text-brand-dark dark:text-brand-warm" />
                <span className="absolute -top-2 -right-2 bg-primary text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full border-2 border-white dark:border-background-dark font-bold">
                  2
                </span>
              </div>
            </div>

            {/* Mobile Actions */}
            <div className="flex md:hidden items-center gap-3">
              <div className="relative cursor-pointer">
                <MdShoppingCart className="text-xl text-brand-dark dark:text-brand-warm" />
                <span className="absolute -top-1 -right-1 bg-primary text-white text-[8px] w-4 h-4 flex items-center justify-center rounded-full border border-white font-bold">
                  2
                </span>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <MdClose className="text-2xl text-brand-dark dark:text-brand-warm" />
                ) : (
                  <MdMenu className="text-2xl text-brand-dark dark:text-brand-warm" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white dark:bg-background-dark z-50 transform transition-transform duration-300 md:hidden shadow-xl ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-bold text-brand-dark dark:text-brand-warm">
              القائمة
            </h2>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2"
              aria-label="Close menu"
            >
              <MdClose className="text-2xl text-brand-dark dark:text-brand-warm" />
            </button>
          </div>

          {/* Mobile Search */}
          <div className="relative mb-6">
            <input
              className="w-full bg-brand-warm/70 dark:bg-primary/10 border border-brand-dark/10 rounded-full py-3 pr-12 pl-4 text-brand-dark dark:text-brand-warm placeholder:text-brand-dark/50 focus:ring-2 focus:ring-primary transition-all outline-none"
              placeholder={t("searchPlaceholder")}
              type="text"
            />
            <MdSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-brand-dark dark:text-primary text-xl" />
          </div>

          {/* Mobile Navigation Links */}
          <nav className="space-y-4">
            <Link
              href="/"
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary/10 transition-colors text-brand-dark dark:text-brand-warm font-semibold"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <MdHome className="text-xl" />
              <span>الرئيسية</span>
            </Link>
            <Link
              href="/store/products"
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary/10 transition-colors text-brand-dark dark:text-brand-warm font-semibold"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <MdShoppingCart className="text-xl" />
              <span>المنتجات</span>
            </Link>
            <a
              href="https://wa.me/213550000000"
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary/10 transition-colors text-brand-dark dark:text-brand-warm font-semibold"
            >
              <FaWhatsapp className="text-xl text-primary" />
              <span>{t("contact")}</span>
            </a>
          </nav>
        </div>
      </div>
    </>
  );
}

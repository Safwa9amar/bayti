"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { products as allProducts, Product } from "@/lib/products";
import { MdSearch } from "react-icons/md";

interface ProductFiltersProps {
  onFilterChange: (filtered: Product[]) => void;
}

const categories = ["الكل", "أجهزة طبخ", "أدوات مطبخ", "تنظيم المنزل"];

function ProductFiltersContent({ onFilterChange }: ProductFiltersProps) {
  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("الكل");

  useEffect(() => {
    const categoryParam = searchParams.get("category");
    if (categoryParam && categories.includes(categoryParam)) {
      setActiveCategory(categoryParam);
    }
  }, [searchParams]);

  useEffect(() => {
    const filtered = allProducts.filter((product) => {
      const matchesSearch =
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory =
        activeCategory === "الكل" || product.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
    onFilterChange(filtered);
  }, [searchTerm, activeCategory, onFilterChange]);

  return (
    <div className="bg-white border-b border-secondary sticky top-20 z-40 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
          <div className="relative w-full md:w-96">
            <MdSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal/40 text-xl" />
            <input
              type="text"
              placeholder="ابحث عن منتج..."
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-secondary focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all ${
                  activeCategory === category
                    ? "bg-primary text-charcoal shadow-md"
                    : "bg-secondary/30 text-charcoal/60 hover:bg-secondary/50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProductFilters(props: ProductFiltersProps) {
  return (
    <Suspense
      fallback={<div className="h-24 bg-white border-b border-secondary" />}
    >
      <ProductFiltersContent {...props} />
    </Suspense>
  );
}

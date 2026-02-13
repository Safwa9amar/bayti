"use client";

import { useState } from "react";
import Header from "@/components/Header";
import ProductList from "@/components/ProductList";
import ProductFilters from "@/components/ProductFilters";
import { products as allProducts, Product } from "@/lib/products";

export default function ProductsPage() {
  const [filteredProducts, setFilteredProducts] =
    useState<Product[]>(allProducts);

  const headerData = {
    badge: {
      icon: "🛍️",
      text: "كل ما يحتاجه مطبخك في مكان واحد",
    },
    title: {
      text1: "اكتشف ",
      highlight: "تشكيلتنا الكاملة",
      text2: " من الأجهزة",
    },
    description:
      "تصفح مجموعة بيتي الواسعة من أدوات وأجهزة المطبخ الاحترافية المختارة بعناية لتناسب منزلك العصري.",
    primaryButton: {
      label: "ابدأ التسوق",
      href: "#products-grid",
    },
    image: {
      url: "/logo.png",
      alt: "متجر بيتي للأجهزة المنزلية",
    },
  };

  return (
    <>
      <div id="products-grid">
        <ProductFilters onFilterChange={setFilteredProducts} />
        <ProductList
          products={filteredProducts}
          title="معرض المنتجات"
          subtitle={`نعرض ${filteredProducts.length} منتج${filteredProducts.length !== 1 ? "اً" : ""} متميزاً`}
        />
      </div>
    </>
  );
}

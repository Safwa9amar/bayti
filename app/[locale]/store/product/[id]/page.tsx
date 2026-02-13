"use client";
import ProductDetails from "@/components/ProductDetails";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import Header from "@/components/Header";
import { getProductById } from "@/lib/products";
import { useParams, notFound } from "next/navigation";

export default function ProductPage() {
  const params = useParams();
  const id = params?.id as string;

  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  return (
    <>
      {product.headerData && <Header data={product.headerData} />}
      <ProductDetails product={product} />
    </>
  );
}

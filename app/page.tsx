import Benefits from "@/components/Benefits";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Nav from "@/components/Nav";
import ProductDetails from "@/components/ProductDetails";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Nav />
      <Header />
      <ProductDetails />
      <Benefits />
      <Testimonials />
      <Footer />
    </>
  );
}

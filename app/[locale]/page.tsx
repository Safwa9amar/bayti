import Nav from "@/components/Nav";
import Header from "@/components/Header";
import Benefits from "@/components/Benefits";
import ProductList from "@/components/ProductList";
import Categories from "@/components/Categories";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Header />
      <Benefits />
      <Categories />
      <ProductList />
      <Testimonials />
      <Footer />
    </main>
  );
}

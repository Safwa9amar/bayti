import { AdminHeader } from "@/components/admin/Header";
import { ProductList } from "@/components/admin/ProductList";
import { Link } from "@/i18n/routing";
import { MdAdd } from "react-icons/md";

export default function AdminProductsPage() {
  const actions = (
    <Link
      href="/admin/products/add"
      className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-5 py-2.5 rounded-lg font-semibold transition-all shadow-sm shadow-primary/20"
    >
      <MdAdd className="text-[20px]" />
      <span>Add New Product</span>
    </Link>
  );

  return (
    <>
      <AdminHeader title="Product Inventory" actions={actions} />
      <ProductList />
    </>
  );
}

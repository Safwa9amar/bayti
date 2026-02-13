"use client";
import { useState } from "react";
import { ecotrack } from "@/lib/ecotrack";
import { LocationSelector } from "./LocationSelector";

interface OrderFormProps {
  productName: string;
  basePrice: number;
}

import {
  MdShoppingCartCheckout,
  MdHome,
  MdBusinessCenter,
} from "react-icons/md";

export default function OrderForm({ productName, basePrice }: OrderFormProps) {
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    wilayaId: 0 as number | string,
    wilayaName: "",
    commune: "",
    address: "",
    deliveryType: "home", // "home" or "office"
    quantity: "قطعة واحدة",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch(process.env.NEXT_PUBLIC_PRODUCT_FORM_URI || "", {
        method: "POST",
        //   headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          paymentMethod: "الدفع عند الاستلام",
        }),
      });

      // Integrate EcoTrack if configured

      // Map form to EcoTrackOrder interface
      const wilayaCode = Number(form.wilayaId);

      // Calculate montant based on quantity
      let montant = basePrice; // Base price
      if (form.quantity === "قطعتين (وفر 5%)") {
        montant = basePrice * 2 * 0.95;
      } else if (form.quantity === "3 قطع (وفر 10%)") {
        montant = basePrice * 3 * 0.9;
      } else if (form.quantity === "قطعة واحدة") {
        montant = basePrice;
      }

      try {
        await ecotrack.addOrder({
          nom_client: form.fullName,
          telephone: form.phone,
          adresse: form.address || `Stop Desk - ${form.commune}`, // Ensure address is NEVER empty
          commune: form.commune,
          code_wilaya: wilayaCode,
          montant: montant,
          type: 1, // Livraison
          stop_desk: form.deliveryType === "office" ? 1 : 0,
          stock: 0, // Assume not using storage module
          quantite: form.quantity,
          remarque: `الكمية: ${form.quantity}`,
          produit: productName,
        });
      } catch (ecoError: any) {
        console.error("EcoTrack submission failed:", ecoError);

        // Specific handling for Stop Desk error
        if (ecoError.data?.errors?.stop_desk) {
          alert(
            "⚠️ خدمة 'توصيل للمكتب' غير متوفرة في هذه البلدية. يرجى اختيار 'توصيل للمنزل'.",
          );
          setLoading(false);
          return; // Stop the process so user can fix it
        }

        // Handle other validation errors
        if (ecoError.data?.errors) {
          const firstError = Object.values(ecoError.data.errors)[0] as string[];
          alert(`❌ ${firstError[0] || "حدث خطأ في طلب EcoTrack"}`);
          setLoading(false);
          return;
        }

        // Just log generic errors, don't block if main sheet submission worked
      }

      alert("✅ تم إرسال طلبك بنجاح");
      setForm({
        fullName: "",
        phone: "",
        wilayaId: 0,
        wilayaName: "",
        commune: "",
        address: "",
        deliveryType: "home",
        quantity: "قطعة واحدة",
      });
    } catch (error) {
      console.error(error);
      alert("❌ حدث خطأ أثناء إرسال الطلب. يرجى المحاولة مرة أخرى.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-secondary/20 p-6 rounded-2xl border border-secondary/50 mt-8">
      <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
        <MdShoppingCartCheckout className="text-terracotta text-2xl" />
        نموذج الطلب السريع
      </h3>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <input
          name="fullName"
          value={form.fullName}
          onChange={handleChange}
          placeholder="أدخل اسمك الكامل"
          className="w-full bg-white rounded-xl px-4 py-3"
          required
          disabled={loading}
        />

        <input
          name="phone"
          value={form.phone}
          onChange={handleChange}
          type="tel"
          dir="ltr"
          placeholder="000 000 0000"
          className="w-full bg-white rounded-xl px-4 py-3"
          required
          disabled={loading}
        />
        <LocationSelector
          wilayaId={form.wilayaId}
          communeName={form.commune}
          onLocationChange={({ wilayaId, wilayaName, communeName }) => {
            setForm((prev) => ({
              ...prev,
              wilayaId,
              wilayaName,
              commune: communeName,
            }));
          }}
          disabled={loading}
        />

        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => setForm({ ...form, deliveryType: "home" })}
            className={`p-4 rounded-xl border-2 flex flex-col items-center gap-2 transition-all ${
              form.deliveryType === "home"
                ? "border-primary bg-primary/10"
                : "border-off-white bg-white grayscale opacity-70"
            }`}
          >
            <MdHome className="text-2xl" />
            <span className="font-bold">توصيل للمنزل</span>
          </button>
          <button
            type="button"
            onClick={() => setForm({ ...form, deliveryType: "office" })}
            className={`p-4 rounded-xl border-2 flex flex-col items-center gap-2 transition-all ${
              form.deliveryType === "office"
                ? "border-primary bg-primary/10"
                : "border-off-white bg-white grayscale opacity-70"
            }`}
          >
            <MdBusinessCenter className="text-2xl" />
            <span className="font-bold">توصيل للمكتب</span>
          </button>
        </div>

        {form.deliveryType === "home" && (
          <textarea
            name="address"
            value={form.address}
            onChange={handleChange}
            placeholder="أدخل عنوان التوصيل الكامل"
            rows={3}
            className="w-full bg-white rounded-xl px-4 py-3"
            required={form.deliveryType === "home"}
            disabled={loading}
          />
        )}

        <select
          name="quantity"
          value={form.quantity}
          onChange={handleChange}
          className="w-full bg-white rounded-xl px-4 py-3"
          disabled={loading}
        >
          <option>قطعة واحدة</option>
          <option>قطعتين (وفر 5%)</option>
          <option>3 قطع (وفر 10%)</option>
        </select>

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-4 bg-primary rounded-xl font-black text-lg flex items-center justify-center gap-3 transition-all ${
            loading
              ? "opacity-70 cursor-not-allowed"
              : "hover:bg-terracotta hover:text-white"
          }`}
        >
          {loading ? (
            <>
              <svg
                className="animate-spin h-5 w-5 text-charcoal"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              جاري الإرسال...
            </>
          ) : (
            "تأكيد الطلب"
          )}
        </button>
      </form>
    </div>
  );
}

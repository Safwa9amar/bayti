"use client";
import { useState } from "react";
import wilayas from "@/data/wilayas.json";

export default function OrderForm() {
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    wilaya: "",
    address: "",
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
      await fetch(
        "https://script.google.com/macros/s/AKfycbyaR9Yv-e6E2QGOs2hCBLLJ8Va1fp01tpp6gEbmXlGcniIW8Kn67Q4SJtJl8pC_hdHN/exec",
        {
          method: "POST",
          //   headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...form,
            paymentMethod: "الدفع عند الاستلام",
          }),
        },
      );

      alert("✅ تم إرسال طلبك بنجاح");
      setForm({
        fullName: "",
        phone: "",
        wilaya: "",
        address: "",
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
        <span className="material-symbols-outlined text-terracotta">
          shopping_cart_checkout
        </span>
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

        <select
          name="wilaya"
          value={form.wilaya}
          onChange={handleChange}
          className="w-full bg-white rounded-xl px-4 py-3"
          required
          disabled={loading}
        >
          <option value="">اختر الولاية</option>
          {wilayas.map((w) => (
            <option key={w.id} value={`${w.code} - ${w.ar_name}`}>
              {w.code} - {w.ar_name}
            </option>
          ))}
        </select>

        <textarea
          name="address"
          value={form.address}
          onChange={handleChange}
          placeholder="أدخل عنوان التوصيل الكامل"
          rows={3}
          className="w-full bg-white rounded-xl px-4 py-3"
          required
          disabled={loading}
        />

        <select
          name="quantity"
          value={form.quantity}
          onChange={handleChange}
          className="w-full bg-white rounded-xl px-4 py-3"
          disabled={loading}
        >
          <option>قطعة واحدة</option>
          <option>قطعتين (وفر 10%)</option>
          <option>3 قطع (وفر 15%)</option>
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

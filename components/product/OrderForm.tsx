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

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    await fetch(
      "https://script.google.com/macros/s/AKfycbxjtGP8ZKNGWd_zml7x-QOB6MrYUrYxClm3qW6bgD2sKi5Mw5jm3hW-1UKRYC_loVW3/exec",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
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
        />

        <select
          name="wilaya"
          value={form.wilaya}
          onChange={handleChange}
          className="w-full bg-white rounded-xl px-4 py-3"
          required
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
        />

        <select
          name="quantity"
          value={form.quantity}
          onChange={handleChange}
          className="w-full bg-white rounded-xl px-4 py-3"
        >
          <option>قطعة واحدة</option>
          <option>قطعتين (وفر 10%)</option>
          <option>3 قطع (وفر 15%)</option>
        </select>

        <button
          type="submit"
          className="w-full py-4 bg-primary rounded-xl font-black text-lg"
        >
          تأكيد الطلب
        </button>
      </form>
    </div>
  );
}

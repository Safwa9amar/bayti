"use client";
import { useState, useEffect } from "react";
import { ecotrack, EcoTrackWilaya, EcoTrackCommune } from "@/lib/ecotrack";

interface LocationSelectorProps {
  wilayaId: number | string;
  communeName: string;
  onLocationChange: (data: {
    wilayaId: number;
    wilayaName: string;
    communeName: string;
  }) => void;
  disabled?: boolean;
}

import { MdExpandMore } from "react-icons/md";

export function LocationSelector({
  wilayaId,
  communeName,
  onLocationChange,
  disabled,
}: LocationSelectorProps) {
  const [wilayas, setWilayas] = useState<EcoTrackWilaya[]>([]);
  const [communes, setCommunes] = useState<EcoTrackCommune[]>([]);
  const [loadingWilayas, setLoadingWilayas] = useState(false);
  const [loadingCommunes, setLoadingCommunes] = useState(false);

  useEffect(() => {
    async function loadWilayas() {
      setLoadingWilayas(true);
      try {
        const data = await ecotrack.getWilayas();
        setWilayas(data);
      } catch (error) {
        console.error("Failed to load wilayas", error);
      } finally {
        setLoadingWilayas(false);
      }
    }
    loadWilayas();
  }, []);

  useEffect(() => {
    if (!wilayaId) {
      setCommunes([]);
      return;
    }
    async function loadCommunes() {
      setLoadingCommunes(true);
      try {
        const data = await ecotrack.getCommunes(Number(wilayaId));
        setCommunes(data);
      } catch (error) {
        console.error("Failed to load communes", error);
      } finally {
        setLoadingCommunes(false);
      }
    }
    loadCommunes();
  }, [wilayaId]);

  const handleWilayaChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const id = parseInt(e.target.value);
    const selectedWilaya = wilayas.find((w) => w.wilaya_id === id);
    if (selectedWilaya) {
      onLocationChange({
        wilayaId: id,
        wilayaName: selectedWilaya.wilaya_name,
        communeName: "",
      });
    } else {
      onLocationChange({
        wilayaId: 0,
        wilayaName: "",
        communeName: "",
      });
    }
  };

  const handleCommuneChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedWilaya = wilayas.find(
      (w) => w.wilaya_id === Number(wilayaId),
    );
    onLocationChange({
      wilayaId: Number(wilayaId),
      wilayaName: selectedWilaya?.wilaya_name || "",
      communeName: e.target.value,
    });
  };

  return (
    <div className="space-y-4">
      <div className="relative">
        <select
          value={wilayaId}
          onChange={handleWilayaChange}
          className="w-full bg-white rounded-xl px-4 py-3 appearance-none"
          required
          disabled={disabled || loadingWilayas}
        >
          <option value="">
            {loadingWilayas ? "جاري تحميل الولايات..." : "اختر الولاية"}
          </option>
          {wilayas.map((w, index) => (
            <option key={w.wilaya_id || index} value={w.wilaya_id}>
              {w.wilaya_id} -{" "}
              {w.wilaya_name ||
                (w as any).nom ||
                (w as any).name ||
                "اسم غير متوفر"}
            </option>
          ))}
        </select>
        <MdExpandMore className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 text-2xl" />
      </div>

      <div className="relative">
        <select
          value={communeName}
          onChange={handleCommuneChange}
          className="w-full bg-white rounded-xl px-4 py-3 appearance-none"
          required
          disabled={disabled || !wilayaId || loadingCommunes}
        >
          <option value="">
            {loadingCommunes ? "جاري تحميل البلديات..." : "اختر البلدية"}
          </option>
          {communes.map((c, index) => (
            <option key={c.commune_id || index} value={c.commune_name}>
              {c.commune_name || (c as any).nom || (c as any).name}
            </option>
          ))}
        </select>
        <MdExpandMore className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 text-2xl" />
      </div>
    </div>
  );
}

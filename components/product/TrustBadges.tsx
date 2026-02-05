export default function TrustBadges() {
  return (
    <div className="grid grid-cols-3 gap-2 mt-8 pt-6 border-t border-secondary">
      <div className="flex flex-col items-center text-center">
        <span className="material-symbols-outlined text-terracotta mb-1">
          local_shipping
        </span>
        <span className="text-[10px] font-bold uppercase tracking-tight leading-tight">
          شحن
          <br />
          سريع
        </span>
      </div>
      <div className="flex flex-col items-center text-center">
        <span className="material-symbols-outlined text-terracotta mb-1">
          verified_user
        </span>
        <span className="text-[10px] font-bold uppercase tracking-tight leading-tight">
          ضمان جودة
          <br />
          100%
        </span>
      </div>
      <div className="flex flex-col items-center text-center">
        <span className="material-symbols-outlined text-terracotta mb-1">
          assignment_return
        </span>
        <span className="text-[10px] font-bold uppercase tracking-tight leading-tight">
          إرجاع
          <br />
          سهل
        </span>
      </div>
    </div>
  );
}

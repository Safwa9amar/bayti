import {
  MdLocalShipping,
  MdVerifiedUser,
  MdAssignmentReturn,
} from "react-icons/md";

export default function TrustBadges() {
  return (
    <div className="grid grid-cols-3 gap-2 mt-8 pt-6 border-t border-secondary">
      <div className="flex flex-col items-center text-center">
        <MdLocalShipping className="text-terracotta mb-1 text-2xl" />
        <span className="text-[10px] font-bold uppercase tracking-tight leading-tight">
          شحن
          <br />
          سريع
        </span>
      </div>
      <div className="flex flex-col items-center text-center">
        <MdVerifiedUser className="text-terracotta mb-1 text-2xl" />
        <span className="text-[10px] font-bold uppercase tracking-tight leading-tight">
          ضمان جودة
          <br />
          100%
        </span>
      </div>
      <div className="flex flex-col items-center text-center">
        <MdAssignmentReturn className="text-terracotta mb-1 text-2xl" />
        <span className="text-[10px] font-bold uppercase tracking-tight leading-tight">
          إرجاع
          <br />
          سهل
        </span>
      </div>
    </div>
  );
}

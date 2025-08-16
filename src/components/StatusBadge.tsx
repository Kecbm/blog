import { Check, Clock, Hourglass } from "lucide-react";

interface StatusBadgeProps {
  status: "in-progress" | "done" | "pending";
  inProgressLabel?: string;
}

export default function StatusBadge({ status, inProgressLabel = "Playing" }: StatusBadgeProps) {
  if (status === "done") {
    return (
      <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-[#68a60a]/80 px-2.5 py-1.5 rounded-full text-xs font-bold shadow-lg dark:bg-[#88d012]/80 text-[#1b2f04]">
        <Check size={14} strokeWidth={3}/>
        <span>Completed</span>
      </div>
    );
  }

  if (status === "in-progress") {
    return (
      <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-[#c59009]/80 px-2.5 py-1.5 rounded-full text-xs font-bold shadow-lg dark:bg-[#e4b90e]/80 text-[#402208]">
        <Clock size={14}/>
        <span>{inProgressLabel}</span>
      </div>
    );
  }

  if (status === "pending") {
    return (
      <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-[#7f87ac]/80 dark:bg-[#96a0be]/80 text-[#23252e] px-2.5 py-1.5 rounded-full text-xs font-bold shadow-lg transition-colors text-[#2c2e3a]">
        <Hourglass size={14}/>
        <span>Pending</span>
      </div>
    );
  }

  return null;
}

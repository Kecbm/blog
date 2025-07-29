import { Check, Clock } from "lucide-react";

interface GameStatusBadgeProps {
  status: "in-progress" | "done";
}

export default function GameStatusBadge({ status }: GameStatusBadgeProps) {
  if (status === "done") {
    return (
      <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-green-500/30 backdrop-blur-sm text-green-600 px-2.5 py-1.5 rounded-full text-xs font-bold shadow-lg ring-1 ring-green-500 dark:text-green-400 dark:ring-green-400">
        <Check size={14} strokeWidth={3} />
        <span>Completed</span>
      </div>
    );
  }

  if (status === "in-progress") {
    return (
      <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-blue-500/30 backdrop-blur-sm text-blue-600 px-2.5 py-1.5 rounded-full text-xs font-bold shadow-lg ring-1 ring-blue-500 dark:text-blue-400 dark:ring-blue-400">
        <Clock size={14} />
        <span>Playing</span>
      </div>
    );
  }

  return null;
}

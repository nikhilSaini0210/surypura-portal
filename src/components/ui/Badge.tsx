import type { FC } from "react";

interface BadgeProps {
  label: string;
  color?: "green" | "orange" | "blue" | "purple" | "red" | "yellow";
  size?: "sm" | "md";
}

const colorMap: Record<string, string> = {
  green: "bg-green-500/20 text-green-400 border-green-500/30",
  orange: "bg-orange-500/20 text-orange-400 border-orange-500/30",
  blue: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  purple: "bg-purple-500/20 text-purple-400 border-purple-500/30",
  red: "bg-red-500/20 text-red-400 border-red-500/30",
  yellow: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
};

const Badge: FC<BadgeProps> = ({ label, color = "green", size = "sm" }) => {
  const sizeClass = size === "sm" ? "px-3 py-1 text-xs" : "px-4 py-1.5 text-sm";
  return (
    <span
      className={`inline-flex items-center rounded-full border font-semibold tracking-wide ${sizeClass} ${colorMap[color]}`}
    >
      {label}
    </span>
  );
};

export default Badge;

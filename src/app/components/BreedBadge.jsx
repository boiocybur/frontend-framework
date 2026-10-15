
export default function BreedBadge({
  label,
  color = "green",
}) {
  const colors = {
    green: "bg-pastel-green",
    pink: "bg-pastel-pink",
    blue: "bg-pastel-blue",
    yellow: "bg-pastel-yellow",
  };

  return (
    <span
      className={`
        inline-block rounded-full
        px-4 py-2 text-sm font-medium
        text-gray-800
        ${colors[color] || colors.green}
      `}
    >
      {label}
    </span>
  );
}

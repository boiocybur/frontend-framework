"use client";

import { useState } from "react";
import { FiStar } from "react-icons/fi";

export default function FavoriteButton() {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <button
      type="button"
      aria-label={isFavorite ? "Remove favorite" : "Add favorite"}
      aria-pressed={isFavorite}
      onClick={() => setIsFavorite(!isFavorite)}
      className="absolute right-2 top-2 z-10
           flex h-7 w-7 items-center justify-center
           rounded-full bg-white/40 text-white
           focus-visible:outline-2
           focus-visible:outline-coral"
    >
      <FiStar className={isFavorite ? "fill-white text-white" : "text-white"} />
    </button>
  );
}

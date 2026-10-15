"use client";

import { useState } from "react";
import { FiHeart } from "react-icons/fi";

export default function FavoriteButton() {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <button
      type="button"
      aria-label={isFavorite ? "Remove favorite" : "Add favorite"}
      aria-pressed={isFavorite}
      onClick={() => setIsFavorite(!isFavorite)}
      className="absolute right-3 top-3 z-10
                 flex h-9 w-9 items-center justify-center
                 rounded-full bg-white/90
                 focus-visible:outline-2
                 focus-visible:outline-coral"
    >
      <FiHeart
        className={isFavorite ? "fill-coral text-coral" : "text-gray-700"}
      />
    </button>
  );
}
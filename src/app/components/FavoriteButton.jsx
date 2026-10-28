"use client";

import { FiStar } from "react-icons/fi";
import { useFavorites } from "../store/useFavorites";

export default function FavoriteButton({ id }) {
  const isFavorite = useFavorites((state) => state.favoriteIds.includes(String(id)));
  const toggleFavorite = useFavorites((state) => state.toggleFavorite);

  return (
    <button type="button" aria-label={isFavorite ? "Remove favorite" : "Add favorite"}
      aria-pressed={isFavorite} onClick={() => toggleFavorite(id)}
      className="absolute right-2 top-2 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-white/60 text-gray-800 focus-visible:outline-2 focus-visible:outline-coral">
      <FiStar className={isFavorite ? "fill-coral text-coral" : "text-gray-800"} />
    </button>
  );
}

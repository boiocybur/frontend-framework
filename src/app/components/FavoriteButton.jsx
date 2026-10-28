"use client";

import { FiStar } from "react-icons/fi";
import { useFavorites } from "../store/useFavorites";

export default function FavoriteButton({ imageId }) {
  const isFavorite = useFavorites((state) => state.favorites.some((favorite) => favorite.image_id === imageId));
  const loading = useFavorites((state) => state.loading);
  const pending = useFavorites((state) => state.pendingIds.includes(imageId));
  const toggleFavorite = useFavorites((state) => state.toggleFavorite);

  return (
    <button type="button" aria-label={isFavorite ? "Remove favorite" : "Add favorite"}
      aria-pressed={isFavorite} disabled={!imageId || loading || pending}
      onClick={() => toggleFavorite(imageId)}
      className="absolute right-2 top-2 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-white/60 text-gray-800 disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-coral">
      <FiStar className={isFavorite ? "fill-coral text-coral" : "text-gray-800"} />
    </button>
  );
}

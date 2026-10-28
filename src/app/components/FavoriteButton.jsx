"use client";

import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { useFavorites } from "../store/useFavorites";

export default function FavoriteButton({ id, breed }) {
  const favorites = useFavorites((state) => state.favorites);
  const loading = useFavorites((state) => state.loading);
  const pendingIds = useFavorites((state) => state.pendingIds);
  const toggleFavorite = useFavorites((state) => state.toggleFavorite);

  if (!id) return null;

  const isFavorite = favorites.some((favorite) => favorite.image_id === id);

  const isPending = pendingIds.includes(id);

  return (
    <button
      type="button"
      onClick={() => toggleFavorite(id)}
      disabled={loading || isPending}
      aria-label={isFavorite ? "Remove favorite" : "Add favorite"}
      aria-pressed={isFavorite}
      title={breed}
      className="absolute top-3 right-3 z-10 cursor-pointer text-white disabled:opacity-50"
    >
      {isFavorite ? <MdFavorite size={25} /> : <MdFavoriteBorder size={25} />}
    </button>
  );
}

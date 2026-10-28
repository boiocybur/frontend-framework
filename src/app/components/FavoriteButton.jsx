
"use client";

import { useState } from "react";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import {
  addFavorite,
  removeFavorite,
} from "../actions/favorites";

export default function FavoriteButton({
  id,
  breed,
  initialFavoriteId = null,
}) {
  const [favoriteId, setFavoriteId] = useState(initialFavoriteId);
  const [isLoading, setIsLoading] = useState(false);

  const isFavorite = favoriteId !== null;

  const handleFavorite = async () => {
    if (isLoading) return;

    setIsLoading(true);

    try {
      if (isFavorite) {
        await removeFavorite(favoriteId);
        setFavoriteId(null);
      } else {
        const favorites = await addFavorite(id);

        const added = favorites.find(
          (favorite) => favorite.image_id === id
        );

        if (!added) {
          throw new Error("Favorite was not found");
        }

        setFavoriteId(added.id);
      }
    } catch (error) {
      console.error("Favorite error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleFavorite}
      disabled={isLoading}
      aria-label={
        isFavorite ? "Remove favorite" : "Add favorite"
      }
      aria-pressed={isFavorite}
      title={breed}
      className="absolute top-3 right-3 z-10 cursor-pointer text-white disabled:opacity-50"
    >
      {isFavorite ? (
        <MdFavorite size={25} />
      ) : (
        <MdFavoriteBorder size={25} />
      )}
    </button>
  );
}

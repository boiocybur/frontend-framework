"use client";

import { useState } from "react";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";

const Favorite = ({ id, breed }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const addFavorite = async () => {
    if (isLoading || isFavorite) return;

    setIsLoading(true);

    try {
      const response = await fetch("/api/favourites", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          image_id: id,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to add favorite");
      }

      setIsFavorite(true);
      console.log("Favorite added:", breed);
    } catch (error) {
      console.error("Error adding favorite:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      type="button"
      onClick={addFavorite}
      disabled={isLoading}
      aria-label={isFavorite ? "Favorite added" : "Add favorite"}
      aria-pressed={isFavorite}
      className="cursor-pointer absolute top-3 right-3 text-white disabled:opacity-50"
    >
      {isFavorite ? (
        <MdFavorite size={25} />
      ) : (
        <MdFavoriteBorder size={25} />
      )}
    </button>
  );
};

export default Favorite;

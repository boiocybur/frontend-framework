"use client";

import BreedCard from "./BreedCard";
import { useFavorites } from "../store/useFavorites";

export default function FavoritesGrid({ breeds }) {
  const favoriteIds = useFavorites((state) => state.favoriteIds);
  const selected = breeds.filter((breed) => favoriteIds.includes(String(breed.id)));
  if (selected.length === 0) {
    return <p className="text-sm text-gray-500">No favorite breeds yet. Add one using the star icon.</p>;
  }
  return (
    <div className="grid grid-cols-2 gap-4">
      {selected.map((breed) => (
        <BreedCard key={breed.id} id={breed.id} name={breed.name}
          origin={breed.origin || "Unknown"} image={breed.image.url} />
      ))}
    </div>
  );
}

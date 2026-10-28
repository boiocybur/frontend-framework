"use client";
import BreedCard from "./BreedCard";
import { useFavorites } from "../store/useFavorites";

export default function FavoritesGrid({ breeds }) {
  const favorites = useFavorites((state) => state.favorites);
  const loading = useFavorites((state) => state.loading);
  const selected = breeds.filter((breed) => favorites.some((favorite) => favorite.image_id === breed.image?.id));
  if (loading) return <p className="text-sm text-gray-500">Loading favorites...</p>;
  if (!selected.length) return <p className="text-sm text-gray-500">No favorite breeds yet. Add one using the star icon.</p>;
  return (
    <div className="grid grid-cols-2 gap-4">
      {selected.map((breed) => <BreedCard key={breed.id} id={breed.id} name={breed.name}
        origin={breed.origin || "Unknown"} image={breed.image.url} imageId={breed.image.id} />)}
    </div>
  );
}

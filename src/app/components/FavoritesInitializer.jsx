"use client";

import { useEffect } from "react";
import { useFavorites } from "../store/useFavorites";

export default function FavoritesInitializer() {
  const loadFavorites = useFavorites((state) => state.loadFavorites);
  const error = useFavorites((state) => state.error);
  useEffect(() => { loadFavorites(); }, [loadFavorites]);
  return error ? <p role="alert" className="fixed left-1/2 top-2 z-50 w-[min(90vw,420px)] -translate-x-1/2 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-800 shadow">{error}</p> : null;
}

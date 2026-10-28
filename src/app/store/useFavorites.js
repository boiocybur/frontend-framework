"use client";
import { create } from "zustand";
import { getFavorites, addFavorite, removeFavorite } from "../actions/favorites";

export const useFavorites = create((set, get) => ({
  favorites: [],
  loading: true,
  pendingIds: [],
  error: null,
  loadFavorites: async () => {
    set({ loading: true, error: null });
    try {
      set({ favorites: await getFavorites(), loading: false });
    } catch (error) {
      set({ loading: false, error: error.message || "Could not load favorites" });
    }
  },
  toggleFavorite: async (imageId) => {
    if (!imageId || get().pendingIds.includes(imageId) || get().loading) return;
    const existing = get().favorites.find((favorite) => favorite.image_id === imageId);
    set((state) => ({ pendingIds: [...state.pendingIds, imageId], error: null }));
    try {
      const favorites = existing ? await removeFavorite(existing.id) : await addFavorite(imageId);
      set({ favorites });
    } catch (error) {
      set({ error: error.message || "Could not update favorite" });
    } finally {
      set((state) => ({ pendingIds: state.pendingIds.filter((id) => id !== imageId) }));
    }
  },
}));

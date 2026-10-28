"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

// Shared state for all breed cards, the detail page, and the favorites page.
export const useFavorites = create(
  persist(
    (set) => ({
      favoriteIds: [],
      toggleFavorite: (id) => set((state) => {
        const key = String(id);
        return {
          favoriteIds: state.favoriteIds.includes(key)
            ? state.favoriteIds.filter((item) => item !== key)
            : [...state.favoriteIds, key],
        };
      }),
    }),
    { name: "family-friends-favorites" }
  )
);

"use server";

const API = "https://api.thedogapi.com/v1/favourites";

function apiKey() {
  const key = process.env.THEDOGAPI_KEY?.trim();
  if (!key) throw new Error("Missing THEDOGAPI_KEY in .env.local");
  return key;
}

async function request(path = "", options = {}) {
  const response = await fetch(`${API}${path}`, {
    ...options,
    headers: {
      "x-api-key": apiKey(),
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });
  if (!response.ok) {
    throw new Error(`The Dog API favorites request failed (${response.status})`);
  }
  if (response.status === 204) return null;
  const text = await response.text();
  return text ? JSON.parse(text) : null;
}

export async function getFavorites() {
  const result = await request();
  if (!Array.isArray(result)) throw new Error("Invalid favorites response");
  return result.map(({ id, image_id }) => ({ id, image_id }));
}

export async function addFavorite(imageId) {
  if (typeof imageId !== "string" || !/^[A-Za-z0-9_-]{1,100}$/.test(imageId)) {
    throw new Error("Invalid image ID");
  }
  await request("", { method: "POST", body: JSON.stringify({ image_id: imageId }) });
  return getFavorites();
}

export async function removeFavorite(favoriteId) {
  if (!Number.isSafeInteger(favoriteId) || favoriteId <= 0) {
    throw new Error("Invalid favorite ID");
  }
  await request(`/${favoriteId}`, { method: "DELETE" });
  return getFavorites();
}

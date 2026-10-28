"use server";

const API = "https://api.thedogapi.com/v1/favourites";

function apiKey() {
  const key = process.env.THEDOGAPI_KEY?.trim();

  if (!key) {
    throw new Error("Missing THEDOGAPI_KEY in .env.local");
  }

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
    const error = await response.text();

    throw new Error(`The Dog API error (${response.status}): ${error}`);
  }

  if (response.status === 204) return null;

  const text = await response.text();
  return text ? JSON.parse(text) : null;
}

// GET - Hent alle favoritter
export async function getFavorites() {
  const result = await request();

  if (!Array.isArray(result)) {
    throw new Error("Invalid favorites response");
  }

  return result.map(({ id, image_id }) => ({
    id,
    image_id,
  }));
}

// POST - Tilføj favorit
export async function addFavorite(imageId) {
  if (typeof imageId !== "string" || !/^[A-Za-z0-9_-]{1,100}$/.test(imageId)) {
    throw new Error("Invalid image ID");
  }

  const favorites = await getFavorites();

  const existingFavorite = favorites.find(
    (favorite) => favorite.image_id === imageId,
  );

  // Undgå dubletter
  if (existingFavorite) {
    return favorites;
  }

  try {
    await request("", {
      method: "POST",
      body: JSON.stringify({
        image_id: imageId,
      }),
    });
  } catch (error) {
    // En anden request kan have gemt samme billede
    if (!error.message.includes("DUPLICATE_FAVOURITE")) {
      throw error;
    }
  }

  return getFavorites();
}

// DELETE - Fjern favorit
export async function removeFavorite(favoriteId) {
  const id = Number(favoriteId);

  if (!Number.isSafeInteger(id) || id <= 0) {
    throw new Error("Invalid favorite ID");
  }

  await request(`/${id}`, {
    method: "DELETE",
  });

  return getFavorites();
}

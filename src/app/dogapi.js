
const API_URL = "https://api.thedogapi.com/v1";

export async function getDogBreeds() {
  const apiKey = process.env.THEDOGAPI_KEY?.trim();

  if (!apiKey) {
    throw new Error("Missing THEDOGAPI_KEY in .env.local");
  }

  const response = await fetch(`${API_URL}/breeds?limit=200`, {
    headers: {
      "x-api-key": apiKey,
      Accept: "application/json",
    },
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`TheDogAPI returned ${response.status}`);
  }

  return response.json();
}

export async function getDogBreed(id) {
  const apiKey = process.env.THEDOGAPI_KEY?.trim();

  if (!apiKey) {
    throw new Error("Missing THEDOGAPI_KEY in .env.local");
  }

  const response = await fetch(
    `${API_URL}/breeds/${encodeURIComponent(id)}`,
    {
      headers: {
        "x-api-key": apiKey,
        Accept: "application/json",
      },
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error(`TheDogAPI returned ${response.status}`);
  }

  return response.json();
}

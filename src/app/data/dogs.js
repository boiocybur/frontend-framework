// Statiske eksempeldata: ingen API-kald eller API-nøgle er nødvendig.
// Billed-URL'er er faste; billederne hostes stadig eksternt.
export const dogs = [
  {
    "id": 1,
    "name": "Affenpinscher",
    "origin": "Germany",
    "image": "https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg",
    "temperament": "Confident, Alert, Playful, Loyal, Curious",
    "life_span": "10 - 12 years",
    "weight": {
      "metric": "3 - 6"
    },
    "bred_for": "Small game hunting"
  },
  {
    "id": 2,
    "name": "Afghan Hound",
    "origin": "Afghanistan",
    "image": "https://cdn2.thedogapi.com/images/hMyT4CDXR.jpg",
    "temperament": "Aloof, Clownish, Dignified, Independent",
    "life_span": "10 - 13 years",
    "weight": {
      "metric": "23 - 27"
    },
    "bred_for": "Coursing and hunting"
  },
  {
    "id": 3,
    "name": "African Hunting Dog",
    "origin": "Sub-Saharan Africa",
    "image": "https://cdn2.thedogapi.com/images/rkiByec47.jpg",
    "temperament": "Wild, Hardworking, Dutiful",
    "life_span": "11 years",
    "weight": {
      "metric": "20 - 30"
    },
    "bred_for": "Hunting"
  },
  {
    "id": 4,
    "name": "Airedale Terrier",
    "origin": "England",
    "image": "https://cdn2.thedogapi.com/images/1-7cgoZSh.jpg",
    "temperament": "Outgoing, Friendly, Alert, Confident, Intelligent",
    "life_span": "10 - 13 years",
    "weight": {
      "metric": "18 - 29"
    },
    "bred_for": "Badger, otter hunting"
  },
  {
    "id": 5,
    "name": "Akbash Dog",
    "origin": "Turkey",
    "image": "https://cdn2.thedogapi.com/images/26pHT3Qk7.jpg",
    "temperament": "Loyal, Independent, Intelligent, Brave",
    "life_span": "10 - 12 years",
    "weight": {
      "metric": "34 - 64"
    },
    "bred_for": "Livestock guarding"
  },
  {
    "id": 6,
    "name": "Akita",
    "origin": "Japan",
    "image": "https://cdn2.thedogapi.com/images/BJT0Jx5Nm.jpg",
    "temperament": "Docile, Alert, Responsive, Dignified",
    "life_span": "10 - 14 years",
    "weight": {
      "metric": "29 - 52"
    },
    "bred_for": "Hunting bears"
  }
];

export function getDogBreed(id) {
  return dogs.find((dog) => String(dog.id) === String(id));
}

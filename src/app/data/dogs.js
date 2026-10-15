// Statiske hundedata med lokale billeder fra Figma.
// Læg de seks PNG-filer i public/dogs/.
export const dogs = [
  {
    "id": 1,
    "name": "Affenpinscher",
    "origin": "Northern, Germany",
    "image": "/dogs/affenpinscher.png",
    "temperament": "Confident, Alert, Playful, Loyal",
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
    "image": "/dogs/afghan-hound.png",
    "temperament": "Independent, Dignified, Playful, Loyal",
    "life_span": "10 - 13 years",
    "weight": {
      "metric": "23 - 27"
    },
    "bred_for": "Coursing and hunting"
  },
  {
    "id": 3,
    "name": "Airedale Terrier",
    "origin": "Yorkshire, England",
    "image": "/dogs/airedale-terrier.png",
    "temperament": "Confident, Intelligent, Courageous, Alert",
    "life_span": "10 - 13 years",
    "weight": {
      "metric": "18 - 29"
    },
    "bred_for": "Badger and otter hunting"
  },
  {
    "id": 4,
    "name": "Akbash",
    "origin": "Western Turkey",
    "image": "/dogs/akbash.png",
    "temperament": "Loyal, Independent, Intelligent, Brave",
    "life_span": "10 - 12 years",
    "weight": {
      "metric": "34 - 64"
    },
    "bred_for": "Livestock guarding"
  },
  {
    "id": 5,
    "name": "American Eskimo Dog",
    "origin": "Germany",
    "image": "/dogs/american-eskimo.png",
    "temperament": "Friendly, Alert, Intelligent, Playful",
    "life_span": "12 - 15 years",
    "weight": {
      "metric": "8 - 16"
    },
    "bred_for": "Companionship"
  },
  {
    "id": 6,
    "name": "Akita",
    "origin": "Japan",
    "image": "/dogs/akita.png",
    "temperament": "Docile, Alert, Responsive, Dignified",
    "life_span": "10 - 14 years",
    "weight": {
      "metric": "29 - 52"
    },
    "bred_for": "Hunting"
  }
];

export function getDogBreed(id) {
  return dogs.find((dog) => String(dog.id) === String(id));
}


import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import BreedCard from "./components/BreedCard";
import { getDogBreeds } from "./dogapi";

export default async function ListView() {
  // Hent hunderacer fra TheDogAPI
  const dogs = await getDogBreeds();

  // Vis kun hunde med billeder
  const dogsWithImages = dogs.filter(
    (dog) => dog.image?.url
  );

  // Del hundene op i to kolonner
  const leftColumn = dogsWithImages.filter(
    (_, index) => index % 2 === 0
  );

  const rightColumn = dogsWithImages.filter(
    (_, index) => index % 2 !== 0
  );

  return (
    <main className="mx-auto min-h-screen max-w-md bg-white pb-28">

      {/* Header */}
      <Header />

      {/* Search */}
      <section className="px-5">
        <SearchBar />
      </section>

      {/* Dog cards */}
      <section className="mt-6 px-5">
        <div className="grid grid-cols-2 items-start gap-4">

          {/* Left column */}
          <div className="flex flex-col gap-4">
            {leftColumn.map((dog, index) => (
              <BreedCard
                key={dog.id}
                id={dog.id}
                name={dog.name}
                origin={dog.origin || "Unknown"}
                image={dog.image.url}
                height={index % 2 === 0 ? 160 : 210}
              />
            ))}
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-4">
            {rightColumn.map((dog, index) => (
              <BreedCard
                key={dog.id}
                id={dog.id}
                name={dog.name}
                origin={dog.origin || "Unknown"}
                image={dog.image.url}
                height={index % 2 === 0 ? 210 : 160}
              />
            ))}
          </div>

        </div>
      </section>

    </main>
  );
}

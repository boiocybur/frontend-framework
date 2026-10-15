import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import BreedCard from "./components/BreedCard";
import { dogs } from "./data/dogs";

export default function ListView() {
  const leftColumn = dogs.filter((_, index) => index % 2 === 0);
  const rightColumn = dogs.filter((_, index) => index % 2 !== 0);

  return (
    <main className="mx-auto min-h-screen max-w-md bg-white pb-28">
      <Header />
      <section className="px-5">
        <SearchBar />
      </section>
      <section className="mt-6 px-5">
        <div className="grid grid-cols-2 items-start gap-4">
          <div className="flex flex-col gap-4">
            {leftColumn.map((dog, index) => (
              <BreedCard key={dog.id} id={dog.id} name={dog.name}
                origin={dog.origin} image={dog.image}
                height={index % 2 === 0 ? 110 : 120} />
            ))}
          </div>
          <div className="flex flex-col gap-4">
            {rightColumn.map((dog, index) => (
              <BreedCard key={dog.id} id={dog.id} name={dog.name}
                origin={dog.origin} image={dog.image}
                height={index % 2 === 0 ? 110 : 140} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

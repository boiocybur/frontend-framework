import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import BreedCard from "./components/BreedCard";
import { getDogBreeds } from "./dogapi";

export default async function ListView() {
  const dogs = (await getDogBreeds()).filter((dog) => dog.image?.url && dog.image?.id);
  const leftColumn = dogs.filter((_, index) => index % 2 === 0);
  const rightColumn = dogs.filter((_, index) => index % 2 !== 0);

  const renderColumn = (column) => column.map((dog, index) => (
    <BreedCard
      key={dog.id}
      id={dog.id}
      imageId={dog.image.id}
      name={dog.name}
      origin={dog.origin || "Unknown"}
      image={dog.image.url}
      height={index % 2 === 0 ? 110 : 140}
    />
  ));

  return (
    <main className="mx-auto min-h-screen max-w-md bg-white pb-28">
      <Header />
      <section className="px-5"><SearchBar /></section>
      <section className="mt-6 px-5">
        <div className="grid grid-cols-2 items-start gap-4">
          <div className="flex flex-col gap-4">{renderColumn(leftColumn)}</div>
          <div className="flex flex-col gap-4">{renderColumn(rightColumn)}</div>
        </div>
      </section>
    </main>
  );
}

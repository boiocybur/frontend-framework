import Header from "../../components/Header";
import FavoritesGrid from "../../components/FavoritesGrid";
import { getDogBreeds } from "../../dogapi";

export default async function FavoritesPage() {
  const breeds = await getDogBreeds();
  return (
    <main className="mx-auto min-h-screen max-w-md bg-white pb-28">
      <Header />
      <section className="px-5 pt-6">
        <h1 className="mb-6 text-2xl font-bold text-gray-800">Favorite breeds</h1>
        <FavoritesGrid breeds={breeds.filter((breed) => breed.image?.url)} />
      </section>
    </main>
  );
}

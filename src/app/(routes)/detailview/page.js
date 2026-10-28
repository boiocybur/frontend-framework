import Image from "next/image";
import Link from "next/link";
import BreedBadge from "../../components/BreedBadge";
import Header from "../../components/Header";
import { getDogBreed } from "../../dogapi";
import FavoriteButton from "../../components/FavoriteButton";

export default async function DetailView({ searchParams }) {
  const { id } = await searchParams;

  // Brug hund nr. 1, hvis der ikke er valgt en hund
  const dogId = id || "1";

  const dog = await getDogBreed(dogId);

  const traits = dog.temperament
    ? dog.temperament.split(",").map((trait) => trait.trim())
    : [];

  return (
    <main className="mx-auto min-h-screen max-w-md bg-white pb-28">
      <Header />

      {/* Dog image with buttons */}
      <div className="relative mx-5 mt-6 h-[340px] overflow-hidden rounded-[28px] bg-gray-100">
        {dog.image?.url && (
          <Image
            src={dog.image.url}
            alt={dog.name}
            fill
            sizes="(max-width: 448px) 100vw, 448px"
            className="object-cover object-[center_35%]"
            priority
          />
        )}

        {/* Back button */}
        <Link
          href="/"
          aria-label="Back to breeds"
          className="absolute left-4 top-4 z-10
               flex h-9 w-9 items-center justify-center
               rounded-full bg-white text-xl text-gray-800
               focus-visible:outline-2
               focus-visible:outline-coral"
        >
          ←
        </Link>

        {/* Favorite button */}
        <FavoriteButton id={dog.image?.id} breed={dog.name} />
        {/* Dog name overlay */}
        <div className="absolute bottom-5 left-5 rounded-full bg-white/60 px-4 py-2 backdrop-blur-sm">
          <span className="text-sm font-medium text-gray-800">{dog.name}</span>
        </div>
      </div>

      {/* Dog information */}

      <section className="px-5 py-6">
        {/* Breed name */}
        <h1 className="text-[28px] font-bold text-gray-800">{dog.name}</h1>

        {/* Personality badges */}
        <div className="mt-4 flex flex-wrap gap-2">
          {traits.slice(0, 4).map((trait, index) => {
            const colors = ["blue", "pink", "green", "yellow"];

            return (
              <BreedBadge key={trait} label={trait} color={colors[index]} />
            );
          })}
        </div>

        {/* Breed description */}
        <div className="mt-6">
          <h2 className="text-sm text-gray-400">Breed description</h2>

          <p className="mt-1 leading-relaxed text-gray-600">
            {dog.temperament
              ? `${dog.name} is known for being ${dog.temperament.toLowerCase()}.`
              : "No description available."}
          </p>
        </div>

        {/* Breed history */}
        <div className="mt-6">
          <h2 className="text-sm text-gray-400">Breed history</h2>

          <p className="mt-1 leading-relaxed text-gray-600">
            {dog.name} originates from {dog.origin || "an unknown region"}.
            {dog.bred_for
              ? ` This breed was originally bred for ${dog.bred_for.toLowerCase()}.`
              : ""}
          </p>
        </div>

        {/* Additional information */}
        <div className="mt-8 grid grid-cols-2 gap-4">
          <div className="rounded-2xl bg-pastel-blue p-4">
            <p className="text-sm text-gray-600">Life span</p>
            <p className="font-semibold text-gray-800">
              {dog.life_span || "Unknown"}
            </p>
          </div>

          <div className="rounded-2xl bg-pastel-pink p-4">
            <p className="text-sm text-gray-600">Weight</p>
            <p className="font-semibold text-gray-800">
              {dog.weight?.metric ? `${dog.weight.metric} kg` : "Unknown"}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

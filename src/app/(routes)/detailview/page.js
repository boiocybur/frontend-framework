import Image from "next/image";
import Link from "next/link";
import BreedBadge from "../../components/BreedBadge";
import { getDogBreed } from "../../dogapi";

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
      {/* Back button */}
      <div className="px-5 py-6">
        <Link
          href="/"
          className="rounded-lg text-coral focus-visible:outline-2"
        >
          ← Back
        </Link>
      </div>

      {/* Dog image */}
      <div className="relative mx-5 h-[350px] overflow-hidden rounded-3xl bg-gray-100">
        {dog.image?.url && (
          <Image
            src={dog.image.url}
            alt={dog.name}
            fill
            sizes="(max-width: 448px) 100vw, 448px"
            className="object-cover object-[center_35%]"
          />
        )}
      </div>

      {/* Dog information */}
      <section className="px-5 py-6">
        <h1 className="text-3xl font-bold">{dog.name}</h1>

        <p className="mt-2 text-gray-500">{dog.origin || "Unknown origin"}</p>

        {/* Information cards */}
        <div className="mt-6 grid grid-cols-2 gap-4">
          <div className="rounded-2xl bg-pastel-blue p-4">
            <p className="text-sm">Life span</p>
            <p className="font-semibold">{dog.life_span || "Unknown"}</p>
          </div>

          <div className="rounded-2xl bg-pastel-pink p-4">
            <p className="text-sm">Weight</p>
            <p className="font-semibold">
              {dog.weight?.metric ? `${dog.weight.metric} kg` : "Unknown"}
            </p>
          </div>
        </div>

        {/* Personality */}
        <h2 className="mt-8 text-xl font-bold text-gray-800">Personality</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {traits.length > 0 ? (
            traits.map((trait, index) => {
              const colors = ["blue", "pink", "green", "yellow"];
              return (
                <BreedBadge
                  key={trait}
                  label={trait}
                  color={colors[index % colors.length]}
                />
              );
            })
          ) : (
            <p className="text-gray-500">
              No personality information available.
            </p>
          )}
        </div>

        {/* About */}
        <h2 className="mt-8 text-xl font-bold">Bred for</h2>

        <p className="mt-2 text-gray-600">
          {dog.bred_for || "No information available."}
        </p>
      </section>
    </main>
  );
}

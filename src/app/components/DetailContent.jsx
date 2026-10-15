"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import BreedBadge from "./BreedBadge";
import Header from "./Header";
import FavoriteButton from "./FavoriteButton";
import { getDogBreed } from "../data/dogs";

export default function DetailContent() {
  const searchParams = useSearchParams();
  const dog = getDogBreed(searchParams.get("id") || "1");

  if (!dog) {
    return (
      <main className="mx-auto max-w-md p-5">
        <Header />
        <p className="mt-8 text-gray-700">Breed not found.</p>
        <Link href="/" className="mt-4 inline-block text-coral underline">Back to breeds</Link>
      </main>
    );
  }

  const traits = dog.temperament ? dog.temperament.split(",").map((trait) => trait.trim()) : [];
  const colors = ["blue", "pink", "green", "yellow"];

  return (
    <main className="mx-auto min-h-screen max-w-md bg-white pb-28">
      <Header />
      <div className="relative mx-5 mt-6 h-[340px] overflow-hidden rounded-[28px] bg-gray-100">
        <Image src={dog.image} alt={dog.name} fill
          sizes="(max-width: 448px) 100vw, 448px"
          className="object-cover object-[center_35%]" priority />
        <Link href="/" aria-label="Back to breeds"
          className="absolute left-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white text-xl text-gray-800 focus-visible:outline-2 focus-visible:outline-coral">←</Link>
        <FavoriteButton />
        <div className="absolute bottom-5 left-5 rounded-full bg-white/60 px-4 py-2 backdrop-blur-sm">
          <span className="text-sm font-medium text-gray-800">{dog.name}</span>
        </div>
      </div>
      <section className="px-5 py-6">
        <h1 className="text-[28px] font-bold text-gray-800">{dog.name}</h1>
        <div className="mt-4 flex flex-wrap gap-2">
          {traits.slice(0, 4).map((trait, index) => (
            <BreedBadge key={trait} label={trait} color={colors[index]} />
          ))}
        </div>
        <div className="mt-6">
          <h2 className="text-sm text-gray-400">Breed description</h2>
          <p className="mt-1 leading-relaxed text-gray-600">
            {dog.name} is known for being {dog.temperament.toLowerCase()}.
          </p>
        </div>
        <div className="mt-6">
          <h2 className="text-sm text-gray-400">Breed history</h2>
          <p className="mt-1 leading-relaxed text-gray-600">
            {dog.name} originates from {dog.origin}.
            {dog.bred_for ? ` This breed was originally bred for ${dog.bred_for.toLowerCase()}.` : ""}
          </p>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-4">
          <div className="rounded-2xl bg-pastel-blue p-4">
            <p className="text-sm text-gray-600">Life span</p>
            <p className="font-semibold text-gray-800">{dog.life_span}</p>
          </div>
          <div className="rounded-2xl bg-pastel-pink p-4">
            <p className="text-sm text-gray-600">Weight</p>
            <p className="font-semibold text-gray-800">{dog.weight.metric} kg</p>
          </div>
        </div>
      </section>
    </main>
  );
}

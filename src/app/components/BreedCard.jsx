import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "./FavoriteButton";

export default function BreedCard({ id, name, origin, image, height = 160 }) {
  return (
    <article className="breed-card relative">
      <div className="relative">
        <Link
          href={`/detailview?id=${id}`}
          className="block focus-visible:outline-2
                     focus-visible:outline-coral"
        >
          <div
            className="relative overflow-hidden rounded-2xl"
            style={{ height: `${height}px` }}
          >
            <Image
              src={image}
              alt={name}
              fill
              sizes="(max-width: 640px) 50vw, 180px"
              className="object-cover"
            />
          </div>

          <div className="p-3">
            <h2 className="font-semibold">{name}</h2>
            <p className="text-sm text-gray-400">{origin}</p>
          </div>
        </Link>

        <FavoriteButton />
      </div>
    </article>
  );
}

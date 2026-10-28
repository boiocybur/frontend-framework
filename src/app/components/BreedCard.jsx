import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "./FavoriteButton";

export default function BreedCard({ id, name, origin, image, height = 110 }) {
  const imageHeights = { 110: "h-[110px]", 120: "h-[120px]", 140: "h-[140px]", 160: "h-40" };
  return (
    <article className="breed-card relative min-w-0">
      <Link href={`/detailview?id=${id}`} className="block rounded-2xl focus-visible:outline-2 focus-visible:outline-coral">
        <div className={`relative overflow-hidden rounded-2xl bg-gray-100 ${imageHeights[height] || imageHeights[110]}`}>
          <Image src={image} alt={name} fill sizes="(max-width: 448px) 50vw, 180px" className="object-cover" />
        </div>
        <div className="px-2.5 py-3">
          <h2 className="wrap-break-word text-sm font-semibold leading-tight text-gray-800">{name}</h2>
          <p className="mt-1 text-xs leading-tight text-gray-400">{origin}</p>
        </div>
      </Link>
      <FavoriteButton imageId={id} />
    </article>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "./FavoriteButton";

export default function BreedCard({ id, imageId, name, origin, image, height = 110 }) {
  const [imageFailed, setImageFailed] = useState(false);
  const imageHeights = { 110: "h-[110px]", 120: "h-[120px]", 140: "h-[140px]", 160: "h-40" };
  const validImage = typeof image === "string" && image.startsWith("https://");

  return (
    <article className="breed-card relative min-w-0">
      <Link href={`/detailview?id=${id}`} className="block rounded-2xl focus-visible:outline-2 focus-visible:outline-coral">
        <div className={`relative overflow-hidden rounded-2xl bg-gray-100 ${imageHeights[height] || imageHeights[110]}`}>
          {validImage && !imageFailed ? (
            <Image src={image} alt={name} fill unoptimized
              sizes="(max-width: 448px) 50vw, 180px" className="object-cover"
              onError={() => setImageFailed(true)} />
          ) : (
            <div className="flex h-full items-center justify-center px-2 text-center text-xs text-gray-500">
              Image unavailable
            </div>
          )}
        </div>
        <div className="px-2.5 py-3">
          <h2 className="wrap-break-word text-sm font-semibold leading-tight text-gray-800">{name}</h2>
          <p className="mt-1 text-xs leading-tight text-gray-400">{origin}</p>
        </div>
      </Link>
      {imageId && <FavoriteButton id={imageId} breed={name} />}
    </article>
  );
}

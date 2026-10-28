"use client";

import { useEffect } from "react";
import { useFavorites } from "../store/useFavorites";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiHome, FiHeart, FiSearch, FiUser } from "react-icons/fi";

export default function BottomNavigation() {
  const pathname = usePathname();
  useEffect(() => { useFavorites.persist.rehydrate(); }, []);
  const navigation = [
    { name: "Home", href: "/", icon: FiHome },
    { name: "Search", href: "/#search", icon: FiSearch },
    { name: "Favorites", href: "/favorites", icon: FiHeart },
    { name: "Profile", href: "/#profile", icon: FiUser },
  ];
  return (
    <nav aria-label="Main navigation"
      className="fixed bottom-0 left-0 z-50 w-full bg-white/95 shadow-[0_-8px_30px_rgba(0,0,0,0.08)] backdrop-blur-md pb-[env(safe-area-inset-bottom)]">
      <div className="mx-auto flex max-w-md items-center justify-around px-4 py-4">
        {navigation.map((item) => {
          const Icon = item.icon;
          const isActive = item.href === "/" ? pathname === "/" : pathname === item.href;
          return (
            <Link key={item.name} href={item.href} aria-label={item.name}
              aria-current={isActive ? "page" : undefined}
              className={`flex flex-col items-center gap-1 rounded-lg px-3 py-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral ${isActive ? "text-coral" : "text-gray-400"}`}>
              <Icon className="text-2xl" />
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

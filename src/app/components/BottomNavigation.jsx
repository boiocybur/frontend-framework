
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FiHome,
  FiHeart,
  FiSearch,
  FiUser,
} from "react-icons/fi";

export default function BottomNavigation() {
  const pathname = usePathname();

  const navigation = [
    { name: "Home", href: "/", icon: FiHome },
    { name: "Search", href: "/#search", icon: FiSearch },
    { name: "Favorites", href: "/#favorites", icon: FiHeart },
    { name: "Profile", href: "/#profile", icon: FiUser },
  ];

  return (
    <nav
      aria-label="Main navigation"
      className="fixed bottom-0 left-0 z-50 w-full
                 border-t border-gray-100 bg-white
                 pb-[env(safe-area-inset-bottom)]"
    >
      <div className="mx-auto flex max-w-md items-center justify-around px-4 py-4">
        {navigation.map((item) => {
          const Icon = item.icon;
          const isActive =
            item.href === "/"
              ? pathname === "/"
              : false;

          return (
            <Link
              key={item.name}
              href={item.href}
              aria-label={item.name}
              aria-current={isActive ? "page" : undefined}
              className={`flex flex-col items-center gap-1
                rounded-lg px-3 py-1
                focus-visible:outline-2
                focus-visible:outline-offset-2
                focus-visible:outline-coral
                ${
                  isActive
                    ? "text-coral"
                    : "text-gray-400"
                }`}
            >
              <Icon className="text-2xl" />
              <span className="text-xs">
                {item.name}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

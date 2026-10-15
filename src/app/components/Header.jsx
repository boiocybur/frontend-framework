import Logo from "./Logo";
import { FiBell } from "react-icons/fi";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-5 py-6">
      <Logo />

      <button
        type="button"
        aria-label="Notifications"
        className="text-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-coral"
      >
        <FiBell />
      </button>
    </header>
  );
}

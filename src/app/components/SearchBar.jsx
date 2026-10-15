import { FiSearch } from "react-icons/fi";

export default function SearchBar() {
  return (
    <form
      role="search"
      className="flex items-center gap-3"
    >
      <button
        type="submit"
        aria-label="Search breeds"
        className="flex h-12 w-12 shrink-0 items-center
                   justify-center rounded-full bg-coral
                   text-white text-2xl
                   focus-visible:outline-2
                   focus-visible:outline-offset-2"
      >
        <FiSearch />
      </button>

      <input
        type="search"
        name="breed"
        placeholder="search breeds"
        aria-label="Search dog breeds"
        className="min-w-0 flex-1 rounded-full
                   border border-gray-300
                   px-5 py-3 text-sm
                   outline-none
                   focus:border-coral"
      />
    </form>
  );
}
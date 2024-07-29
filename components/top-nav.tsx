import { SearchForm } from "@/components/search-form";

export const TopNav = () => {
  return (
    <nav className="mx-auto hidden h-24 w-full max-w-7xl items-center justify-between gap-x-6 p-6 sm:flex lg:px-8">
      <h1 className="text-2xl font-bold">Pet Finder</h1>
      <SearchForm />
    </nav>
  );
};

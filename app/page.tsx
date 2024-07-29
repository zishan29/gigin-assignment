import { PetList } from "@/components/pet-list";
import { TopNav } from "@/components/top-nav";
import { fetchPets } from "@/services/api";
import { Suspense } from "react";
import { PaginationControls } from "@/components/pagination-controls";
import { calculateTotalPages } from "@/lib/utils";
import { PulseLoader } from "react-spinners";

export const dynamic = "force-dynamic";

export default async function Home({
  searchParams,
}: {
  searchParams: {
    animal?: string;
    breed?: string;
    location?: string;
    page?: string;
  };
}) {
  const { animal, breed, location, page } = searchParams;
  const data = await fetchPets(
    page ? parseInt(page, 10) : 1,
    animal,
    breed,
    location
  );

  const totalPages = calculateTotalPages(data);

  return (
    <>
      <main className="flex flex-col">
        <TopNav />
        <div className="mx-auto h-full w-full max-w-7xl flex-col items-center justify-between gap-x-6 p-6 sm:flex lg:px-8">
          <Suspense fallback={<PulseLoader />}>
            <PetList pets={data?.pets!} />
          </Suspense>
          <div className="flex w-full max-w-7xl justify-between py-4">
            <PaginationControls totalPages={totalPages} />
          </div>
        </div>
      </main>
    </>
  );
}

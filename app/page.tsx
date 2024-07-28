"use client";

import { useState } from "react";
import { PetList } from "@/components/pet-list";
import { TopNav } from "@/components/top-nav";
import { fetchPets } from "@/services/api";
import { useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { PulseLoader } from "react-spinners";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [animal, setAnimal] = useState("dog");
  const [breed, setBreed] = useState("");
  const [page, setPage] = useState(1);
  const { isLoading, data, isFetching } = useQuery({
    queryKey: ["pets", animal, breed, page],
    queryFn: () => fetchPets(animal, breed, page),
  });

  console.log(data);

  const goToNextPage = () => {
    if (data?.hasNext) {
      setPage((prev) => prev + 1);
    } else {
      toast("You are at the end of the list!");
    }
  };
  const goToPreviousPage = () => setPage((prev) => Math.max(1, prev - 1));

  const handleAnimalChange = (animal: string) => {
    setPage(1);
    setAnimal(animal);
    setBreed("");
  };

  const handleBreedChange = (breed: string) => {
    setPage(1);
    setBreed(breed);
  };
  return (
    <>
      <Toaster />
      <main className="flex flex-col gap-4">
        <TopNav
          handleAnimalChange={handleAnimalChange}
          animal={animal}
          handleBreedChange={handleBreedChange}
          breed={breed}
        />
        <div className="mx-auto h-full w-full max-w-7xl flex-col items-center justify-between gap-x-6 p-6 sm:flex lg:px-8">
          <div>
            {isLoading || isFetching ? (
              <PulseLoader />
            ) : (
              <PetList pets={data?.pets!} />
            )}
          </div>
          <div className="flex w-full max-w-7xl justify-between">
            <Button onClick={goToPreviousPage}>Prev</Button>
            <Button onClick={goToNextPage}>Next</Button>
          </div>
        </div>
      </main>
    </>
  );
}

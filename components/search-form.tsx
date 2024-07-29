"use client";

import { Combobox } from "@/components/ui/combobox";
import { Input } from "@/components/ui/input";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { formatData } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import { fetchAllAnimals, fetchBreedsByAnimal } from "@/services/api";

export const SearchForm = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const animal = searchParams.get("animal") || "";
  const breed = searchParams.get("breed") || "";
  const location = searchParams.get("location") || "";

  const animals = useQuery({
    queryKey: ["animals"],
    queryFn: () => fetchAllAnimals(),
  });

  const breeds = useQuery({
    queryKey: ["breeds", animal],
    queryFn: () => fetchBreedsByAnimal(animal),
    enabled: animal !== "",
  });

  const animalsData = formatData(animals.data?.animals!);
  const breedsData = formatData(breeds.data?.breeds!);

  function handleParamChange(param: string, value: string) {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set(param, value);
    } else {
      params.delete(param);
    }

    if (param === "animal") {
      params.set("page", "1");
      params.delete("breed");
    } else {
      params.set("page", "1");
    }

    replace(`${pathname}?${params.toString()}`);
  }

  const handleAnimalChange = (newAnimal: string) =>
    handleParamChange("animal", newAnimal);
  const handleBreedChange = (newBreed: string) =>
    handleParamChange("breed", newBreed);
  const handleLocationChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    handleParamChange("location", event.target.value);

  return (
    <div className="flex gap-4">
      <Combobox
        data={animals.isLoading ? [] : animalsData!}
        handleChange={handleAnimalChange}
        value={animal!}
        selectString={animals.isFetching ? "Loading..." : "Select animal..."}
        searchString="Search animal..."
        emptyString="No animal found."
      />

      <Combobox
        data={breeds.isLoading || breeds.data === undefined ? [] : breedsData!}
        handleChange={handleBreedChange}
        value={breed!}
        selectString={breeds.isFetching ? "Loading..." : "Select breed..."}
        searchString="Search breed..."
        emptyString={
          breeds.data === undefined ? "Select animal first." : "No breed found."
        }
      />
      <Input
        type="text"
        placeholder="Search location..."
        onChange={handleLocationChange}
        value={location}
      />
    </div>
  );
};

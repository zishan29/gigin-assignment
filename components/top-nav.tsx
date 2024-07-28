import { Combobox } from "@/components/ui/combobox";
import { useQuery } from "@tanstack/react-query";
import { fetchAllAnimals, fetchBreedsByAnimal } from "@/services/api";
import { formatData } from "@/lib/utils";
import { Input } from "@/components/ui/input";

interface TopNavProps {
  handleAnimalChange: (animal: string) => void;
  animal: string;
  handleBreedChange: (breed: string) => void;
  breed: string;
}

export const TopNav = ({
  handleAnimalChange,
  animal,
  handleBreedChange,
  breed,
}: TopNavProps) => {
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

  return (
    <nav className="mx-auto hidden h-24 w-full max-w-7xl items-center justify-between gap-x-6 p-6 sm:flex lg:px-8">
      <h1 className="text-2xl font-bold">Pet Finder</h1>
      <div className="flex gap-4">
        <Combobox
          data={animals.isLoading ? [] : animalsData!}
          handleChange={handleAnimalChange}
          value={animal}
          selectString="Select animal..."
          searchString="Search animal..."
          emptyString="No animal found."
        />

        <Combobox
          data={
            breeds.isLoading || breeds.data === undefined ? [] : breedsData!
          }
          handleChange={handleBreedChange}
          value={breed}
          selectString={breeds.isFetching ? "Loading..." : "Select breed..."}
          searchString="Search breed..."
          emptyString={
            breeds.data === undefined
              ? "Select animal first."
              : "No breed found."
          }
        />
        <Input type="text" placeholder="Search location..." />
      </div>
    </nav>
  );
};

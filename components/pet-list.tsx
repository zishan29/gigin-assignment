import { PetResponse } from "@/types";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export const PetList = ({ pets }: { pets: PetResponse[] }) => {
  return (
    <div className="grid gap-4 w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {pets.length === 0 && <p>No pets found</p>}
      {pets.map((pet) => (
        <Link href={`/${pet.animal}/${pet.id}`} key={pet.id}>
          <Card className="cursor-pointer transition-shadow hover:shadow-lg">
            <CardHeader className="text-center">
              <h2 className="text-2xl font-bold">{pet.name}</h2>
            </CardHeader>
            <CardContent>
              <Image
                src={pet.images[0]}
                width={500}
                height={500}
                alt={pet.name}
              />
            </CardContent>
            <CardFooter className="flex flex-col">
              <p>
                {pet.animal} · {pet.breed}
              </p>
              <p>
                {pet.city} · {pet.state}
              </p>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  );
};

import { PetResponse } from "@/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";

export const PetList = ({ pets }: { pets: PetResponse[] }) => {
  if (pets.length === 0) {
    return (
      <div className="flex items-center justify-center gap-x-2 text-lg">
        <ExclamationTriangleIcon className="h-5 w-5" /> No pets found
      </div>
    );
  }

  return (
    <div className="grid gap-4 w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
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

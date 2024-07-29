"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchPetById } from "@/services/api";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import { PulseLoader } from "react-spinners";
import { ArrowLeft } from "lucide-react";

const PetDetailPage = ({
  params,
}: {
  params: { animal: string; id: string };
}) => {
  const { animal, id } = params;

  const { data, isLoading } = useQuery({
    queryKey: ["pet", animal, id],
    queryFn: () => fetchPetById(id as string),
  });

  if (isLoading) {
    return (
      <div className="mx-auto h-full w-full max-w-7xl flex-col items-center justify-center gap-x-6 p-6 sm:flex lg:px-8 gap-y-4">
        <PulseLoader />
      </div>
    );
  }

  if (!data?.pets[0]) {
    return (
      <div className="mx-auto h-full w-full max-w-7xl flex-col items-center justify-between gap-x-6 p-6 sm:flex lg:px-8">
        {animal} with id:{id} does not exist
      </div>
    );
  }

  return (
    <div className="mx-auto h-full w-full max-w-7xl flex-col items-center justify-between gap-x-6 p-6 sm:flex lg:px-8">
      <div className="flex gap-x-1 items-center w-full text-xs py-2">
        <ArrowLeft className="w-4 h-4" />
        <Link className="text-start cursor-pointer" href={`/?animal=${animal}`}>
          Back to homepage
        </Link>
      </div>
      <div className="w-full flex gap-6 lg:gap-20 flex-col lg:flex-row items-center justify-center">
        <div>
          <Carousel className="lg:w-[600px] h-auto">
            <CarouselContent>
              {data?.pets[0].images.map((image, index) => (
                <CarouselItem key={id + " " + index}>
                  <Image
                    className=""
                    src={image}
                    width={600}
                    height={600}
                    alt={animal}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        <div className="flex flex-col gap-y-4 overflow-hidden break-words">
          <div className="flex flex-col text-start w-full">
            <p className="text-2xl font-semibold text-start w-full">
              My name is
            </p>
            <p className="text-9xl font-bold text-start w-full">
              {data?.pets[0].name.toLocaleUpperCase()}!
            </p>
          </div>
          <p className="text-3xl font-semibold text-start w-full">
            {data?.pets[0].breed}
          </p>
          <div className="flex flex-col text-start w-full">
            <p className="text-xs">Currently located at</p>
            <p>
              {data?.pets[0].city} · {data?.pets[0].state}
            </p>
          </div>
          <div className="flex flex-col text-start w-full">
            <p className="font-semibold text-xl">About me</p>
            <p>{data?.pets[0].description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetDetailPage;

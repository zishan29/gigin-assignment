"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchPetById } from "@/services/api";

const PetDetailPage = ({
  params,
}: {
  params: { animal: string; id: string };
}) => {
  const { animal, id } = params;

  const { data } = useQuery({
    queryKey: ["pet", animal, id],
    queryFn: () => fetchPetById(id as string),
  });

  return (
    <main>
      <div>
        <h1>Pet Detail Page</h1>
        <p>Animal: {animal}</p>
        <p>ID: {id}</p>
        {/* Render pet details here */}
      </div>
    </main>
  );
};

export default PetDetailPage;

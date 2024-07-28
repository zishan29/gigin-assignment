import { PetResponse } from "@/types";

export const PetList = ({ pets }: { pets: PetResponse[] }) => {
  return (
    <div>
      {pets.length === 0 && <p>No pets found</p>}
      {pets.map((pet) => (
        <div key={pet.id}>
          <h3>{pet.name}</h3>
          <p>{pet.breed}</p>
        </div>
      ))}
    </div>
  );
};

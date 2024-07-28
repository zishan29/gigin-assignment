export interface PetResponse {
  id: number;
  name: string;
  animal: string;
  city: string;
  state: string;
  description: string;
  breed: string;
  images: string[];
}

export interface BreedsResponse {
  animal: string;
  breeds: string[];
}

export interface ApiResponse {
  numberOfResults: number;
  startIndex: number;
  endIndex: number;
  hasNext: boolean;
  pets: PetResponse[];
}

export interface AnimalsResponse {
  animals: string[];
}

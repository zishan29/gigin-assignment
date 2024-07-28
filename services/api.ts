import axios from "axios";
import {
  AnimalsResponse,
  ApiResponse,
  BreedsResponse,
  PetResponse,
} from "@/types";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const fetchPets = async (
  animal: string | undefined = undefined,
  breed: string | undefined = undefined,
  page: number | undefined = 1
): Promise<ApiResponse> => {
  page = page > 1 ? page : undefined;
  const response = await axios.get(`${API_BASE_URL}/pets`, {
    params: {
      animal,
      breed,
      page,
    },
  });
  console.log(response);
  return response.data;
};

export const fetchPetById = async (id: number): Promise<PetResponse> => {
  const response = await axios.get(`${API_BASE_URL}/pets`, {
    params: {
      id,
    },
  });
  return response.data;
};

export const fetchBreedsByAnimal = async (
  animal: string
): Promise<BreedsResponse> => {
  const response = await axios.get(`${API_BASE_URL}/breeds`, {
    params: {
      animal,
    },
  });
  return response.data;
};

export const fetchAllAnimals = async (): Promise<AnimalsResponse> => {
  const response = await axios.get(`${API_BASE_URL}/animals`);
  return response.data;
};

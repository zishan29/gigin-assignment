import axios from "axios";
import { AnimalsResponse, ApiResponse, BreedsResponse } from "@/types";
import { wrapInQuotes } from "@/lib/utils";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const fetchPets = async (
  page: number | undefined = 1,
  animal: string | undefined = undefined,
  breed: string | undefined = undefined,
  location: string | undefined = undefined
): Promise<ApiResponse> => {
  page = page > 1 ? page : undefined;
  const response = await axios.get(`${API_BASE_URL}/pets`, {
    params: {
      animal,
      breed,
      location: wrapInQuotes(location),
      page,
    },
  });
  return response.data;
};

export const fetchPetById = async (id: string): Promise<ApiResponse> => {
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

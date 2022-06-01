import { apiPokemons } from "../api";
import { PokemonFull } from "../interfaces";

export const getPokemonInfo = async (identifier: string) => {
  try {
    const { data } = await apiPokemons.get<PokemonFull>(
      `/pokemon/${identifier}`
    );

    return {
      id: data.id,
      name: data.name,
      sprites: data.sprites,
      types: data.types,
      abilities: data.abilities,
      weight: data.weight,
      height: data.height,
      base_experience: data.base_experience,
    };
  } catch (error) {
    return null;
  }
};

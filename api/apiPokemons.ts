import axios from "axios";

export const apiPokemons = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
});
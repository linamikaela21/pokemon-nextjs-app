export interface PokemonsListResponse {
  count: number;
  next?: string;
  previous?: string;
  results: EachPokemon[];
}

export interface EachPokemon {
  name: string;
  url: string;
  id: number;
  img: string;
}

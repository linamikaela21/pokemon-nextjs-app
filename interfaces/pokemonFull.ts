export interface PokemonFull {
  abilities: Ability[];
  base_experience: number;
  height: number;
  held_items: any[];
  id: number;
  name: string;
  order: number;
  past_types: any[];
  species: Species;
  sprites: Sprites;
  types: Type[];
  weight: number;
}

export interface Ability {
  ability: Species;
}

export interface Species {
  name: string;
  url: string;
}

export interface Versions {
  "generation-vi": { [key: string]: Home };
}

export interface Sprites {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
  other?: Other;
}

export interface Home {
  front_default: string;
  front_shiny: string;
}

export interface DreamWorld {
  front_default: string;
  front_female: null;
}

export interface Other {
  dream_world: DreamWorld;
}

export interface Type {
  type: Species;
}

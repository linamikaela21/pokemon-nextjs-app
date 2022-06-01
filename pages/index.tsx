import { GetStaticProps, NextPage } from "next";
import { EachPokemon, PokemonsListResponse } from "../interfaces";
import { Layout } from "../components/layout";
import { apiPokemons } from "../api";
import { Grid } from "@nextui-org/react";
import { PokemonCard } from "../components/pokemon";
import Image from "next/image";

interface Props {
  pokemons: EachPokemon[];
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
  return (
    <Layout title="Pokémon's List">
      <Image
        alt="Pokemon Banner"
        src="/img/banner.png"
        width={1400}
        height={200}
      />
      <Grid.Container gap={2} justify="flex-start">
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </Grid.Container>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (_context) => {
  const { data } = await apiPokemons.get<PokemonsListResponse>(
    "/pokemon?limit=300"
  );

  const pokemons: EachPokemon[] = data?.results.map((pok, i) => ({
    ...pok,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
      i + 1
    }.svg`,
  }));

  return {
    props: {
      pokemons,
    },
  };
};

export default HomePage;

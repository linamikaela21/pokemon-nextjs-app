import { Layout } from "../../components/layout";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { apiPokemons } from "../../api";
import { PokemonFull, PokemonsListResponse } from "../../interfaces";
import { PokemonDetailsCard } from "../../components/pokemon";
import { getPokemonInfo } from "../../utils";

interface Props {
  pokemon: PokemonFull;
}

const PokemonByNamePage: NextPage<Props> = ({ pokemon }) => {
  return (
    <Layout title={pokemon.name}>
      <PokemonDetailsCard pokemon={pokemon} />
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async (_ctx) => {
  const { data } = await apiPokemons.get<PokemonsListResponse>(
    `/pokemon?limit=300`
  );

  const pokemonsParamsName = data.results?.map((pokemon) => `${pokemon.name}`);

  return {
    paths: pokemonsParamsName.map((name) => ({ params: { name } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { name } = params as { name: string };

  const pokemon = await getPokemonInfo(name);

  if (!pokemon) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      pokemon
    },
    revalidate: 86400,
  };
};

export default PokemonByNamePage;

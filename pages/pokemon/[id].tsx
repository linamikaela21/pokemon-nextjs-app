import { Layout } from "../../components/layout";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { PokemonFull } from "../../interfaces";
import { PokemonDetailsCard } from "../../components/pokemon";
import { getPokemonInfo } from "../../utils";

interface Props {
  pokemon: PokemonFull;
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {
  return (
    <Layout title={pokemon.name}>
      <PokemonDetailsCard pokemon={pokemon} />
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async (_ctx) => {
  const pokemonsParamsId = [...Array(300)].map((_value, i) => `${i + 1}`);

  return {
    paths: pokemonsParamsId.map((id) => ({ params: { id } })),
    //fallback: false, => Para que solo busque los x id que le mando
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };

  const pokemon = await getPokemonInfo(id);

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
      pokemon,
    },
    revalidate: 86400,
  };
};

export default PokemonPage;

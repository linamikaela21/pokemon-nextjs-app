import { useEffect, useState } from "react";
import { NextPage } from "next";
import { Layout } from "../../components/layout";
import { pokemonsIDs } from "../../utils";
import { NoFavorites } from "../../components/ui";
import { FavoritePokemons } from "../../components/pokemon";

const FavoritesPage: NextPage = () => {
  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePokemons(pokemonsIDs());
  }, []);
    
  return (
    <Layout title="Favorites Pokemons">
      {favoritePokemons.length === 0 ? (
        <NoFavorites />
      ) : (
        <FavoritePokemons pokemons={favoritePokemons} />
      )}
    </Layout>
  );
};

export default FavoritesPage;

/*
usePokemonData, que faz uma consulta à API, mapeia os resultados para retornar apenas nomes e URLs de imagens dos Pokémon, 
e então retorna esses dados. 
Essa função é usada para obter os dados dos Pokémon em um formato adequado para serem exibidos em um componente React.
*/

import { useQuery } from "react-query";
import { PokeDexApi } from "../../api/pokeDexApi";
import config from "../../config";
import { PokemonDataType } from "../../types/pokemonTypes";

export const usePokemonData = (offset: number) => {
  return useQuery<PokemonDataType[]>(
    [config.ReactQueryConst.pokemonData, offset],
    async () => {
      const pokemonResponse = await new PokeDexApi().getPokemonData(offset);

      return pokemonResponse.results.map(
        (pokemon: PokemonDataType, index: number) => {
          const pokemonNumber = offset + index + 1;

          return {
            name: pokemon.name,
            image: `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemonNumber
              .toString()
              .padStart(3, "0")}.png`,
          };
        },
      );
    },
  );
};

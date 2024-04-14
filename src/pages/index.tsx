import { useState } from "react";
import { usePokemonData } from "../services/hookServices/usePokemonData";
import { PokemonDataType } from "../types/pokemonTypes";

export default function PokedexPage() {
  const [offset, setOffset] = useState(0);

  const { isLoading, data } = usePokemonData(offset);

  const loadNextPokemons = () => {
    setOffset((prevOffset) => prevOffset + 20);
  };

  const loadPreviousPokemons = () => {
    setOffset((prevOffset) => Math.max(prevOffset - 20, 0));
  };

  return (
    <div>
      <h1>Pokédex</h1>
      <div>
        <button onClick={loadPreviousPokemons}>Previous</button>
        <button onClick={loadNextPokemons}>Next</button>
      </div>
      {isLoading && <div>Loading...</div>}
      {!isLoading && !data && <div>No data available</div>}
      {data && (
        <div>
          {data.map((pokemon: PokemonDataType, index) => (
            <div key={index}>
              <img src={pokemon.image} alt={pokemon.name} />
              <p>{pokemon.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

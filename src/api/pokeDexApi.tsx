/*
Este arquivo contém a definição da classe PokeDexApi, que é responsável por lidar com as chamadas para a API da Pokédex. 
Ele usa o pacote Axios para fazer requisições HTTP para a API. 
O método getPokemonData é usado para buscar os dados dos Pokémon na API.
*/

import axios from "axios";
import config from "../config";

export class PokeDexApi {
  private url = config.apiUrl;

  async getPokemonData(offset: number) {
    const response = await axios.get(
      `${this.url}/pokemon?offset=${offset}&limit=20`,
    );
    return response.data;
  }
}

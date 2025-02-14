import { ApiResponse, CharacterResult } from "@/infrastructure/interfaces/characters-response";
import { charactersApi } from "../api/characters";
import { characterMapper } from "@/infrastructure/mappers/character.mapper";


export const characterActions = async() => {
    try {
        const response = await charactersApi.get<ApiResponse<CharacterResult>>('/characters')

        // Verifica que la respuesta tenga datos
        if (!response.data || !response.data.results) {
            throw new Error('No data received from the API');
        }
    
        // Mapea los resultados
        const characters = response.data.results.map(characterMapper.fromResponseToDomain);
    
        // Verifica que el mapeo haya funcionado
        if (!characters || characters.length === 0) {
            throw new Error('Failed to map characters');
        }
  
      return characters;
    } catch (error) {
        console.log(error);
        throw 'Cannot load characters'; 
    }
}
import { ApiResponse, TitanResult } from "@/infrastructure/interfaces/characters-response";
import { charactersApi } from "../api/characters";
import { titanMapper } from "@/infrastructure/mappers/titan.mapper";

export const titanActions = async () => {
  try {
    const response = await charactersApi.get<ApiResponse<TitanResult>>('/titans');

    // Verifica que la respuesta tenga datos
    if (!response.data || !response.data.results) {
      throw new Error('No data received from the API');
    }

    // Mapea los resultados
    const titans = response.data.results.map(titanMapper.fromResponseToDomain);

    // Verifica que el mapeo haya funcionado
    if (!titans || titans.length === 0) {
      throw new Error('Failed to map titans');
    }

    return titans;
  } catch (error) {
    console.error(error);
    throw 'Cannot load titans';
  }
};
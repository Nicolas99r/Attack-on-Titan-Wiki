import { TitanResult } from "@/infrastructure/interfaces/characters-response";
import { charactersApi } from "../api/characters";

export const getTitanByIdAction = async(id: number | string) => {
    try {
      const response = await charactersApi.get<TitanResult>(`/titans/${id}`);
      /* console.log("API Response:", response.data); */
      return response.data
      } catch (error) {
        console.error(error);
        throw 'Cannot load titans';
      }
}
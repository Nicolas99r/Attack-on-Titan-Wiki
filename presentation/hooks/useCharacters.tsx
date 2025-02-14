import { characterActions } from "@/core/actions/characterActions"
import { useQuery } from "@tanstack/react-query"

export const useCharacters = () => {
    const allCharactersQuery = useQuery({ 
        queryKey: ['characters', 'allCharacters'],
        queryFn: characterActions,
        staleTime: 1000 * 60 * 60 * 24,
    })

    return {
        allCharactersQuery,
    }
}
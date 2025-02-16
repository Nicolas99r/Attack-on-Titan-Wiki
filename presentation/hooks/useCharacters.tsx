import { characterActions } from "@/core/actions/characterActions"
import { titanActions } from "@/core/actions/titanActions"
import { useQuery } from "@tanstack/react-query"

export const useCharacters = () => {
    const allCharactersQuery = useQuery({ 
        queryKey: ['characters', 'allCharacters'],
        queryFn: characterActions,
        staleTime: 1000 * 60 * 60 * 24,
    })

    const allTitansQuery = useQuery({ 
        queryKey: ['titans', 'allTitans'],
        queryFn: titanActions,
        staleTime: 1000 * 60 * 60 * 24,
    })

    return {
        allCharactersQuery,
        allTitansQuery
    }
}
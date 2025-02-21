import { getTitanByIdAction } from '@/core/actions/get-titan-by-id.action'
import { useQuery } from '@tanstack/react-query'

export const useTitan = (id: number) => {

    const titanQuery = useQuery({
        queryKey: ['titan', id],
        queryFn: () => getTitanByIdAction(id),
        staleTime: 1000 * 60 * 60 * 24,
    })

    return {
        titanQuery
    }
}

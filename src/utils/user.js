import { useQuery } from 'react-query'
import { client } from '../utils/github-api-client'

const useUser = (username) => {
  const { isError, error, data } = useQuery({
    queryKey: ['user', username],
    queryFn: () => client(`users/${username}`),
  })

  if (isError) {
    console.error(`getUser: ${error.message}`)
  }

  return data ?? '...'
}

export { useUser }

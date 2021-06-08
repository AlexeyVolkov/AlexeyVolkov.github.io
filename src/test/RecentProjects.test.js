import { render, screen, waitFor } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from 'react-query'

import RecentProjects from '../components/RecentProjects'

test('recent projects are fetched', async () => {
  const queryClient = new QueryClient()
  render(
    <QueryClientProvider client={queryClient}>
      <RecentProjects />
    </QueryClientProvider>
  )

  // Before loading
  expect(screen.getByText(/Loading recent projects/i)).toBeInTheDocument()
  // wait for appearance inside an assertion
  await waitFor(() => {
    expect(screen.getByText(/projects/i)).toBeInTheDocument()
  })
})

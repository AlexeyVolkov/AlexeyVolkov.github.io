import { render, screen, waitFor } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from 'react-query'

import Header from '../components/Header'

test('header is fetched', async () => {
  const queryClient = new QueryClient()
  render(
    <QueryClientProvider client={queryClient}>
      <Header />
    </QueryClientProvider>
  )

  // Before loading
  expect(screen.getByText(/loading header/i)).toBeInTheDocument()
  // wait for appearance inside an assertion
  await waitFor(() => {
    expect(screen.getByTestId('header')).toBeInTheDocument()
  })
})

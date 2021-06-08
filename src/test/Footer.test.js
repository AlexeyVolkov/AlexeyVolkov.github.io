import { render, screen, waitFor } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from 'react-query'

import Footer from '../components/Footer'

test('footer is fetched', async () => {
  const queryClient = new QueryClient()
  render(
    <QueryClientProvider client={queryClient}>
      <Footer />
    </QueryClientProvider>
  )

  // Before loading
  expect(screen.getByText(/loading footer/i)).toBeInTheDocument()
  // wait for appearance inside an assertion
  await waitFor(() => {
    expect(screen.getByText(/contacts:/i)).toBeInTheDocument()
  })
})

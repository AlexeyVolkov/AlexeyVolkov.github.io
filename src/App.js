import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import Header from './components/Header'
import Footer from './components/Footer'
import RecentProjects from './components/RecentProjects'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <RecentProjects />
      <hr />
      <Footer />
    </QueryClientProvider>
  )
}

export default App

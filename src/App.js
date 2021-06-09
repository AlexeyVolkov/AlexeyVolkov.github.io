import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import Header from './components/Header'
import Footer from './components/Footer'
import RecentProjects from './components/RecentProjects'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div itemscope itemtype='https://schema.org/Person'>
        <Header />
        <RecentProjects />
        <hr />
        <Footer />
      </div>
    </QueryClientProvider>
  )
}

export default App

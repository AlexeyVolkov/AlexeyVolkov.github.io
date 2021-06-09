import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

import Header from './Header'
import Footer from './Footer'
import RecentProjects from './RecentProjects'

const queryClient = new QueryClient()

function PersonalWebsite() {
  return (
    <QueryClientProvider client={queryClient}>
      <div itemScope itemType='https://schema.org/Person'>
        <Header />
        <RecentProjects />
        <hr />
        <Footer />
      </div>
    </QueryClientProvider>
  )
}

export default PersonalWebsite

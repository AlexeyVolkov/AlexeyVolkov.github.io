import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import Header from './components/Header'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <main>
        <h2>About</h2>
        <p>I mostly code on React.</p>
        Projects from github:
        <ul>
          <li>this website</li>
          <li>
            <a href='https://github.com/AlexeyVolkov/pizzaProject'>
              Ordering pizza on Laravel + Livewire + Travis
            </a>
          </li>
          <li>
            <a href='https://github.com/AlexeyVolkov/CSS3-is-Awesome'>
              CSS3 bike
            </a>
          </li>
        </ul>
      </main>
      <footer>
        My contacts:
        <ul>
          <li>
            <a href='mailto:reactdeveloper@icloud.com'>
              reactdeveloper@icloud.com
            </a>
          </li>
          <li>
            <a href='https://github.com/AlexeyVolkov'>@AlexeyVolkov</a>
          </li>
        </ul>
      </footer>
    </QueryClientProvider>
  )
}

export default App

import './styles/App.scss'
import jsonData from './websiteData.json'
import Rows from './components/Rows/Rows'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <header>
        <Header methods={jsonData.methods} name={jsonData.name} />
      </header>
      <main>
        <Rows rows={jsonData.methods} />
      </main>
      <footer className="footer mt-auto py-3 bg-light">
        <Footer />
      </footer>
    </>
  )
}

export default App

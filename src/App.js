import './styles/App.scss'
import jsonData from './websiteData.json'
import Rows from './components/Rows/Rows'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <Header links={jsonData.methods} websiteName={jsonData.name} />
      <main>
        <Rows rows={jsonData.methods} />
      </main>
      <Footer
        links={jsonData.footerLinks}
        className="footer mt-auto py-3 bg-light"
      />
    </>
  )
}

export default App

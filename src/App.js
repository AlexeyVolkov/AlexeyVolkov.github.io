import './styles/App.scss'
import jsonData from './websiteData.json'
import Rows from './components/Rows/Rows'
import Header from './components/Header/Header'

function App() {
  return (
    <>
      <header className="container">
        <Header methods={jsonData.methods} />
      </header>
      <main>
        <Rows rows={jsonData.methods} />
      </main>
      <footer>
        <ul>
          <li>
            <a
              href="https://spb.hh.ru/resume/ff5930bbff033a8c5e0039ed1f47376b7a4d51"
              rel="nofollow noopener"
              lang="ru"
              title="Резюме на hh.ru"
            >
              hh.ru
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/2plus2is4/"
              rel="nofollow noopener"
              title="Hire in LinkedIn"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/2plus2is4/"
              rel="nofollow noopener"
              title="Hire in LinkedIn"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </footer>
    </>
  )
}

export default App

import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
} from 'react-router-dom'

import PersonalWebsite from './components/PersonalWebsite'
import AccessibilitySamples from './components/AccessibilitySamples'

function App() {
  return (
    <Router>
      <Links />
      <AppRoutes />
    </Router>
  )
}

const AppRoutes = () => (
  <Switch>
    <Route path='/accessibility'>
      <AccessibilitySamples />
    </Route>
    <Route path='/'>
      <PersonalWebsite />
    </Route>
  </Switch>
)

const Links = () => {
  const location = useLocation()
  return (
    <nav>
      <ul>
        <li>
          {location.pathname === '/' ? (
            <strong>Homepage</strong>
          ) : (
            <Link to='/'>Homepage</Link>
          )}
        </li>
        <li>
          {location.pathname === '/accessibility' ? (
            <strong>Accessibility Code Samples</strong>
          ) : (
            <Link to='/accessibility'>Accessibility Code Samples</Link>
          )}
        </li>
      </ul>
    </nav>
  )
}

export default App

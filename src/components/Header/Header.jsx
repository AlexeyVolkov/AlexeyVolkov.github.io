import 'bootstrap/js/src/collapse'
import PropTypes from 'prop-types'

function Header(props) {
  return (
    <header className={props.className}>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="/">
            <s>{props.websiteName}</s>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {props.links.map((link) => (
                <li className="nav-item" key={link.name}>
                  <a className="nav-link" href={`#${link.name}`}>
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

Header.propTypes = {
  links: PropTypes.arrayOf(PropTypes.object),
  className: PropTypes.string,
  websiteName: PropTypes.string,
}

export default Header

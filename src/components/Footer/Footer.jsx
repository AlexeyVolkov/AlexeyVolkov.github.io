import PropTypes from 'prop-types'

function Footer(props) {
  return (
    <footer className={props.className}>
      <ul className="nav justify-content-center">
        {props.links.map((link) => (
          <li className="nav-item" key={link.href}>
            <a
              className="nav-link"
              href={link.href}
              rel="nofollow noopener"
              title={link.title}
            >
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  )
}

Footer.propTypes = {
  links: PropTypes.arrayOf(PropTypes.object),
  className: PropTypes.string,
}

export default Footer

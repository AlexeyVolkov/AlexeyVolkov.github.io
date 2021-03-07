import Code from '../Code/Code'
import PropTypes from 'prop-types'

function Row(props) {
  return (
    <>
      <dt className={`col ${props.row.name}`} id={props.row.name}>
        <h2>{props.row.title}</h2>
      </dt>
      <dd>
        <section className="row d-flex justify-content-around align-items-stretch">
          <div className="col-12 col-sm-4">
            <h3>
              <small className="text-muted">Inaccessible</small>
            </h3>
            <Code
              link={props.row['old-code-url']}
              className="d-none d-sm-block p-0 border rounded shadow-sm"
            />
          </div>
          <div className="col-12 col-sm-7">
            <h3>Accessible</h3>
            <Code
              link={props.row['new-code-url']}
              className="border border-secondary p-0 rounded shadow-sm"
            />
          </div>
        </section>
        <section>
          <nav>
            <h4>Resources</h4>
            <div className="row">
              {props.row.links.map((linkSection) => (
                <div className="col" key={linkSection.title}>
                  {linkSection.title ? <h4>{linkSection.title}</h4> : ''}
                  <ol>
                    {linkSection.links.map((link) => (
                      <li key={link.href}>
                        <a href={link.href} title={link?.title}>
                          {link.text}
                        </a>
                      </li>
                    ))}
                  </ol>
                </div>
              ))}
            </div>
          </nav>
        </section>
      </dd>
    </>
  )
}

Row.propTypes = {
  row: PropTypes.object,
}

export default Row

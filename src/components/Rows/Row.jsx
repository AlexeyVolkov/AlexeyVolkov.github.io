import Code from '../Code/Code'

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
              <small class="text-muted">Inaccessible</small>
            </h3>
            <Code
              link={props.row['old-code-url']}
              className="d-none d-sm-block"
            />
          </div>
          <div className="col-12 col-sm-7">
            <h3>Accessible</h3>
            <Code
              link={props.row['new-code-url']}
              className="border-secondary"
            />
          </div>
        </section>
        <section>
          <nav>
            <h4>Resources</h4>
            <div className="row">
              {props.row.links.map((linkSection) => {
                return (
                  <div className="col">
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
                )
              })}
            </div>
          </nav>
        </section>
      </dd>
    </>
  )
}

export default Row

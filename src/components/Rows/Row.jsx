import Code from '../Code/Code'

function Row(props) {
  return (
    <>
      <dt className={`col ${props.row.name}`} id={props.row.name}>
        <h2>{props.row.title}</h2>
      </dt>
      <dd>
        <section className="row d-flex justify-content-around align-items-stretch">
          <Code link={props.row['old-code-url']} className="col-12 col-sm-5" />
          <Code
            link={props.row['new-code-url']}
            className="col-12 col-sm-6 border-secondary"
          />
        </section>
        <section>
          <nav>
            <h3>Resources</h3>
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

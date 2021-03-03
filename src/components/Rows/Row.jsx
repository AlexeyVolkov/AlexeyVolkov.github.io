import Code from '../Code/Code'

function Row(props) {
  return (
    <>
      <dt className={`col ${props.row.name}`}>{props.row.title}</dt>
      <dd>
        <section className="row">
          <Code
            link={props.row['old-code-url']}
            className="col-12 col-sm-6"
            key={props.row['old-code-url']}
          />
          <Code
            link={props.row['new-code-url']}
            className="col-12 col-sm-6"
            key={props.row['new-code-url']}
          />
        </section>
        <section>
          <nav>
            <h3>Links</h3>
            {props.row.links.map((linkSection) => {
              return (
                <>
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
                </>
              )
            })}
          </nav>
        </section>
      </dd>
    </>
  )
}

export default Row

import Code from '../Code/Code'

function Row(props) {
  return (
    <>
      <dt className={props.row.name}>{props.row.title}</dt>
      <dd>
        <section>
          <ul className="row">
            <li className="col">
              <Code link={props.row['old-code-url']} />
            </li>
            <li className="col">
              <Code link={props.row['new-code-url']} />
            </li>
          </ul>
        </section>
        <section>
          <nav>
            {props.row.links.map((linkSection) => {
              return (
                <>
                  {linkSection.title ? <h4>{linkSection.title}</h4> : ''}
                  <ol>
                    {linkSection.links.map((link) => (
                      <li>
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
        <section>
          <nav>
            <ol>
              {props.row['can-i-use-it'].map((link) => (
                <li>
                  <a href={link.href} title={link?.title}>
                    {link.text}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </section>
      </dd>
    </>
  )
}

export default Row

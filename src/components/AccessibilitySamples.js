import React from 'react'
import jsonData from '../websiteData.json'

const Resources = ({ links }) => (
  <ol>
    {links.map((link) => (
      <li key={link.href}>
        <a href={link.href} title={link?.title}>
          {link.text}
        </a>
      </li>
    ))}
  </ol>
)

const Code = ({ link }) => {
  const codeElement = React.useRef()
  React.useEffect(() => {
    const script = document.createElement('script')
    script.src = link
    script.async = true
    codeElement.current.appendChild(script)
  })
  return (
    <pre>
      <code ref={codeElement}>
        <script src={link} async></script>
      </code>
    </pre>
  )
}

const Rows = ({ linkSections }) =>
  linkSections.map((linkSection) => (
    <React.Fragment key={linkSection.title}>
      {linkSection.title && <h4>{linkSection.title}</h4>}
      <Resources links={linkSection.links} />
    </React.Fragment>
  ))

const AccessibilitySamples = () => (
  <main>
    <dl>
      {jsonData.methods.map((method) => (
        <React.Fragment key={method.name}>
          <dt>
            <h2>{method.title}</h2>
          </dt>
          <dd>
            <Code link={method['new-code-url']} />
            <section>
              <nav>
                <h4>Resources</h4>
                <Rows linkSections={method.links} />
              </nav>
            </section>
          </dd>
        </React.Fragment>
      ))}
    </dl>
  </main>
)

export default AccessibilitySamples

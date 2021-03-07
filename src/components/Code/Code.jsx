import { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import './Code.scss'

function Code(props) {
  const codeElement = useRef()
  useEffect(() => {
    const script = document.createElement('script')
    script.src = props.link
    script.async = true
    codeElement.current.appendChild(script)
  })
  return (
    <pre className={`${props.className} code`}>
      <code ref={codeElement} className="p-0 m-0" />
    </pre>
  )
}

Code.propTypes = {
  className: PropTypes.string,
  link: PropTypes.string,
}

export default Code

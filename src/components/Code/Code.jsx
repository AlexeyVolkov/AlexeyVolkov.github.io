import { useEffect, useRef } from 'react'
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
    <pre className={`${props.className} p-0 border rounded shadow-sm code`}>
      <code ref={codeElement} className="p-0 m-0" />
    </pre>
  )
}

export default Code

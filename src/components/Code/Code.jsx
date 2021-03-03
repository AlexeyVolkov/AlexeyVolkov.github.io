import { useEffect, useRef } from 'react'

function Code(props) {
  const codeElement = useRef(null)
  useEffect(() => {
    const script = document.createElement('script')
    script.src = props.link
    script.async = true
    codeElement.current.appendChild(script)
  })
  return <code ref={codeElement} className={props.className} />
}

export default Code

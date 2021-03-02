import Row from './Row'

function Rows(props) {
  return (
    <dl>
      {props.rows.map((row) => (
        <Row row={row} />
      ))}
    </dl>
  )
}

export default Rows

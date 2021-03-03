import Row from './Row'

function Rows(props) {
  return (
    <dl className="container">
      {props.rows.map((row) => (
        <Row row={row} key={row.name} />
      ))}
    </dl>
  )
}

export default Rows

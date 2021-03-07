import Row from './Row'
import PropTypes from 'prop-types'

function Rows(props) {
  return (
    <dl className={`container ${props.className}`}>
      {props.rows.map((row) => (
        <Row row={row} key={row.name} />
      ))}
    </dl>
  )
}

Rows.propTypes = {
  rows: PropTypes.arrayOf(PropTypes.object),
  className: PropTypes.string,
}

export default Rows

import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className='header'>
      {/* <h1 style={{ color: 'red', backgroundColor: 'yellow' }}>{title}</h1> */}
        <h1>Task Tracker</h1>
        <h2>Let's get it!</h2>
        <Button 
        color= {showAdd ? 'red' : 'blue'}
        text= {showAdd ? 'Close' : 'Add'} 
        onClick = {onAdd} 
        />
    </header>
  )
}

Header.defaultProps = {
  title: 'Task Tracker',
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}
// const headingStyle = {
//   color: 'red',
//   backgroundColor: 'black'
// }
export default Header

import PropTypes from 'prop-types'
import Button from './Button'
const Header = ({title}) => {
  return (
    <header className='header'>
        <h1>{title}</h1>
        <Button color='green' text='Add' />
    </header>
  )
}

Header.defaultProps = {
  title: 'Task Tracker',
}

Header.PropTypes = {
  title: PropTypes.string.isRequired,
}
// const headingStyle = {
//   color: 'red',
//   backgroundColor: 'black'
// }
export default Header
// import PropTypes from 'prop-types'
// import { useLocation } from 'react-router-dom'
// import Button from './Button'

// const Header = ({title, onAdd, showAdd}) => {
//   const location = useLocation()

//   return (
//     <header className='header'>
//         <h1 >{title}</h1>
//         {location.pathname === '/' && (
//         <Button
//           color={showAdd ? 'red' : 'green'}
//           text={showAdd ? 'Close' : 'Add'}
//           onClick={onAdd}
//         />
//       )}
//     </header>
//   )
// }

// Header.defaultProps = {
//     title: 'Task Tracker'
// }

// Header.propTypes = {
//     title: PropTypes.string.isRequired
// }

// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black'
// }

// export default Header
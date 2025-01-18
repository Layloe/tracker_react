import propTypes from 'prop-types'

const Button = ({color, text}) => {
    const onClick = () => {
        console.log('click')
    }
  return <button style={{backgroundColor: color}} className='btn'>{text}</button>

}

Button.defaultProps = {
    color: 'steelblue'
}

Button.propTypes = {
    text: propTypes.string,
    color: propTypes.string,
}

export default Button
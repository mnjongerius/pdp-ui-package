import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ as, ...props }) => {
  const Component = as
  return (
    <Component {...props} />
  )
}
Button.propTypes = {
  className: PropTypes.string,
  /** String or node of the Component used to render the Button */
  as: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string
  ]),
  children: PropTypes.node,
  onClick: PropTypes.func
}
Button.defaultProps = {
  as: 'div',
  className: 'c-button',
  onClick: () => {}
}

export default Button

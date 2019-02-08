import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ className, as, children, onClick }) => {
  const Component = as
  return (
    <Component className={className} onClick={onClick}>{children}</Component>
  )
}
Button.propTypes = {
  /** String className to add to the Button */
  className: PropTypes.string,
  /** String or node of the Component used to render the Button */
  as: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string
  ]),
  /** Children will be rendered inside the Button */
  children: PropTypes.node,
  /** Function to be called when onClick event is fired */
  onClick: PropTypes.func
}
Button.defaultProps = {
  as: 'div',
  className: 'ui-button',
  onClick: () => {}
}

export default Button

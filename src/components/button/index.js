import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ className, as, children, onClick, ...props }) => {
  const Component = as
  return (
    <Component className={className} onClick={onClick} {...props}>{children}</Component>
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
  className: 'ui-button',
  onClick: () => {}
}

export default Button

import React from 'react'

const Button = ({ as, children, onClick }) => {
  const Component = as
  return (
    <Component className="ui-button" onClick={onClick}>{children}</Component>
  )
}
Button.defaultProps = {
  as: 'div'
}

export default Button

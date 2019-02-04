import React from 'react'

const Button = ({as, children}) => {
    const Component = as
    return (
        <Component className="ui-button">{children}</Component>
    )
}
Button.defaultProps = {
  as: 'div'
}

export default Button

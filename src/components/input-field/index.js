import React, { useState } from 'react'
import PropTypes from 'prop-types'

const InputField = (props) => {
  const {onChange, value: propsValue, ...rest} = props
  const [value, setValue] = useState(propsValue)
  const [valueFromProps, setValueFromProps] = useState()

  if (propsValue !== valueFromProps) {
    setValue(propsValue)
    setValueFromProps(propsValue)
  }

  return (
    <input
      {...rest}
      onChange={evt => {
        setValue(evt.target.value)
        onChange(evt)
      }}
      value={value}
    />
  )
}
InputField.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  onFocus: PropTypes.func,
  onChange: PropTypes.func,
  onBlur: PropTypes.func
}
InputField.defaultProps = {
  type: 'text',
  className: 'c-input-field',
  onFocus: () => {},
  onChange: () => {},
  onBlur: () => {}
}


export default InputField

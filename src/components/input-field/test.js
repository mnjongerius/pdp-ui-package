import React, { useState } from 'react'
import Button from '../button'
import InputField from './index'

const InputFieldTest = ({onFocus, onChange, onBlur}) => {
  const [value, setValue] = useState('Default value')
  return (
    <React.Fragment>
      <InputField
        name="input-field"
        value={value}
        onFocus={onFocus}
        onChange={onChange}
        onBlur={onBlur}
      />
      <Button onClick={() => setValue('External value')}>
        Click me!
      </Button>
    </React.Fragment>
  )
}

// .add('Test external value', () => (
//     <InputFieldTest onFocus={onFocus} onChange={onChange} onBlur={onBlur} />
//   )
// )

export default InputFieldTest
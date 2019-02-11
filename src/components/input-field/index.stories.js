import React from 'react'

import { storiesOf } from '@storybook/react'
import InputField from './index'
import './styles/index.scss'

const onFocus = function onFocus () {
  console.warn('onFocus event')
}

const onChange = function onChange () {
  console.warn('onChange event')
}

const onBlur = function onBlur () {
  console.warn('onBlur event')
}

storiesOf('InputField', module)
  .addParameters({
    info: {
      text: `Component to render a input-field`
    }
  })
  .add('Default', () => (
      <InputField
        name="input-field"
        value="Default value"
        onFocus={onFocus}
        onChange={onChange}
        onBlur={onBlur}
      />
    )
  )

import React from 'react'

import { storiesOf } from '@storybook/react'
import InputField from './index'
import './styles/index.scss'

const onFocus = function onFocus () {
}

const onChange = function onChange () {
}

const onBlur = function onBlur () {
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

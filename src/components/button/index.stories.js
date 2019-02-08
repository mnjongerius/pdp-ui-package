import React from 'react'

import { storiesOf } from '@storybook/react'
import Button from './index'
import './styles/index.scss'

const onClick = () => {
  alert('You clicked the button!')
}

storiesOf('Button', module)
  .add('Default', () => (
    <Button onClick={onClick}>
      Click me!
    </Button>
  ))

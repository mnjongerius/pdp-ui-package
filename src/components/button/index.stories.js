import React from 'react'

import { storiesOf } from '@storybook/react'
import Button from './index'
import './styles/index.scss'

const onClick = () => {
  alert('You clicked the button!')
}

storiesOf('Button', module)
  .addParameters({
    info: {
      text: `Component to render a button`
    }
  })
  .add('Default', () => (
    <Button onClick={onClick}>
      Click me!
    </Button>
  ))
  .add('As an <a>', () => (
    <Button onClick={onClick} as="a" href="#">
      Click me!
    </Button>
  ))
  .add('Unstyled', () => (
    <Button onClick={onClick} className="">
      Click me!
    </Button>
  ))

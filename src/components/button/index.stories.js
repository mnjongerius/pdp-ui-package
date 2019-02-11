import React from 'react'

import { storiesOf } from '@storybook/react'
import Button from './index'
import './styles/index.scss'

const onClick = (evt) => {
  evt.preventDefault()
  console.warn('You clicked the button!')
}

storiesOf('Button', module)
  .addParameters({
    info: {
      text: `Component to render a button. 

Renders a element/component, as specified by the \`as\` prop.

All props, except for \`as\`, are passed on to the rendered element.`
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

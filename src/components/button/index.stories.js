import React from 'react'

import { storiesOf } from '@storybook/react'
import {
  UnstyledButton,
  MinimalButton,
  StyledButton
} from './index'

storiesOf('Components|TODO', module)
  .add('UnstyledButton', () => (
    <UnstyledButton>
      foo
    </UnstyledButton>
  ))
  .add('MinimalButton', () => (
    <MinimalButton>
      foo
    </MinimalButton>
  ))
  .add('StyledButton', () => (
    <StyledButton>
      foo
    </StyledButton>
  ))

import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { LabeledValue } from './index'

storiesOf('Components', module).add('Labeled Value', () => (
  <LabeledValue label={'BTC/USD'} value={'0.12345678'} />
))

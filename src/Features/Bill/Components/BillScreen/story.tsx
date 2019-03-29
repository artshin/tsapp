import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { BillScreen } from './index'

storiesOf('Screens', module).add('Bill', () => {
  return <BillScreen />
})

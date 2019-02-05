import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { BillsScreen } from './index'

storiesOf('Screens', module).add('Bills', () => {
  return <BillsScreen />
})

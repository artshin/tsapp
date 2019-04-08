import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { TransactionItem } from './index'

storiesOf('Components', module).add('Transaction Item', () => {
  return <TransactionItem transaction={{ id: '0', total: 1240, title: 'Dallas' }} />
})

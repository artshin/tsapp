import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { ExchangesScreen } from 'Components/ExchangesScreen'
import { Exchange } from 'Models'

const exchanges: Exchange[] = [
  new Exchange('0', 'Bittrex', [], 'https://bittrex.com'),
  new Exchange('1', 'Binance', [], 'https://binance.com'),
  new Exchange('2', 'Cryptopia', [], 'https://cryptopia.com'),
  new Exchange('3', 'OkEx', [], 'https://okex.com'),
  new Exchange('4', 'Coinbase', [], 'https://coinbase.com'),
]

storiesOf('Screens', module).add('Exchanges', () => {
  return (
    <ExchangesScreen
      exchanges={exchanges}
      labeledValuePlaceholder={{
        label: '⎯',
        value: '⎯',
      }}
    />
  )
})

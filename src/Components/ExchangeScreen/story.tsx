import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { ExchangeScreen } from './index'

const randomFloat = (min: number, max: number): number => {
  return Math.random() * (max - min) + min
}

const randomInt = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min - 1)) + min
}

const generateStubData = () => {
  const count = 40
  // const count = randomInt(1, 100)
  const names = [
    'BTC/USD',
    'BTC/ETH',
    'BTC/LTC',
    'BTC/XVG',
    'BTC/XRP',
    'BTC/TRX',
    'BTC/TNT',
    'BTC/DND',
    'BTC/ADA',
    'BTC/XVO',
    'BTC/TRC',
    'BTC/ASD',
    'BTC/FJDK',
  ]
  const pairs = []
  for (let idx = 0; idx < count; idx++) {
    const nameIdx = randomInt(0, names.length)
    const price = randomFloat(0, 2)
    pairs.push({
      id: idx.toString(),
      name: names[nameIdx],
      price,
    })
  }
  return pairs
}

storiesOf('Screens', module).add('Exchange', () => {
  const pairs = generateStubData()
  return (
    <ExchangeScreen
      exchangeName={'Tragic Consul Exc.'}
      exchangeInfo={'truth is subjective'}
      pairs={pairs}
    />
  )
})

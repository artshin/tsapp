import { ExchangesAPI } from './ExchangesAPI'
import { BinanceAPI } from './BinanceAPI'
import { CoinbaseAPI } from './CoinbaseAPI'
import { BittrexAPI } from './BittrexAPI'
import { BaseExchangeClient } from './BaseExchangeAPI'

interface ExchangeApiByName {
  [exchangeId: string]: BaseExchangeClient
}

export const exchangeApiByName: ExchangeApiByName = {
  [BinanceAPI.name]: BinanceAPI,
  [BittrexAPI.name]: BittrexAPI,
  [CoinbaseAPI.name]: CoinbaseAPI,
}

export { ExchangesAPI, BinanceAPI, CoinbaseAPI, BittrexAPI }

import { Exchange } from './Models'

export enum SupportedExchange {
  Bittrex = 'bittrex',
  Coinbase = 'coinbase',
  Binance = 'binance',
}

export const SupportedExchanges = [
  new Exchange(SupportedExchange.Bittrex, 'Bittrex', [], 'https://bittrex.com'),
  new Exchange(SupportedExchange.Binance, 'Binance', [], 'https://coinbase.com'),
  new Exchange(SupportedExchange.Coinbase, 'Coinbase', [], 'https://coinbase.com'),
]

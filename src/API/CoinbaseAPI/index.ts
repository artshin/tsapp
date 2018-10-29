// COINBASE API Client
// https://docs.pro.coinbase.com/
import { APIClient } from '../BaseAPI'
// import { ExchageInfo, SymbolType } from './types'
import { Market } from '../../Models'

enum Endpoint {
  GetMarkets = '/products',
}

class CoinbaseAPIClient extends APIClient {
  public getMarkets = () => this.apisauceClient.get<Market[]>(Endpoint.GetMarkets)
}

export const CoinbaseAPI = new CoinbaseAPIClient('https://api.pro.coinbase.com')

// const convertSymbolsToMarkets = (symbols: SymbolType[]) =>
//   symbols.map(el => new Market(el.symbol, el.baseAsset + el.quoteAsset))

// BinanceAPI.addEndpointResponseTransform<ExchageInfo, Market[]>(Endpoint.GetMarkets, responseData =>
//   convertSymbolsToMarkets(responseData.symbols),
// )

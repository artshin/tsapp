// Bittrex API Client
// https://support.bittrex.com/hc/en-us/articles/115003723911-Developer-s-Guide-API
import { APIClient } from '../BaseAPI'
// import { ExchageInfo, SymbolType } from './types'
import { Market } from '../../Models'

enum Endpoint {
  GetMarkets = '/api/v1.1/public/getmarkets',
}

class BittrexAPIClient extends APIClient {
  public getMarkets = () => this.apisauceClient.get<Market[]>(Endpoint.GetMarkets)
}

export const BittrexAPI = new BittrexAPIClient('https://bittrex.com')

// const convertSymbolsToMarkets = (symbols: SymbolType[]) =>
//   symbols.map(el => new Market(el.symbol, el.baseAsset + el.quoteAsset))

// BinanceAPI.addEndpointResponseTransform<ExchageInfo, Market[]>(Endpoint.GetMarkets, responseData =>
//   convertSymbolsToMarkets(responseData.symbols),
// )

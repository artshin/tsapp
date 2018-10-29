// BINANCE API Client
// https://github.com/binance-exchange/binance-official-api-docs/blob/master/rest-api.md
import { APIClient } from '../BaseAPI'
import { ExchageInfo, SymbolType } from './types'
import { Market } from '../../Models'

enum Endpoint {
  GetMarkets = '/api/v1/exchangeInfo',
}

class BinanceAPIClient extends APIClient {
  public getMarkets = () => this.apisauceClient.get<Market[]>(Endpoint.GetMarkets)
}

export const BinanceAPI = new BinanceAPIClient('https://api.binance.com')

const convertSymbolsToMarkets = (symbols: SymbolType[]) =>
  symbols.map(el => new Market(el.symbol, el.baseAsset + el.quoteAsset))

BinanceAPI.addEndpointResponseTransform<ExchageInfo, Market[]>(Endpoint.GetMarkets, responseData =>
  convertSymbolsToMarkets(responseData.symbols),
)

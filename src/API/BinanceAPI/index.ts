// BINANCE API Client
// https://github.com/binance-exchange/binance-official-api-docs/blob/master/rest-api.md
import { BaseExchangeClient } from '../BaseExchangeAPI'
import { ExchageInfo, SymbolType } from './types'
import { Market } from '../../Models'
import { SupportedExchange } from '../../Constants'

enum Endpoint {
  GetMarkets = '/api/v1/exchangeInfo',
}

class BinanceBaseExchangeClient extends BaseExchangeClient {
  public readonly name = SupportedExchange.Binance
  constructor(baseURL: string) {
    super(baseURL)

    this.addEndpointResponseTransform<ExchageInfo, Market[]>(Endpoint.GetMarkets, responseData =>
      this.convertSymbolsToMarkets(responseData.symbols),
    )
  }

  public getMarkets = () => this.apisauceClient.get<Market[]>(Endpoint.GetMarkets)

  private convertSymbolsToMarkets = (symbols: SymbolType[]) =>
    symbols.map(el => new Market(this.name, el.baseAsset, el.quoteAsset))
}

export const BinanceAPI = new BinanceBaseExchangeClient('https://api.binance.com')

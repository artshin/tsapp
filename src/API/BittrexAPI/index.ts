// Bittrex API Client
// https://support.bittrex.com/hc/en-us/articles/115003723911-Developer-s-Guide-API
import { BaseExchangeClient } from '../BaseExchangeAPI'
import { BittrexMarket, GetMarketsResponse } from './types'
import { Market } from '../../Models'
import { SupportedExchange } from '../../Constants'

enum Endpoint {
  GetMarkets = '/api/v1.1/public/getmarkets',
}

class BittrexBaseExchangeClient extends BaseExchangeClient {
  public readonly name = SupportedExchange.Bittrex
  constructor(baseURL: string) {
    super(baseURL)

    this.addEndpointResponseTransform<GetMarketsResponse, Market[]>(
      Endpoint.GetMarkets,
      responseData => this.convertBittrexMarketsToMarkets(responseData.result),
    )
  }

  public getMarkets = () => this.apisauceClient.get<Market[]>(Endpoint.GetMarkets)

  private convertBittrexMarketsToMarkets = (markets: BittrexMarket[]) =>
    markets.map(el => new Market(this.name, el.BaseCurrency, el.MarketCurrency))
}

export const BittrexAPI = new BittrexBaseExchangeClient('https://bittrex.com')

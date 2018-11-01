// Bittrex API Client
// https://support.bittrex.com/hc/en-us/articles/115003723911-Developer-s-Guide-API
import { APIClient } from '../BaseAPI'
import { BittrexMarket, GetMarketsResponse } from './types'
import { Market } from '../../Models'

enum Endpoint {
  GetMarkets = '/api/v1.1/public/getmarkets',
}

class BittrexAPIClient extends APIClient {
  public getMarkets = () => this.apisauceClient.get<Market[]>(Endpoint.GetMarkets)
}

export const BittrexAPI = new BittrexAPIClient('https://bittrex.com')

const convertBittrexMarketsToMarkets = (markets: BittrexMarket[]) =>
  markets.map(el => new Market(el.MarketName, el.MarketCurrency + el.BaseCurrency))

BittrexAPI.addEndpointResponseTransform<GetMarketsResponse, Market[]>(
  Endpoint.GetMarkets,
  responseData => convertBittrexMarketsToMarkets(responseData.result),
)

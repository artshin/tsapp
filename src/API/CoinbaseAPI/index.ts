// COINBASE API Client
// https://docs.pro.coinbase.com/
import { APIClient } from '../BaseAPI'
import { Product } from './types'
import { Market } from '../../Models'

enum Endpoint {
  GetMarkets = '/products',
}

class CoinbaseAPIClient extends APIClient {
  public getMarkets = () => this.apisauceClient.get<Market[]>(Endpoint.GetMarkets)
}

export const CoinbaseAPI = new CoinbaseAPIClient('https://api.pro.coinbase.com')

const convertProductsToMarkets = (products: Product[]) =>
  products.map(el => new Market(el.id, el.base_currency + el.quote_currency))

CoinbaseAPI.addEndpointResponseTransform<Product[], Market[]>(Endpoint.GetMarkets, responseData =>
  convertProductsToMarkets(responseData),
)

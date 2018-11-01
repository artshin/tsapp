// COINBASE API Client
// https://docs.pro.coinbase.com/
import { BaseExchangeClient } from '../BaseExchangeAPI'
import { Product } from './types'
import { Market } from '../../Models'
import { SupportedExchange } from '../../Constants'

enum Endpoint {
  GetMarkets = '/products',
}

class CoinbaseBaseExchangeClient extends BaseExchangeClient {
  public readonly name = SupportedExchange.Coinbase
  constructor(baseURL: string) {
    super(baseURL)

    this.addEndpointResponseTransform<Product[], Market[]>(Endpoint.GetMarkets, responseData =>
      this.convertProductsToMarkets(responseData),
    )
  }

  public getMarkets = () => this.apisauceClient.get<Market[]>(Endpoint.GetMarkets)

  private convertProductsToMarkets = (products: Product[]) =>
    products.map(el => new Market(this.name, el.base_currency, el.quote_currency))
}

export const CoinbaseAPI = new CoinbaseBaseExchangeClient('https://api.pro.coinbase.com')

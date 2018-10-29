import { Currency, CurrencyNumber } from './Currency'

export class CurrencyPair {
  public id: string = ''
  public name: string = ''
  public baseCurrency: Currency
  public quoteCurrency: Currency
  public price: CurrencyNumber

  constructor(
    id: string,
    name: string,
    baseCurrency: Currency,
    quoteCurrency: Currency,
    price: CurrencyNumber,
  ) {
    this.id = id
    this.name = name
    this.baseCurrency = baseCurrency
    this.quoteCurrency = quoteCurrency
    this.price = price
  }

  get pairName(): string {
    return [this.baseCurrency, this.quoteCurrency].join('-')
  }
}

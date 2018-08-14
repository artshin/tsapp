/* tslint:disable:max-classes-per-file */
import currency from 'currency.js'

export type CurrencyNumber = currency

export class Currency {
  public id: string
  public name: string

  constructor(id: string, name: string) {
    this.id = id
    this.name = name
  }
}

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
    price: CurrencyNumber
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

export class Exchange {
  public id: string
  public name: string
  public pairs: CurrencyPair[]
  public website: string

  constructor(
    id: string,
    name: string,
    pairs: CurrencyPair[],
    website: string
  ) {
    this.id = id
    this.name = name
    this.pairs = pairs
    this.website = website
  }
}

export class ExchangePair {
  public id: string
  public name: string
  public price: number

  constructor(id: string, name: string, price: number) {
    this.id = id
    this.name = name
    this.price = price
  }
}

/* tslint:enable:max-classes-per-file */
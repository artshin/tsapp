import { CurrencyPair } from './CurrencyPair'

export class Exchange {
  public id: string
  public name: string
  public pairs: CurrencyPair[]
  public website: string

  constructor(id: string, name: string, pairs: CurrencyPair[], website: string) {
    this.id = id
    this.name = name
    this.pairs = pairs
    this.website = website
  }
}

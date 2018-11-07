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

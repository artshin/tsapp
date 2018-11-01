export class Market {
  public id: string
  public name: string

  constructor(exchangeId: string, baseCurrency: string, quoteCurrency: string) {
    const marketId = [baseCurrency, quoteCurrency].join('-')
    this.id = [exchangeId, marketId].join(':').toLowerCase()
    this.name = marketId.toUpperCase()
  }
}

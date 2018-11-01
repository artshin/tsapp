export interface BittrexMarket {
  MarketCurrency: string
  BaseCurrency: string
  MarketCurrencyLong: string
  BaseCurrencyLong: string
  MinTradeSize: number
  MarketName: string
  IsActive: boolean
  IsRestricted: boolean
  Created: Date
  Notice: string
  IsSponsored?: boolean
  LogoUrl: string
}

export interface GetMarketsResponse {
  success: boolean
  message: string
  result: BittrexMarket[]
}

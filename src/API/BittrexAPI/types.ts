/**
 * Example:
 * ```
 *   {
 *     "MarketCurrency": "PAX",
 *     "BaseCurrency": "USDT",
 *     "MarketCurrencyLong": "Paxos Standard",
 *     "BaseCurrencyLong": "Tether",
 *     "MinTradeSize": 3,
 *     "MarketName": "USDT-PAX",
 *     "IsActive": true,
 *     "IsRestricted": false,
 *     "Created": "2018-10-31T19:12:48.733",
 *     "Notice": null,
 *     "IsSponsored": null,
 *     "LogoUrl": "https://bittrexblobstorage.blob.core.windows.net/public/fee61ddf-9560-4e31-b413-b6ae8fe5503e.png"
 *   }
 * ```
 * @export
 * @interface BittrexMarket
 */
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

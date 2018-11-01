export interface RateLimit {
  rateLimitType: string
  interval: string
  limit: number
}

export interface Filter {
  filterType: string
  minPrice: string
  maxPrice: string
  tickSize: string
  minQty: string
  maxQty: string
  stepSize: string
  minNotional: string
  limit?: number
  maxNumAlgoOrders?: number
}

/**
 * Example
 *  {
 *    "symbol": "ETHBTC",
 *    "status": "TRADING",
 *    "baseAsset": "ETH",
 *    "baseAssetPrecision": 8,
 *    "quoteAsset": "BTC",
 *    "quotePrecision": 8,
 *    "orderTypes": [
 *      "LIMIT",
 *      "LIMIT_MAKER",
 *      "MARKET",
 *      "STOP_LOSS_LIMIT",
 *      "TAKE_PROFIT_LIMIT"
 *    ],
 *    "icebergAllowed": true,
 *    "filters": [
 *      {
 *        "filterType": "PRICE_FILTER",
 *        "minPrice": "0.00311700",
 *        "maxPrice": "0.31162000",
 *        "tickSize": "0.00000100"
 *      },
 *      {
 *        "filterType": "LOT_SIZE",
 *        "minQty": "0.00100000",
 *        "maxQty": "100000.00000000",
 *        "stepSize": "0.00100000"
 *      },
 *      {
 *        "filterType": "MIN_NOTIONAL",
 *        "minNotional": "0.00100000"
 *      },
 *      {
 *        "filterType": "ICEBERG_PARTS",
 *        "limit": 10
 *      },
 *      {
 *        "filterType": "MAX_NUM_ALGO_ORDERS",
 *        "maxNumAlgoOrders": 5
 *      }
 *    ]
 *  }
 * @export
 * @interface ExchageInfo
 */
export interface SymbolType {
  symbol: string
  status: string
  baseAsset: string
  baseAssetPrecision: number
  quoteAsset: string
  quotePrecision: number
  orderTypes: string[]
  icebergAllowed: boolean
  filters: Filter[]
}

export interface ExchageInfo {
  timezone: string
  serverTime: number
  rateLimits: RateLimit[]
  exchangeFilters: any[]
  symbols: SymbolType[]
}

/**
 * Example:
 *  {
 *    "id": "BCH-GBP",
 *    "base_currency": "BCH",
 *    "quote_currency": "GBP",
 *    "base_min_size": "0.01000000",
 *    "base_max_size": "120.00000000",
 *    "quote_increment": "0.01000000",
 *    "display_name": "BCH/GBP",
 *    "status": "online",
 *    "margin_enabled": false,
 *    "status_message": null,
 *    "min_market_funds": "10",
 *    "max_market_funds": "1000000",
 *    "post_only": false,
 *    "limit_only": false,
 *    "cancel_only": false
 *  }
 * @export
 * @interface Product
 */

export interface Product {
  id: string
  base_currency: string
  quote_currency: string
  base_min_size: string
  base_max_size: string
  quote_increment: string
  display_name: string
  status: string
  margin_enabled: boolean
  status_message: string
  min_market_funds: string
  max_market_funds: string
  post_only: boolean
  limit_only: boolean
  cancel_only: boolean
}

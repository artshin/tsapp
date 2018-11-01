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

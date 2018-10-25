// showLastCommitMessageForThisLibrary.js
import { create } from 'apisauce'
import Reactotron from 'reactotron-react-native'

export interface CoinbaseExchange {
  id: number
  tokens: string[]
  name: string
  rank: number
  slug: string
}

// https://s2.coinmarketcap.com/generated/search/quick_search_exchanges.json
const api = create({
  baseURL: 'https://s2.coinmarketcap.com',
  headers: { Accept: 'application/vnd.github.v3+json' },
})

export const CoinbaseAPI = {
  methods: {
    getExchanges: async () => {
      try {
        const response = await api.get('/generated/search/quick_search_exchanges.json')
        return response.data
      } catch (error) {
        // console.warn(error)
      }
    },
  },
  client: api,
}

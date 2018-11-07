import { create } from 'apisauce'
import { SupportedExchanges } from '../Constants'

const api = create({
  baseURL: 'https://someexchageapi.com',
  headers: { Accept: 'application/json' },
})

export const ExchangesAPI = {
  methods: {
    getExchanges: () => Promise.resolve(SupportedExchanges),
  },
  client: api,
}

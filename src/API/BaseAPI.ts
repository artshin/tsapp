// BINANCE API Client
// https://github.com/binance-exchange/binance-official-api-docs/blob/master/rest-api.md
import { create, ApisauceInstance, ApiResponse } from 'apisauce'
import Reactotron from 'reactotron-react-native'

export const createBaseClient = (baseURL: string) => {
  const apiClient = create({
    baseURL,
  })
  apiClient.addMonitor(Reactotron.apisauce)
  return apiClient
}

export class APIClient {
  protected apisauceClient: ApisauceInstance

  public constructor(baseURL: string) {
    this.apisauceClient = create({ baseURL })
  }

  public addEndpointResponseTransform<T, U>(endpoint: string, callback: (responseData: T) => U) {
    this.apisauceClient.addResponseTransform(response => {
      if (response.config === undefined) {
        return
      }

      if (response.config.url === undefined) {
        return
      }

      if (response.data === undefined) {
        return
      }

      const url = response.config.url

      if (url.endsWith(endpoint)) {
        response.data = callback(response.data)
      }
    })
  }
}

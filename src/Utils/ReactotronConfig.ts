import reactotron, { Reactotron } from 'reactotron-react-native'
import { reactotronRedux } from 'reactotron-redux'

declare global {
  interface Console {
    tron: Reactotron
  }
}

export interface ReactotronOptions {
  useRedux: boolean
  clearOnConnect: boolean
  modifyConsole: boolean
}

export const defaultReactotronOptions: ReactotronOptions = {
  useRedux: true,
  clearOnConnect: true,
  modifyConsole: true,
}

export const connectToReactotron = (options: ReactotronOptions = defaultReactotronOptions) => {
  let instance = reactotron.configure({ name: 'Fairsplit' })

  if (instance.useReactNative) {
    instance = instance.useReactNative({}).connect()
  }

  if (instance.clear) {
    instance.clear()
  }

  if (options.useRedux) {
    instance.use(reactotronRedux())
  }

  if (options.modifyConsole) {
    // tslint:disable-next-line no-console
    console.tron = instance
  }

  return instance
}

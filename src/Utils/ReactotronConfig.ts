import reactotron, { UseReactNativeOptions } from 'reactotron-react-native'

declare module 'reactotron-core-client' {
  interface Reactotron {
    useReactNative?: (options: UseReactNativeOptions) => Reactotron
    overlay?: (App: React.ReactNode) => void
    storybookSwitcher?: (App: React.ReactNode) => void
  }
}

import { reactotronRedux } from 'reactotron-redux'

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
    console.tron = instance
  }

  return instance
}

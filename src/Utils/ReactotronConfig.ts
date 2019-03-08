import * as Reactotron from 'reactotron-react-native'
import { reactotronRedux } from 'reactotron-redux'

export interface ReduxInterface extends Reactotron.Reactotron {
  createStore?: (rootReducer: any, middleware: any) => {}
}

const reactotronInstance = Reactotron.default

export interface ReactotronOptions {
  useRedux: boolean
  useStorybook: boolean
  clearOnConnect: boolean
  modifyConsole: boolean
}

export const defaultReactotronOptions: ReactotronOptions = {
  useRedux: true,
  useStorybook: true,
  clearOnConnect: true,
  modifyConsole: true,
}

export const connectToReactotron = (options: ReactotronOptions = defaultReactotronOptions) => {
  reactotronInstance.configure().useReactNative()

  if (options.useRedux) {
    reactotronInstance.use(reactotronRedux())
  }

  if (options.useStorybook) {
    reactotronInstance.use(Reactotron.storybook())
  }

  reactotronInstance.connect().clear()

  if (options.modifyConsole) {
    console.tron = reactotronInstance
  }
}

import * as Reactotron from 'reactotron-react-native'
import { reactotronRedux } from 'reactotron-redux'
import apisaucePlugin from 'reactotron-apisauce'

interface ReduxInterface extends Reactotron.Reactotron {
  createStore?: (rootReducer: any, middleware: any) => {}
}

const reactotron: ReduxInterface = Reactotron.default
  .configure() // controls connection & communication settings
  .useReactNative() // add all built-in react native plugins
  .use(reactotronRedux())
  .use(Reactotron.storybook())
  .use(apisaucePlugin())
  .connect() // let's connect!

reactotron.clear()

export default reactotron

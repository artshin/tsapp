declare module 'reactotron-redux' {
  import { Reactotron, ReactotronPlugin } from 'reactotron-react-native'
  export function reactotronRedux(): (tron?: Reactotron) => ReactotronPlugin
}

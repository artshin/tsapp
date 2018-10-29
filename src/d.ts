declare module 'reactotron-redux' {
  import { Reactotron, ReactotronPlugin } from 'reactotron-react-native'
  export function reactotronRedux(): (tron?: Reactotron) => ReactotronPlugin
}

declare module 'reactotron-react-native' {
  export interface Reactotron {
    apisauce: any
  }
  export function storybook(): (tron?: Reactotron) => ReactotronPlugin
}

declare module 'reactotron-apisauce' {
  import { Reactotron, ReactotronPlugin } from 'reactotron-react-native'
  export default function apisaucePlugin(): (tron?: Reactotron) => ReactotronPlugin
}

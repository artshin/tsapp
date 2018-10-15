import * as React from 'react'
import { RootStack } from './src/Containers/Navigator'
import './src/Utils/ReactotronConfig'

interface Props {}

export default class App extends React.PureComponent<Props> {
  public render() {
    return <RootStack />
  }
}

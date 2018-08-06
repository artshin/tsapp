import * as React from 'react'
import { StackNavigator } from 'Containers/Navigator'

interface Props {}

export default class App extends React.PureComponent<Props> {
  public render() {
    return <StackNavigator />
  }
}

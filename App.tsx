import * as React from 'react'
import { RootNavigator } from './src/Containers/Navigator'
import { NavigationStore } from './src/Stores/NavigationStore'
import './src/Utils/ReactotronConfig'
import { Provider } from 'mobx-react'

interface Props {}

export default class App extends React.Component<Props> {
  private navigationStore = new NavigationStore()

  public render() {
    return (
      <Provider navigationStore={this.navigationStore}>
        <RootNavigator ref={this.navigationStore.createRef} />
      </Provider>
    )
  }
}

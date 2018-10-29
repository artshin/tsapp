import * as React from 'react'
import { RootNavigator } from './Containers'
import createStore from './Reducers'
import './Utils/ReactotronConfig'
import { Provider } from 'react-redux'

interface Props {}

export default class App extends React.Component<Props> {
  private store = createStore()

  public render() {
    return (
      <Provider store={this.store}>
        <RootNavigator />
      </Provider>
    )
  }
}

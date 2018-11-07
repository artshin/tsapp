import * as React from 'react'
import { RootNavigator } from './Containers'
import createStore from './Reducers'
import { reactotron } from './Utils/ReactotronConfig'
import { Provider } from 'react-redux'

interface Props {}

export default class App extends React.Component<Props> {
  private store = createStore()

  constructor(props: Props) {
    super(props)
    reactotron.connect().clear()
  }

  public render() {
    if (!this.store) {
      return null
    }

    return (
      <Provider store={this.store}>
        <RootNavigator />
      </Provider>
    )
  }
}

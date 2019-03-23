import * as React from 'react'
import { AppContainer } from './Containers'
import createStore from './Reducers'
import { Provider } from 'react-redux'
import { Root } from 'native-base'

type Props = {}

export default class App extends React.Component<Props> {
  private store = createStore()

  constructor(props: Props) {
    super(props)
  }

  public render() {
    if (!this.store) {
      return null
    }

    return (
      <Provider store={this.store}>
        <Root>
          <AppContainer />
        </Root>
      </Provider>
    )
  }
}

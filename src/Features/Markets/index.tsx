import * as React from 'react'
import { View } from 'react-native'
import { NavigationInjectedProps, NavigationScreenProp, NavigationState } from 'react-navigation'
import { ReduxState, ReduxDispatch } from '../../Reducers'
import { connect } from 'react-redux'

interface PropParams {
  title: string
}
interface StateParams extends NavigationState {
  params: PropParams
}
interface OwnProps {
  navigation: NavigationScreenProp<StateParams>
}

type Props = OwnProps & NavigationInjectedProps

interface State {}

class MarketsContainer extends React.Component<Props, State> {
  public static navigationOptions = {
    header: null,
  }

  public render() {
    return <View />
  }
}

const mapStateToProps = (state: ReduxState) => {
  return {
    // exchanges: state.exchanges.allIds.map(id => state.exchanges.byId[id]),
  }
}

// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = (dispatch: ReduxDispatch) => ({
  // getExchanges: () => dispatch(getExchanges()),
})

export const ExchangesScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MarketsContainer)

import * as React from 'react'
import { NavigationInjectedProps, NavigationScreenProp, NavigationState } from 'react-navigation'
import { ReduxState, ReduxDispatch } from '../../Reducers'
import { connect } from 'react-redux'
import { BillScreen as BillScreenView } from './Components/BillScreen'

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

class BillContainer extends React.Component<Props, State> {
  public static navigationOptions = {}

  public render() {
    return <BillScreenView />
  }
}

const mapStateToProps = (state: ReduxState) => {
  return {}
}

// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = (dispatch: ReduxDispatch) => ({
  // getExchanges: () => dispatch(getExchanges()),
})

export const BillScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(BillContainer)

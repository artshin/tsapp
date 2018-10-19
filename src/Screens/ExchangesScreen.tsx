import * as React from 'react'
import { Screens } from '../Containers/Navigator'
import { ExchangesScreen as ExchangesScreenView } from '../Components/ExchangesScreen'
import { NavigationInjectedProps, NavigationScreenProp, NavigationState } from 'react-navigation'
import { LoadingPropParams } from './LoadingScreen'
import Reactotron from 'reactotron-react-native'
import { ReduxState } from '../Reducers'
import { Dispatch, Action } from 'redux'
import { ExchangesActions } from '../Reducers/Exchanges'
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

class ExchangesScreenContainer extends React.Component<Props, State> {
  public static navigationOptions = {
    header: null,
  }

  public componentDidMount() {
    const loadingParams: LoadingPropParams = {
      animated: false,
    }
    this.props.navigation.navigate(Screens.Loading, loadingParams)
    setTimeout(() => {
      this.props.navigation.pop()
    }, 2500)
  }

  public render() {
    return <ExchangesScreenView exchanges={[]} />
  }
}

const mapStateToProps = (state: ReduxState) => {
  Reactotron.log(state)
  return {
    exchanges: state.exchanges.exchanges,
  }
}

// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  getExchanges: () => dispatch(ExchangesActions.getExchanges()),
})

export const ExchangesScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ExchangesScreenContainer)

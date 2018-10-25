import * as React from 'react'
import { Screens } from '../../Containers/Navigator'
import { ExchangesScreen as ExchangesScreenView } from './Component'
import { NavigationInjectedProps, NavigationScreenProp, NavigationState } from 'react-navigation'
import { LoadingPropParams } from '../../Screens/LoadingScreen'
import { ReduxState, ReduxDispatch } from '../../Reducers'
import { getExchanges } from './actions'
import { connect } from 'react-redux'
import Reactotron from 'reactotron-react-native'

interface PropParams {
  title: string
}
interface StateParams extends NavigationState {
  params: PropParams
}
interface OwnProps {
  navigation: NavigationScreenProp<StateParams>
  getExchanges: () => void
}

type Props = OwnProps & NavigationInjectedProps

interface State {}

class ExchangesScreenContainer extends React.Component<Props, State> {
  public static navigationOptions = {
    header: null,
  }

  public componentDidMount() {
    this.playLoadingAnimation()
    this.props.getExchanges()
    // Reactotron.log(this.props.getExchanges())
  }

  public render() {
    return <ExchangesScreenView exchanges={[]} />
  }

  private playLoadingAnimation = () => {
    const loadingParams: LoadingPropParams = {
      animated: false,
    }

    this.props.navigation.navigate(Screens.Loading, loadingParams)

    setTimeout(() => {
      this.props.navigation.pop()
    }, 2500)
  }
}

const mapStateToProps = (state: ReduxState) => {
  return {
    exchanges: state.exchanges.exchanges,
  }
}

// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = (dispatch: ReduxDispatch) => ({
  getExchanges: () => dispatch(getExchanges()),
})

export const ExchangesScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ExchangesScreenContainer)

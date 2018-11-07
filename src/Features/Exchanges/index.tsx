import * as React from 'react'
import { Screens, LoadingPropParams } from '../../Containers'
import { ExchangesScreen as ExchangesScreenView } from './Components'
import { NavigationInjectedProps, NavigationScreenProp, NavigationState } from 'react-navigation'
import { ReduxState, ReduxDispatch } from '../../Reducers'
import { getExchanges } from './actions'
import { connect } from 'react-redux'
import { Exchange } from 'Models'

interface PropParams {
  title: string
}
interface StateParams extends NavigationState {
  params: PropParams
}
interface OwnProps {
  navigation: NavigationScreenProp<StateParams>
  getExchanges: () => void
  getMarketsForAllExchanges: () => void
  exchanges: Exchange[]
}

type Props = OwnProps & NavigationInjectedProps

interface State {}

class ExchangesScreenContainer extends React.Component<Props, State> {
  public static navigationOptions = {
    header: null,
  }

  public componentDidMount() {
    if (!__DEV__) {
      this.playLoadingAnimation()
    }
  }

  public render() {
    return <ExchangesScreenView exchanges={this.props.exchanges} />
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
    exchanges: state.exchanges.allIds.map(id => state.exchanges.byId[id]),
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

import * as React from 'react'
import { LandingScreen as LandingScreenView } from '../Components/LandingScreen'
import { Screens } from '../Containers'
import { NavigationInjectedProps, NavigationScreenProp, NavigationState } from 'react-navigation'
import { loadAppData } from '../Actions'
import { ReduxState, ReduxDispatch } from '../Reducers'
import { connect } from 'react-redux'

interface PropParams {
  title: string
}
interface StateParams extends NavigationState {
  params: PropParams
}
interface OwnProps {
  navigation: NavigationScreenProp<StateParams>
  loadAppData: () => void
}

type Props = OwnProps & NavigationInjectedProps

interface State {}

export class LandingScreenContainer extends React.PureComponent<Props, State> {
  public static navigationOptions = {
    header: null,
  }
  public componentDidMount() {
    this.props.loadAppData()
    setTimeout(() => {
      this.props.navigation.navigate(Screens.Exchanges)
    }, 500)
  }

  public render() {
    return <LandingScreenView />
  }
}

const mapStateToProps = (state: ReduxState) => {
  return {
    exchanges: state.exchanges.allIds.map(id => state.exchanges.byId[id]),
  }
}

// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = (dispatch: ReduxDispatch) => ({
  loadAppData: () => dispatch(loadAppData()),
})

export const LandingScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LandingScreenContainer)

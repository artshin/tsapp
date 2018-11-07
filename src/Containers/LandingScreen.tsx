import * as React from 'react'
import { LandingScreen as LandingScreenView } from '../Components/LandingScreen'
import { Screens } from '../Containers'
import { NavigationInjectedProps, NavigationScreenProp, NavigationState } from 'react-navigation'
import { loadAppData } from '../Actions'
import { ReduxState, ReduxDispatch } from '../Reducers'
import { connect } from 'react-redux'
import { AppStatus } from '../Reducers/AppReducer'
import Reactotron from 'reactotron-react-native'

interface PropParams {
  title: string
}
interface StateParams extends NavigationState {
  params: PropParams
}
interface OwnProps {
  navigation: NavigationScreenProp<StateParams>
  loadAppData: () => void
  appFinishedLoading: boolean
}

type Props = OwnProps & NavigationInjectedProps

interface State {
  loadingAnimationFinished: boolean
}

export class LandingScreenContainer extends React.PureComponent<Props, State> {
  public static navigationOptions = {
    header: null,
  }

  constructor(props: Props) {
    super(props)

    this.state = {
      loadingAnimationFinished: false,
    }
  }

  public componentDidMount() {
    this.props.loadAppData()
    setTimeout(() => this.setState({ loadingAnimationFinished: true }), 3500 /* whatever */)
  }

  public componentDidUpdate() {
    if (this.props.appFinishedLoading && this.state.loadingAnimationFinished) {
      this.props.navigation.navigate(Screens.Exchanges)
    }
  }

  public render() {
    return <LandingScreenView loading={!this.props.appFinishedLoading} />
  }
}

const mapStateToProps = (state: ReduxState) => {
  return {
    appFinishedLoading: state.app.appStatus === AppStatus.Ready,
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

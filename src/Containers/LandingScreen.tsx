import * as React from 'react'
import { LandingScreen as LandingScreenView } from '../Components/LandingScreen'
import { Screens } from '../Containers'
import { NavigationInjectedProps, NavigationScreenProp, NavigationState } from 'react-navigation'
import { loadAppData } from '../Actions'
import { ReduxState, ReduxDispatch } from '../Reducers'
import { LoadAppStateName } from '../Reducers/AppReducer'
import { connect } from 'react-redux'
import defaultTo from 'lodash/defaultTo'
import { Toast } from 'native-base'

interface PropParams {
  title: string
}
interface StateParams extends NavigationState {
  params: PropParams
}
interface OwnProps {
  navigation: NavigationScreenProp<StateParams>
  loadAppData: () => void
  loading: boolean
  error: string | undefined
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

    setTimeout(
      () => this.setState({ loadingAnimationFinished: true }),
      __DEV__ ? 300 : 3500 /* whatever */,
    )
  }

  public componentDidUpdate(prevProps: OwnProps) {
    const { error, loading } = this.props

    if (error && prevProps.error === undefined) {
      Toast.show({
        text: error,
        buttonText: 'Okay',
        type: 'danger',
      })
    }

    if (!loading && !error && this.state.loadingAnimationFinished) {
      this.props.navigation.navigate(Screens.Home)
    }
  }

  public render() {
    return <LandingScreenView loading={this.props.loading} />
  }
}

const mapStateToProps = (state: ReduxState) => {
  const loading = defaultTo(state.loading[LoadAppStateName], true)
  const error = state.errors[LoadAppStateName]
  return {
    loading: loading && error === undefined,
    error,
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

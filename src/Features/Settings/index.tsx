import * as React from 'react'
import { NavigationInjectedProps, NavigationScreenProp, NavigationState } from 'react-navigation'
import { ReduxState, ReduxDispatch } from '../../Reducers'
import { connect } from 'react-redux'
import { SettingsScreen as SettingsScreenView } from './Components/SettingsScreen'

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

class SettingsContainer extends React.Component<Props, State> {
  public static navigationOptions = {
    header: null,
  }

  public render() {
    return <SettingsScreenView />
  }
}

const mapStateToProps = (state: ReduxState) => {
  return {}
}

// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = (dispatch: ReduxDispatch) => ({
  // getExchanges: () => dispatch(getExchanges()),
})

export const SettingsScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SettingsContainer)

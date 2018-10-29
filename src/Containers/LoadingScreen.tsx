import * as React from 'react'
import { LoadingScreen as LoadingScreenView } from '../Components/LoadingScreen'
import { NavigationInjectedProps, NavigationScreenProp, NavigationState } from 'react-navigation'

export interface LoadingPropParams {
  animated?: boolean
}
interface StateParams extends NavigationState {
  params: LoadingPropParams
}
interface OwnProps {
  navigation: NavigationScreenProp<StateParams>
}

type Props = OwnProps & NavigationInjectedProps

interface State {}

export class LoadingScreen extends React.PureComponent<Props, State> {
  public static navigationOptions = {
    header: null,
  }

  public render() {
    return <LoadingScreenView />
  }
}

import * as React from 'react'
import { LandingScreen as LandingScreenView } from '../Components/LandingScreen'
import { Screens } from '../Containers'
import { NavigationInjectedProps, NavigationScreenProp, NavigationState } from 'react-navigation'

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

export class LandingScreen extends React.PureComponent<Props, State> {
  public static navigationOptions = {
    header: null,
  }
  public componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate(Screens.Exchanges)
    }, 2000)
  }

  public render() {
    return <LandingScreenView />
  }
}

import * as React from 'react'
import { Screens } from '../Containers/Navigator'
import { ExchangesScreen as ExchangesScreenView } from '../Components/ExchangesScreen'
import { NavigationInjectedProps, NavigationScreenProp, NavigationState } from 'react-navigation'
import { LoadingPropParams } from './LoadingScreen'
import Reactotron from 'reactotron-react-native'
import { observer, inject } from 'mobx-react'

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

@inject('navigationStore')
@observer
export class ExchangesScreen extends React.Component<Props, State> {
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
    Reactotron.log(this.props)
  }
  public render() {
    return <ExchangesScreenView exchanges={[]} />
  }
}

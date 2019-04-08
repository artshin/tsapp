import * as React from 'react'
import {
  NavigationInjectedProps,
  NavigationScreenProp,
  NavigationState,
  HeaderBackButton,
  NavigationScreenProps,
} from 'react-navigation'
import { ReduxState, ReduxDispatch } from '../../Reducers'
import { connect } from 'react-redux'
import { BillScreen as BillScreenView } from './Components/BillScreen'

interface PropParams {
  title: string
}
interface StateParams extends NavigationState {
  params: PropParams
}
interface OwnProps {
  navigation: NavigationScreenProp<StateParams>
  onBackButtonPress: () => void
}

type Props = OwnProps & NavigationInjectedProps

interface State {}

/*
ActionSheet.show(
              {
                options: BUTTONS,
                cancelButtonIndex: CANCEL_INDEX,
                destructiveButtonIndex: DESTRUCTIVE_INDEX,
                title: "Testing ActionSheet"
              },
              buttonIndex => {
                this.setState({ clicked: BUTTONS[buttonIndex] });
              }
            )}
*/
interface TestProps {
  onBackButtonPress: () => void
}

class BillContainer extends React.Component<NavigationScreenProps<TestProps>, State> {
  public static navigationOptions = ({ navigation }: NavigationScreenProps<TestProps>) => {
    const onBackButtonPress = navigation.getParam('onBackButtonPress', () => navigation.goBack())
    return {
      headerLeft: <HeaderBackButton onPress={onBackButtonPress} />,
    }
  }

  componentDidMount() {
    this.props.navigation.setParams({ onBackButtonPress: this._onBackButtonPress })
  }

  public render() {
    return <BillForm />
  }

  _onBackButtonPress = () => {
    console.tron.log('fuck yea')
    this.props.navigation.goBack()
  }
}

const mapStateToProps = (state: ReduxState) => {
  return {}
}

// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = (dispatch: ReduxDispatch) => ({
  // getExchanges: () => dispatch(getExchanges()),
})

export const BillScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(BillContainer)

const BillForm = connect((state: ReduxState) => ({
  initialValues: {
    title: 'Matt Murdock',
  },
}))(BillScreenView)

import * as React from 'react'
import { NavigationInjectedProps, NavigationScreenProp, NavigationState } from 'react-navigation'
import { ReduxState, ReduxDispatch } from '../../Reducers'
import { connect } from 'react-redux'
import { BillsScreen as BillsScreenView } from './Components/BillsScreen'
import { Bill } from '../../Models/Bill'
import { Screens } from '../../Containers/Navigator'

interface PropParams {
  title: string
}
interface StateParams extends NavigationState {
  params: PropParams
}
interface OwnProps {
  navigation: NavigationScreenProp<StateParams>
  bills: Bill[]
}

type Props = OwnProps & NavigationInjectedProps

interface State {}

class BillsContainer extends React.Component<Props, State> {
  public static navigationOptions = {
    header: null,
  }

  public render() {
    return (
      <BillsScreenView
        data={this.props.bills}
        onBillPress={this._onBillPress}
        onCreateBillPress={this._onCreateBillPress}
      />
    )
  }

  private _onBillPress = (bill: Bill) => {
    this.props.navigation.navigate(Screens.Bill)
  }

  private _onCreateBillPress = () => {
    this.props.navigation.navigate(Screens.Bill)
  }
}

const mapStateToProps = (state: ReduxState) => {
  // const allBillsIds = state.resources[Bill.schema.name].allIds
  // const bills = allBillsIds.map(id => state.resources[Bill.schema.name].byId[id]) as Bill[]
  const bills: Bill[] = [
    { id: '0', title: 'Tim Hortons', total: 2234 },
    { id: '1', title: 'Fuck you Deadpool', total: 2234 },
    { id: '2', title: 'Goose the cat', total: 2234 },
    { id: '3', title: 'Tim Hortons', total: 2234 },
    { id: '4', title: 'Fuck you Deadpool', total: 2234 },
    { id: '5', title: 'Goose the cat', total: 2234 },
    { id: '6', title: 'Tim Hortons', total: 2234 },
    { id: '7', title: 'Fuck you Deadpool', total: 2234 },
    { id: '8', title: 'Goose the cat', total: 2234 },
  ]
  return {
    bills,
    // exchanges: state.exchanges.allIds.map(id => state.exchanges.byId[id]),
  }
}

// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = (dispatch: ReduxDispatch) => ({
  // getExchanges: () => dispatch(getExchanges()),
})

export const BillsScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(BillsContainer)

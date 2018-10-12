import * as React from 'react'
import { ExchangesScreen as ExchangesScreenView } from '../Components/ExchangesScreen'

interface Props {}

interface State {}

export class ExchangesScreen extends React.PureComponent<Props, State> {
  public render() {
    return <ExchangesScreenView exchanges={[]} />
  }
}

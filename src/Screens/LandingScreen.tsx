import * as React from 'react'
import { LandingScreen as LandingScreenView } from '../Components/LandingScreen'

interface Props {}

interface State {}

export class LandingScreen extends React.PureComponent<Props, State> {
  public render() {
    return <LandingScreenView />
  }
}

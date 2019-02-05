import * as React from 'react'
import { View, ViewStyle } from 'react-native'
import { styles } from './styles'
import { Text } from 'native-base'

export interface Props extends React.Props<View> {
  style?: ViewStyle
}

interface State {}

export class BillsScreen extends React.PureComponent<Props, State> {

  public render() {
    const { style } = this.props

    return (
      <View style={[styles.container, style]} />
    )
  }
}

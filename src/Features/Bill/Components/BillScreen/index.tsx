import * as React from 'react'
import { View, ViewStyle, SafeAreaView } from 'react-native'
import { styles } from './styles'

export interface Props extends React.Props<View> {
  style?: ViewStyle
}

interface State {}

export class BillScreen extends React.PureComponent<Props, State> {
  public render() {
    const { style } = this.props

    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={[styles.container, style, { backgroundColor: 'teal' }]} />
      </SafeAreaView>
    )
  }
}

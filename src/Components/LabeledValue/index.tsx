import * as React from 'react'
import { View, ViewStyle } from 'react-native'
import { Text } from 'native-base'
import { styles } from './styles'
import { Metrics } from 'Utils'

interface Props extends React.Props<View> {
  value?: string
  label?: string
  style?: ViewStyle
}

interface State {}

export class LabeledValue extends React.PureComponent<Props, State> {
  private static defaultProps = {
    label: '',
    value: '',
  }

  public render() {
    const { value, label, style } = this.props

    return (
      <View style={[styles.container, style]} padding={Metrics.smallMargin}>
        <Text style={styles.title} numberOfLines={1}>
          {value}
        </Text>
        <Text style={styles.note} note={true} numberOfLines={1}>
          {label}
        </Text>
      </View>
    )
  }
}

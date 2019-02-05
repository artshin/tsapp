import * as React from 'react'
import { View, ViewStyle } from 'react-native'
import { styles } from './styles'
import { Text } from 'native-base'

export interface Props extends React.Props<View> {
  style?: ViewStyle
  title: string
  price: number
}

interface State {}

export class BillItem extends React.PureComponent<Props, State> {
  public static defaultProps = {
    title: 'Philadelphia December 2018',
    price: 2434.74,
  }

  public render() {
    const { style, title, price } = this.props

    return (
      <View style={[styles.container, style]}>
        <View style={styles.leftContainer}>
          <Text style={styles.title}>{title}</Text>
          {/* <Text style={styles.date}>{moment(date).format('YYYY-MM-DD')}</Text> */}
        </View>

        <Text style={styles.price}>{price.toFixed(2)}</Text>
      </View>
    )
  }
}

import * as React from 'react'
import { View, TouchableOpacity, ViewStyle, Text } from 'react-native'
import { styles } from './styles'
import { Metrics, FontSizes } from '../../../../Utils'
import { Bill } from '../../../../Models/Bill'

export interface Props extends React.Props<View> {
  bill: Bill
  style?: ViewStyle
  onPress: (bill: Bill) => void
}

interface State {}

export class BillItem extends React.PureComponent<Props, State> {
  public static defaultProps = {
    onPress: () => {
      /* no-op */
    },
  }

  public render() {
    const { style, bill } = this.props

    return (
      <View style={[styles.container, style]}>
        <TouchableOpacity style={{ flex: 1 }} onPress={this._onPress}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              backgroundColor: 'white',
              justifyContent: 'space-between',
              padding: Metrics.baseMargin,
              shadowOpacity: 1,
              shadowRadius: 1,
              shadowOffset: {
                width: 0,
                height: 1,
              },
              shadowColor: 'rgba(0, 0, 0, 0.25)',
              borderRadius: Metrics.baseMargin,
            }}
          >
            <View
              style={{
                justifyContent: 'space-evenly',
                paddingLeft: Metrics.baseMargin,
              }}
            >
              <Text style={styles.title} numberOfLines={1} ellipsizeMode={'middle'}>
                {bill.title}
              </Text>
              <Text style={styles.date} numberOfLines={1}>
                {'1991-08-08'}
              </Text>
            </View>

            <View
              style={{
                paddingHorizontal: Metrics.smallMargin,
              }}
            >
              <View style={{ flexDirection: 'row', paddingVertical: Metrics.smallMargin }}>
                <Text
                  style={{
                    fontSize: FontSizes.regular,
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}
                >
                  {'$'}
                </Text>
                <Text
                  style={{
                    fontSize: FontSizes.regular,
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}
                >
                  {bill.total.toFixed(2)}
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    )
  }

  _onPress = () => {
    this.props.onPress(this.props.bill)
  }
}

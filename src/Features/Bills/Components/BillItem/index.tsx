import * as React from 'react'
import { View, TouchableOpacity, ViewStyle } from 'react-native'
import { styles } from './styles'
import { Text } from 'native-base'
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
              // borderRadius: 12,
              overflow: 'hidden',
            }}
          >
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <View
                style={{
                  flex: 4,
                  backgroundColor: 'white',
                  justifyContent: 'space-around',
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
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'space-evenly',
                  backgroundColor: 'white',
                }}
              >
                <Text
                  style={{
                    fontSize: FontSizes.medium,
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}
                >
                  {bill.total.toFixed(2)}
                </Text>
                <Text
                  style={{
                    fontSize: FontSizes.medium,
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}
                >
                  {'$'}
                </Text>
              </View>
            </View>

            <View
              style={{
                height: 0.5,
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                marginLeft: Metrics.baseMargin,
              }}
            />
          </View>
        </TouchableOpacity>
      </View>
    )
  }

  _onPress = () => {
    this.props.onPress(this.props.bill)
  }
}

import * as React from 'react'
import { View, ViewStyle, FlatList, SafeAreaView, Text, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import { BillItem } from '../BillItem'
import { Metrics, FontSizes } from '../../../../Utils'
import { Bill } from '../../../../Models/Bill'

export interface Props extends React.Props<View> {
  style?: ViewStyle
  data: Bill[]
  onBillPress: (bill: Bill) => void
  onCreateBillPress: () => void
}

interface State {}
console.disableYellowBox = true

export class BillsScreen extends React.PureComponent<Props, State> {
  public render() {
    const { style } = this.props

    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={[styles.container, style, { backgroundColor: 'white' }]}>
          <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View
              style={{
                margin: Metrics.baseMargin,
                backgroundColor: 'white',
                flex: 1,
                borderRadius: 10,
                shadowOpacity: 1,
                shadowRadius: 3,
                shadowOffset: {
                  width: 0,
                  height: 1,
                },
                shadowColor: 'rgba(0, 0, 0, 0.25)',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text style={{ fontSize: FontSizes.h4 }}>{'Split bill with ease.'}</Text>
            </View>
          </View>

          <View style={{ flex: 2.5 }}>
            <FlatList
              contentContainerStyle={{ backgroundColor: 'white' }}
              keyExtractor={this._keyExtractor}
              renderItem={this._renderItem}
              data={this.props.data}
              ListHeaderComponent={this._renderHeader}
              alwaysBounceVertical={false}
            />
          </View>
          <View
            style={{
              bottom: 3,
              height: 60,
              zIndex: 999,
              backgroundColor: 'white',
              shadowOpacity: 1,
              shadowRadius: 5,
              shadowOffset: {
                width: 0,
                height: 0,
              },
              shadowColor: 'rgba(0, 0, 0, 0.25)',
            }}
          >
            <TouchableOpacity
              onPress={this._onCreateNewBill}
              style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
            >
              <Text style={{ fontSize: FontSizes.h5 }}>{'New Bill'}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    )
  }

  _renderHeader = () => {
    return (
      <View
        style={{
          padding: Metrics.baseMargin,
          justifyContent: 'center',
        }}
      >
        <Text style={{ fontSize: FontSizes.h6 }}>{'Bills'}</Text>
      </View>
    )
  }

  private _keyExtractor = (item: { id: string }) => item.id

  private _renderItem = ({ item }: { item: Bill }) => {
    return <BillItem bill={item} onPress={this._onBillPress} />
  }

  private _onBillPress = (bill: Bill) => this.props.onBillPress(bill)
  private _onCreateNewBill = () => this.props.onCreateBillPress()
}

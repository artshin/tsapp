import * as React from 'react'
import { View, ViewStyle, FlatList, SafeAreaView, Text, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import { BillItem } from '../BillItem'
import { Metrics, FontSizes } from '../../../../Utils'
import { Bill } from '../../../../Models/Bill'
import Icon from 'react-native-vector-icons/Entypo'

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
          {this._renderHeroCard()}
          {this._renderHeader()}
          <View style={{ flex: 2.5, backgroundColor: '#f5f5f5' }}>
            <FlatList
              contentContainerStyle={{ backgroundColor: '#f5f5f5' }}
              keyExtractor={this._keyExtractor}
              renderItem={this._renderItem}
              data={this.props.data}
              alwaysBounceVertical={false}
            />
          </View>
        </View>
      </SafeAreaView>
    )
  }

  _renderHeroCard = () => {
    return (
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
    )
  }

  _renderHeader = () => {
    return (
      <View
        style={{
          padding: Metrics.baseMargin,
          justifyContent: 'space-evenly',
          flexDirection: 'row',
          borderBottomColor: '#c2c2c2',
          borderBottomWidth: 1,
        }}
      >
        <View style={{ flex: 1 }}>
          <Text
            style={{
              fontSize: FontSizes.h6,
              fontWeight: 'bold',
              paddingHorizontal: Metrics.baseMargin,
            }}
          >
            {'Bills'}
          </Text>
        </View>
        <TouchableOpacity
          onPress={this._onCreateNewBill}
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'flex-end',
            paddingHorizontal: Metrics.baseMargin,
          }}
        >
          <Icon name={'plus'} size={FontSizes.regular} color={'blue'} />
          <Text
            style={{
              fontSize: FontSizes.regular,
              textAlign: 'right',
              color: 'blue',
            }}
          >
            {'New Bill'}
          </Text>
        </TouchableOpacity>
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

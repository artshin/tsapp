import * as React from 'react'
import { View, ViewStyle, FlatList, SafeAreaView } from 'react-native'
import { styles } from './styles'
import { BillItem } from '../BillItem'

interface BillScreenItem {
  id: string
  title: string
}

export interface Props extends React.Props<View> {
  style?: ViewStyle
  data: BillScreenItem[]
}

interface State {}

export class BillsScreen extends React.PureComponent<Props, State> {
  public render() {
    const { style } = this.props

    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={[styles.container, style]}>
          <FlatList
            keyExtractor={this._keyExtractor}
            renderItem={this._renderItem}
            data={this.props.data}
          />
        </View>
      </SafeAreaView>
    )
  }

  private _keyExtractor = (item: { id: string }) => item.id

  private _renderItem = ({ item }) => {
    return <BillItem />
  }
}

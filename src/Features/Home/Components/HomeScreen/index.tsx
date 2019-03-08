import * as React from 'react'
import { View, ViewStyle, FlatList, TouchableOpacity, Text } from 'react-native'
import { styles } from './styles'

export interface Props extends React.Props<View> {
  style?: ViewStyle
}

interface State {
  blurredViewWidth: number
  blurredViewHeight: number
}

export class HomeScreen extends React.PureComponent<Props, State> {
  private data: any[] = []

  constructor(props: Props) {
    super(props)

    for (let i = 0; i < 10; i++) {
      this.data.push({ key: i.toFixed() })
    }

    this.state = {
      blurredViewWidth: 0,
      blurredViewHeight: 0,
    }
  }

  public render() {
    const { style } = this.props

    return (
      <View style={[styles.container, style]}>
        <View style={styles.contentContainer}>
          <FlatList
            data={this.data}
            keyExtractor={this.keyExtractor}
            renderItem={this.renderItem}
            ListHeaderComponent={this.renderHeader}
            ListFooterComponent={this.renderFooter}
          />
        </View>
        <View style={styles.tabBarContainer}>
          <TouchableOpacity style={styles.tabBarButtonLeft}>
            <Text style={styles.tabBarButtonTitle}>Bills</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabBarButtonRight}>
            <Text style={styles.tabBarButtonTitle}>Contacts</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  private renderHeader = () => {
    return <View style={{ height: 100 }} />
  }

  private renderFooter = () => {
    return <View style={{ height: 100 }} />
  }

  private renderItem = ({ item }: any) => {
    return (
      <View
        style={{
          height: 100,
          backgroundColor: 'green',
          marginLeft: 10,
          marginRight: 40,
          marginVertical: 10,
        }}
      />
    )
  }

  private keyExtractor = (item: any, _: number) => item.key
}

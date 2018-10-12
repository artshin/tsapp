import React, { Component } from 'react'
import { View, FlatList, Animated } from 'react-native'
import { LabeledValue } from '../LabeledValue'
import {
  Container,
  Content,
  Thumbnail,
  Text,
  Left,
  Grid,
  Col,
  ListItem,
  Right,
  Tabs,
  TabHeading,
  Tab,
  Icon,
  Row,
} from 'native-base'
import { ExchangePair } from 'Models'
import { Metrics } from '../../Utils'

enum ScreenMode {
  List = 0,
  Grid,
}

interface Props {
  exchangeName?: string
  exchangeInfo?: string
  pairs: ExchangePair[]
}

interface State {
  screenMode: ScreenMode
  scrollY: Animated.Value
  offsetY: number
}

// interface OnChangeTabParams {
//   i: number
//   ref: any
//   from: number
// }

export class ExchangeScreen extends Component<Props, State> {
  public static defaultProps = {
    exchangeName: undefined,
    exchangeInfo: undefined,
    pairs: [],
  }

  constructor(props: Props) {
    super(props)

    this.state = {
      screenMode: ScreenMode.List,
      scrollY: new Animated.Value(0),
      offsetY: 0,
    }
  }

  public render() {
    const { pairs } = this.props
    const { screenMode } = this.state

    return (
      <View style={{ flex: 1 }}>
        {this.renderHeader()}
        <Tabs locked initialPage={screenMode}>
          <Tab
            heading={
              <TabHeading>
                <Icon type={'FontAwesome'} name={'list'} />
              </TabHeading>
            }
          >
            <FlatList
              key={'list'}
              data={pairs}
              numColumns={1}
              keyExtractor={this.keyExtractor}
              renderItem={this.renderRowItem}
              style={{ height: 300 }}
              onScroll={Animated.event([
                { nativeEvent: { contentOffset: { y: this.state.scrollY } } },
              ] as any)}
            />
          </Tab>
          <Tab
            heading={
              <TabHeading>
                <Icon type={'MaterialCommunityIcons'} name={'grid'} />
              </TabHeading>
            }
          >
            <FlatList
              key={'grid'}
              data={pairs}
              numColumns={3}
              keyExtractor={this.keyExtractor}
              renderItem={this.renderColumnItem}
              onScroll={this.onListScroll}
            />
          </Tab>
        </Tabs>
      </View>
    )

    return (
      <Container>
        <Content scrollEnabled={false} />
      </Container>
    )
  }

  private onListScroll = () =>
    Animated.event([{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }] as any)

  private keyExtractor = (item: ExchangePair) => item.id

  private renderRowItem = ({ item }: { item: ExchangePair }) => (
    <ListItem>
      <Left>
        <Text>{item.name}</Text>
      </Left>
      <Right style={{ flex: 1 }}>
        <Text>{item.price.toFixed(8)} BTC</Text>
      </Right>
    </ListItem>
  )

  private renderColumnItem = ({ item }: { item: ExchangePair }) => (
    <LabeledValue label={item.name} value={item.price.toString()} style={{ flex: 1, height: 80 }} />
  )

  private renderHeader = () => {
    const { exchangeName, exchangeInfo } = this.props

    return (
      <View
        style={{
          minHeight: 135,
          maxHeight: 170,
          backgroundColor: 'white',
          shadowOpacity: 0.15,
          shadowRadius: 2,
          shadowOffset: {
            height: 2,
          },
        }}
      >
        <Grid>
          <Row>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                padding: Metrics.baseMargin,
              }}
            >
              <Thumbnail source={require('../../Assets/Images/launch-icon.png')} />
            </View>
            <Col
              style={{
                paddingLeft: Metrics.baseMargin,
              }}
            >
              <Row style={{ alignItems: 'flex-end' }}>
                <Text>{exchangeName}</Text>
              </Row>
              <View />
              <Row style={{ alignItems: 'flex-start' }}>
                <Text note>{exchangeInfo}</Text>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col>
              <LabeledValue />
            </Col>
            <Col>
              <LabeledValue />
            </Col>
            <Col>
              <LabeledValue />
            </Col>
          </Row>
        </Grid>
      </View>
    )
  }
}

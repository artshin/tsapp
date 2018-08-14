/* @flow */
import React, { Component } from 'react'
import { View, FlatList } from 'react-native'
import { LabeledValue } from 'Components/LabeledValue'
import {
  Container,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Grid,
  Col,
  ListItem,
  Right,
  Tabs,
  TabHeading,
  Tab,
  Icon,
} from 'native-base'
import { ExchangePair } from 'Models'

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
}

interface OnChangeTabParams {
  i: number
  ref: any
  from: number
}

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
    }
  }

  public render() {
    return (
      <Container>
        <Content>{this.renderList()}</Content>
      </Container>
    )
  }

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
    <LabeledValue
      label={item.name}
      value={item.price.toString()}
      style={{ flex: 1, height: 80 }}
    />
  )

  private onChangeTab = ({ i }: OnChangeTabParams) =>
    this.setState({ screenMode: i })

  private renderListHeader = () => {
    const { exchangeName, exchangeInfo } = this.props
    const { screenMode } = this.state

    return (
      <View>
        <Card transparent>
          <CardItem>
            <Left>
              <Thumbnail source={require('Images/launch-icon.png')} />
              <Body>
                <Text>{exchangeName}</Text>
                <Text note>{exchangeInfo}</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem>
            <Grid>
              <Col>
                <LabeledValue />
              </Col>
              <Col>
                <LabeledValue />
              </Col>
              <Col>
                <LabeledValue />
              </Col>
            </Grid>
          </CardItem>
        </Card>
        <Tabs locked onChangeTab={this.onChangeTab} initialPage={screenMode}>
          <Tab
            heading={
              <TabHeading>
                <Icon type={'FontAwesome'} name={'list'} />
              </TabHeading>
            }
          />
          <Tab
            heading={
              <TabHeading>
                <Icon type={'MaterialCommunityIcons'} name={'grid'} />
              </TabHeading>
            }
          />
        </Tabs>
      </View>
    )
  }

  private renderList = () => {
    const { pairs } = this.props

    switch (this.state.screenMode) {
      case ScreenMode.List:
        return (
          <FlatList
            key={'list'}
            data={pairs}
            numColumns={1}
            keyExtractor={this.keyExtractor}
            ListHeaderComponent={this.renderListHeader}
            renderItem={this.renderRowItem}
          />
        )
      case ScreenMode.Grid:
        return (
          <FlatList
            key={'grid'}
            data={pairs}
            numColumns={3}
            keyExtractor={this.keyExtractor}
            ListHeaderComponent={this.renderListHeader}
            renderItem={this.renderColumnItem}
          />
        )
        break
      default:
        return null
    }
  }
}

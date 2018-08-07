/* @flow */
import * as React from 'react'
import { FlatList, View } from 'react-native'
import {
  Container,
  Thumbnail,
  Content,
  Card,
  CardItem,
  Text,
  Left,
  H3,
  ListItem,
  StyleProvider,
  Body,
} from 'native-base'
import { styles } from './styles'
import currency from 'currency.js'
import { LabeledValue } from 'Components/LabeledValue'
// import getTheme from '../../native-base-theme/components'

type CurrencyNumber = currency

interface Currency {
  id: string
  name: string
}

interface CurrencyPair {
  id: string
  name: string
  baseCurrency: Currency
  quoteCurrency: Currency
  price: CurrencyNumber
}

interface Exchange {
  id: string
  name: string
  pairs: CurrencyPair[]
  website: string
}

interface Props {
  exchanges: Exchange[]
}

const VerticalSeparator = () => (
  <View
    style={{
      backgroundColor: '#c9c9c9',
      width: 0.5,
      marginVertical: 10,
      height: '40%',
    }}
  />
)
const HorizontalSeparator = () => (
  <View style={{ backgroundColor: '#c9c9c9', height: 0.5, marginTop: 10 }} />
)

export class ExchangesScreen extends React.PureComponent<Props> {
  public render() {
    const { exchanges } = this.props

    return (
      // <StyleProvider style={getTheme()}>
      <Container>
        <Content>
          <FlatList
            data={exchanges}
            keyExtractor={this.keyExtractor}
            renderItem={this.renderItem}
          />
        </Content>
      </Container>
      // </StyleProvider>
    )
  }

  private renderItem = ({ item }: { item: Exchange }) => (
    <Card transparent={true}>
      <CardItem>
        <Left>
          <Thumbnail source={require('../Images/launch-icon.png')} small />
          <Body>
            <H3>{item.name}</H3>
            <Text note={true}>binance.com</Text>
          </Body>
        </Left>
      </CardItem>
      <CardItem cardBody={true}>
        <LabeledValue />
        <VerticalSeparator />
        <LabeledValue />
        <VerticalSeparator />
        <LabeledValue />
      </CardItem>
      <HorizontalSeparator />
    </Card>
  )

  private keyExtractor = (item: Exchange) => item.id
}

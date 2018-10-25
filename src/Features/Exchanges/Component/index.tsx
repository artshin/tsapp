/* @flow */
import * as React from 'react'
import { FlatList, View } from 'react-native'
import { Container, Thumbnail, Content, Card, CardItem, Text, Left, H3, Body } from 'native-base'
import { LabeledValue, Props as LabeledValueProps } from '../../../Components/LabeledValue'
import { Exchange } from '../../../Models'

interface Props {
  exchanges: Exchange[]
  labeledValuePlaceholder?: LabeledValueProps
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
  public static defaultProps = {
    labeledValuePlaceholder: {
      label: '-',
      value: '-',
    },
  }

  public render() {
    const { exchanges } = this.props

    return (
      <Container>
        <Content>
          <FlatList
            data={exchanges}
            keyExtractor={this.keyExtractor}
            renderItem={this.renderItem}
          />
        </Content>
      </Container>
    )
  }

  private keyExtractor = (item: Exchange) => item.id

  private renderItem = ({ item }: { item: Exchange }) => (
    <Card transparent={true}>
      <CardItem>
        <Left>
          <Thumbnail source={require('../../../Assets/Images/launch-icon.png')} small />
          <Body>
            <H3>{item.name}</H3>
            <Text note={true}>{item.website}</Text>
          </Body>
        </Left>
      </CardItem>
      <CardItem cardBody={true}>
        {this.renderCurrencyPairPrice(0, item)}
        <VerticalSeparator />
        {this.renderCurrencyPairPrice(1, item)}
        <VerticalSeparator />
        {this.renderCurrencyPairPrice(2, item)}
      </CardItem>
      <HorizontalSeparator />
    </Card>
  )

  private renderCurrencyPairPrice = (pairIndex: number, exchange: Exchange) => {
    const placeholder =
      this.props.labeledValuePlaceholder || ExchangesScreen.defaultProps.labeledValuePlaceholder

    const { pairs } = exchange

    const label = pairs.length > pairIndex ? pairs[pairIndex].pairName : placeholder.label
    const value = pairs.length > pairIndex ? pairs[pairIndex].price.toString() : placeholder.value

    return <LabeledValue label={label} value={value} />
  }
}

import * as React from 'react'
import { View, ActivityIndicator, Text } from 'react-native'
import { styles } from './styles'
import { MaterialColors } from '../../Utils'

interface Quote {
  text: string
  author: string
}

interface Props {
  loading: boolean
}

interface State {}

export class LandingScreen extends React.PureComponent<Props, State> {
  private quotes: Quote[] = [
    {
      text:
        'Here, you learn what it is to be human. You are a creator of order, of beautiful shapes and systems, an organizer of chaos.',
      author: 'Frank Herber. Dune',
    },
    {
      text:
        'And always, he fought the temptation to choose a clear, safe course, warning "That path leads ever down into stagnation."',
      author: 'Frank Herber. Dune',
    },
    {
      text: 'The mind commands the body and it obeys. The mind orders itself and meets resistance.',
      author: 'Stolen Journals',
    },
    {
      text:
        'Поднял. Опрокинул. Ожегся. Жиром колбасным ожог заврачевал. Сразу плеснул по новой. Еще. Нужно. Необходимо. По трезвости смерть слишком непостижима. Она, как и любовь, только пьяным настоящей кажется.',
      author: 'Dmitriy Gluhkovsky. Text',
    },
    {
      text:
        'She little knew the unsolvable mystery that he was even to himself—to himself most of all',
      author: 'Theodore Dreiser. The Titan',
    },
  ]

  public render() {
    const quote = this.getRandomQuote()
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>{quote.text}</Text>
          <Text style={styles.subtitle}>{quote.author}</Text>
        </View>
        <ActivityIndicator
          hidesWhenStopped
          size={'large'}
          color={MaterialColors.SecondaryLight}
          animating={this.props.loading}
        />
      </View>
    )
  }

  private getRandomQuote = (): Quote => {
    const min = 0
    const max = this.quotes.length
    const randomInt = Math.floor(Math.random() * (max - min)) + min

    return this.quotes[randomInt]
  }
}

import * as React from 'react'
import { View, Text } from 'react-native'
// import { styles } from 'Templates/styles'

interface Props {}

interface State {}

export class LandingScreen extends React.PureComponent<Props, State> {
  public render() {
    return (
      <View>
        <Text>{'Hey there'}</Text>
      </View>
    )
  }
}

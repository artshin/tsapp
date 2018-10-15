import * as React from 'react'
import { Animated, Easing, View } from 'react-native'
import { styles } from './styles'
import { Icon } from 'native-base'

interface Props {}

interface State {
  iconOpacity: Animated.Value
}

export class LoadingScreen extends React.PureComponent<Props, State> {
  public state = {
    iconOpacity: new Animated.Value(0),
  }

  public componentDidMount() {
    this.playLoadingAnimation()
  }

  public render() {
    const { iconOpacity } = this.state

    return (
      <View style={styles.container}>
        <Animated.View style={[styles.container, { opacity: iconOpacity }]}>
          <Icon style={styles.icon} type={'Entypo'} name={'code'} fontSize={50} />
        </Animated.View>
      </View>
    )
  }

  private playLoadingAnimation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(this.state.iconOpacity, {
          easing: Easing.in(Easing.ease),
          toValue: 1,
          duration: 1500,
          useNativeDriver: true,
        }),
        Animated.timing(this.state.iconOpacity, {
          easing: Easing.out(Easing.ease),
          toValue: 0,
          duration: 1500,
          useNativeDriver: true,
        }),
      ]),
    ).start()
  }
}

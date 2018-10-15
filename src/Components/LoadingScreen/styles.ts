import { ViewStyle, TextStyle, StyleSheet } from 'react-native'

interface Style {
  container: ViewStyle
  icon: TextStyle
}

export const styles = StyleSheet.create<Style>({
  container: {
    backgroundColor: 'black',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    color: 'white',
  },
})

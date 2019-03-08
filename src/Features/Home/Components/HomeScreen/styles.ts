import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 0.9,
    backgroundColor: 'red',
  },
  tabBarContainer: {
    flex: 0.1,
    backgroundColor: 'blue',
    flexDirection: 'row',
  },
  tabBarButtonLeft: {
    flex: 1,
    backgroundColor: 'yellow',
    paddingLeft: 30,
    paddingRight: 10,
    justifyContent: 'center',
  },
  tabBarButtonRight: {
    flex: 1,
    backgroundColor: 'yellow',
    paddingLeft: 10,
    paddingRight: 30,
    justifyContent: 'center',
  },
  tabBarButtonTitle: {
    fontSize: 18,
    textAlign: 'center',
    backgroundColor: 'green',
  },
  blurredView: {
    backgroundColor: 'blue',
    flex: 1,
  },
})

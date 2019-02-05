import { StyleSheet } from 'react-native'
import { Metrics, FontSizes } from '../../Utils'

export const styles = StyleSheet.create({
  container: {
    height: 75,
    alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: 'red',
    padding: Metrics.baseMargin,
    flexDirection: 'row',
  },
  title: {
    backgroundColor: 'blue',
    flex: 1,
    fontSize: FontSizes.regular,
  },
  price: {
    backgroundColor: 'green',
    flex: 0.25,
    textAlign: 'center',
    fontSize: FontSizes.h6,
  },
  date: {
    backgroundColor: 'brown',
    flex: 1,
    textAlign: 'left',
    fontSize: FontSizes.medium,
  },
  leftContainer: {
    flex: 0.75,
  },
})

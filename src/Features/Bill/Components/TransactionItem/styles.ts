import { StyleSheet } from 'react-native'
import { Metrics, FontSizes } from '../../../../Utils'

export const styles = StyleSheet.create({
  container: {
    height: 80,
    // alignItems: 'center',
    // justifyContent: 'center',
    // backgroundColor: 'red',
    // paddingHorizontal: Metrics.baseMargin,
    paddingTop: 5,
    // paddingBottom: 15,
  },
  title: {
    backgroundColor: 'white',
    // flex: 1,
    fontSize: FontSizes.regular,
  },
  price: {
    backgroundColor: 'green',
    flex: 0.25,
    textAlign: 'center',
    fontSize: FontSizes.h6,
  },
  date: {
    // backgroundColor: 'brown',
    textAlign: 'left',
    fontSize: FontSizes.small,
    fontWeight: '200',
  },
  leftContainer: {
    flex: 0.75,
  },
})

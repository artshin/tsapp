import { StyleSheet } from 'react-native'
import { MaterialColors, Metrics, FontSizes } from '../../Utils'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: MaterialColors.PrimaryDark,
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    padding: Metrics.doubleBaseMargin,
  },
  title: {
    color: MaterialColors.PrimaryText,
    textAlign: 'left',
    marginTop: '20%',
    marginBottom: Metrics.doubleBaseMargin,
    fontSize: FontSizes.regular,
  },
  subtitle: {
    color: MaterialColors.PrimaryText,
    textAlign: 'right',
    fontSize: FontSizes.medium,
  },
})

import { StyleSheet } from 'react-native'
import { Metrics } from '../../Utils'

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    marginBottom: Metrics.smallMargin,
  },
  note: {
    marginBottom: Metrics.smallMargin,
  },
})

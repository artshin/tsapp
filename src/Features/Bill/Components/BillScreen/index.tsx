import * as React from 'react'
import {
  View,
  ViewStyle,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  FlatList,
  Text,
} from 'react-native'
import { styles } from './styles'
import { Field, reduxForm, InjectedFormProps, WrappedFieldProps } from 'redux-form'
import { Metrics, FontSizes } from '../../../../Utils'
import Icon from 'react-native-vector-icons/Entypo'
import { Transaction } from '../../../../Models/Transaction'
import { TransactionItem } from '../TransactionItem'

export interface Props {
  style?: ViewStyle
  transactions: Transaction[]
}

interface State {}

interface ToggleToEditTextInputProps extends WrappedFieldProps {}
interface ToggleToEditTextInputState {
  editable: boolean
}
class ToggleToEditTextInput extends React.PureComponent<
  ToggleToEditTextInputProps,
  ToggleToEditTextInputState
> {
  state = {
    editable: false,
  }

  private _titleInput: TextInput | null = null

  componentDidUpdate(_: any, prevState: ToggleToEditTextInputState) {
    if (!prevState.editable && this.state.editable && this._titleInput) {
      this._titleInput.focus()
    }
  }

  render() {
    const {
      input: { value, onBlur, onChange },
    } = this.props
    const { editable } = this.state
    const iconName = editable ? 'check' : 'pencil'

    return (
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: 'white',
          paddingHorizontal: Metrics.baseMargin,
        }}
      >
        <View style={{ flex: 0.85, paddingVertical: Metrics.baseMargin }}>
          <TextInput
            ref={textInput => (this._titleInput = textInput)}
            style={{ height: 40, fontSize: FontSizes.h6 }}
            placeholder={'Title'}
            editable={editable}
            value={value}
            onBlur={onBlur}
            keyboardType={'decimal-pad'}
            onChange={onChange}
            selectTextOnFocus
          />
        </View>
        <View style={{ flex: 0.15 }}>
          <TouchableOpacity
            onPress={this._toggleEditable}
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <Icon name={iconName} size={20} color={'black'} />
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  _toggleEditable = () => this.setState({ editable: !this.state.editable })
}

// tslint:disable-next-line max-classes-per-file
class BillScreenForm extends React.PureComponent<Props & InjectedFormProps<{}, Props>, State> {
  state = {
    editMode: undefined,
  }

  private _titleInput: TextInput | null = null

  public render() {
    const { style } = this.props
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View
          style={{
            paddingVertical: Metrics.baseMargin,
            backgroundColor: 'white',
            borderBottomWidth: 1,
            borderColor: '#c2c2c2',
          }}
        >
          <Field
            name={'title'}
            component={ToggleToEditTextInput}
            type={'text'}
            props={{ editMode: this.state.editMode }}
          />
          <View style={{ padding: Metrics.baseMargin }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Transactions</Text>
          </View>
        </View>
        <View style={{ backgroundColor: '#f5f5f5', flex: 1, paddingBottom: Metrics.baseMargin }}>
          <FlatList
            data={this.props.transactions}
            keyExtractor={this._keyExtractor}
            renderItem={this._renderTransaction}
            inverted
            alwaysBounceVertical={false}
          />
        </View>
        <View
          style={{
            paddingTop: Metrics.baseMargin * 2,
            justifyContent: 'center',
            alignItems: 'center',
            borderTopWidth: 1,
            borderColor: '#c2c2c2',
          }}
        >
          <TouchableOpacity style={{ alignItems: 'center' }}>
            <Icon name={'circle-with-plus'} size={50} color={'black'} />
            <Text>{'NEW TRANSACTION'}</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    )
  }

  _keyExtractor = (item: Transaction) => item.id

  _renderTransaction = ({ item }: { item: Transaction }) => {
    return <TransactionItem transaction={item} />
  }
}

export const BillScreen = reduxForm<{}, Props>({
  form: 'userForm',
})(BillScreenForm)

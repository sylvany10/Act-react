import React, { Key } from 'react'
import { TextInput, View, } from 'react-native'
import { style } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { PRIMARY_COLOR } from '../commons/constants';

//interface - props
interface Props {
  placeholder: string;
  handleSetValues: (key: string, value: string) => void;
  name: string;
  isPassword?: boolean;
  hasIcon?: boolean;
  accionIcon?:()=> void,
}

export const ImputComponent = ({ placeholder, handleSetValues, name, isPassword = false, hasIcon = false, accionIcon }: Props) => {
  return (
    <View>
      {
        (hasIcon)
        ?<Icon
        name='visibility'
        size={22}
        color={PRIMARY_COLOR} 
        onPress={accionIcon}
        style={style.iconPassword}/>
        :null
      }

      <TextInput
        placeholder={placeholder}
        keyboardType='default'
        onChangeText={(value) => handleSetValues(name, value)}
        secureTextEntry={isPassword}
        style={style.immputText}
      />
    </View>

  )
}

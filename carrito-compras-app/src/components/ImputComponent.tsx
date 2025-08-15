import React from 'react';
import { TextInput, View } from 'react-native';
import { INPUT_COLOR, PRIMARY_COLOR } from '../commons/constants';
import { styles } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/MaterialIcons';
//interface - props
interface Props {
    placeholder: string,
    handleSetValues: (name: string, value: string) => void;
    name: string;
    isPassword?: boolean; //propiedad opcional
    hasIcon?: boolean;
    accionIcon?: () => void;
}

export const InputComponent = ({ placeholder, handleSetValues, name, isPassword = false, hasIcon = false, accionIcon }: Props) => {
    console.log(name);

    return (
        <View>
            {
                (hasIcon)
                    ? <Icon
                        name='visibility'
                        size={20}
                        color={PRIMARY_COLOR}
                        onPress={accionIcon}
                        style={styles.iconPassword} />
                    :
                    null
            }


            <TextInput
                placeholder={placeholder}
                keyboardType='default'
                onChangeText={(value) => handleSetValues(name, value)}
                secureTextEntry={isPassword}
                style={styles.inputText}
            />
        </View>
    )
}

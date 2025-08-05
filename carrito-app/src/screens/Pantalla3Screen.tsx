import React from 'react';
import { Button, Text, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { styles } from '../theme/appTheme';

//interface - props de navegación
interface Props extends StackScreenProps<any, any> { };

export const Pantalla3Screen = ({ navigation }: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pantalla 3</Text>
      <Button
        title='Regresar'
        onPress={() => navigation.pop} />
      <Button
        title='Ir a home'
        onPress={() => navigation.popToTop()} />
    </View>
  )
}

import React from 'react';
import { Button, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { CommonActions, useNavigation } from '@react-navigation/native';

export const Pantalla2Screen = () => {
  //hook useNavigation: navegar de una página a otra
  const navigation =  useNavigation ();
  return (
    <View style={styles.globalMargin}>
        <Text style={styles.title}>Iniciar Sesión</Text>
        <TextInput placeholder='Usuario' style={styles.input} />
        <TextInput placeholder="Contraseña" secureTextEntry style={styles.input} />
        
        <Button
          title='Ir a página 1'
          onPress={()=> navigation.dispatch(CommonActions.navigate({name: 'Pantalla1'}))}/>   

        <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Ingresar</Text>
          </TouchableOpacity>    
        
        
      
    </View>
  )
}

import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { Button, Text, TextInput, TouchableOpacity, View, } from 'react-native';
import { styles } from '../theme/appTheme';

//interface - propsde navegación
interface Props extends StackScreenProps<any, any> { };
export const Pantalla1Screen = ({ navigation }: Props) => {
  //console.log(props);

  return (
    <View style={styles.globalMargin} >
      <Text style={styles.title}>Registro de Usuario</Text>
      <TextInput placeholder="Correo electrónico" keyboardType="email-address" style={styles.input} />
      <TextInput placeholder="Nombre de usuario" style={styles.input} />
      <TextInput placeholder="Contraseña" secureTextEntry style={styles.input} />
      
      <Button
        title='Ir pagina 2'
        onPress={() => navigation.navigate('Pantalla2')}
      />
      
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Registrarse</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Pantalla2')}>
        <Text style={styles.linkText}>¿Ya tienes una cuenta? Inicia sesión ahora</Text>
      </TouchableOpacity>
    </View>
  )
}



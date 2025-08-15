import { StackScreenProps } from '@react-navigation/stack';
import React, { useState } from 'react';
import { Button, Text, TextInput, TouchableOpacity, View, } from 'react-native';
import { styles } from '../theme/appTheme';

//interface - propsde navegación
interface Props extends StackScreenProps<any, any> { };
export const Pantalla1Screen = ({ navigation }: Props) => {
  //console.log(props);

const [hiddenPasword, setHiddenPasword] = useState<boolean>(true);

  // Estados para almacenar los datos
  const [email, setEmail] = useState('');
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');

  const registrarUsuario = () => {
    console.log('Registro de Usuario:');
    console.log('Correo:', email);
    console.log('Usuario:', usuario);
    console.log('Contraseña:', password);
  };
  return (
    <View style={styles.globalMargin} >
      <Text style={styles.title}>Registro de Usuario</Text>
      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Nombre de usuario"
        value={usuario}
        onChangeText={setUsuario}

      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.button} onPress={registrarUsuario}>
        <Text style={styles.buttonText}>Registrarse</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Pantalla2')}>
        <Text style={styles.linkText}>¿Ya tienes una cuenta? Inicia sesión ahora</Text>
      </TouchableOpacity>
    </View>
  );
};



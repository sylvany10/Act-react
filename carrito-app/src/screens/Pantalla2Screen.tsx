import React, { useState } from 'react';
import { Button, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { CommonActions, useNavigation } from '@react-navigation/native';

export const Pantalla2Screen = () => {
  //hook useNavigation: navegar de una página a otra
  const navigation = useNavigation();

  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');

  const iniciarSesion = () => {
    console.log('Inicio de Sesión:');
    console.log('Usuario:', usuario);
    console.log('Contraseña:', password);
  };

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Iniciar Sesión</Text>

      <TextInput
        style={styles.input}
        placeholder='Usuario'
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

      <TouchableOpacity style={styles.button} onPress={iniciarSesion}>
        <Text style={styles.buttonText}>Ingresar</Text>
      </TouchableOpacity>

    </View>
  );
};

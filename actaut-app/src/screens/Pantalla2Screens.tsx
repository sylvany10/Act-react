import React, { useState } from 'react'
import { Alert, Button, TextInput, View } from 'react-native'
import { Text } from 'react-native-gesture-handler'
import { styles } from '../theme/app.Theme'
import { useNavigation } from '@react-navigation/native'


export const Pantalla2Screens = () => {
  const navigation= useNavigation ();
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [resultado, setResultado] = useState('');

  const dividir = () => {
    const a = parseFloat(num1.trim());
    const b = parseFloat(num2.trim());
    //validación
    if (isNaN(a) || isNaN(b)) {
      Alert.alert('Ingrese números válidos');
      return;
    }

    if (a === 0 && b === 0) {
      setResultado('INDETERMINACIÓN');
      return;
    }

    if (b === 0) {
      setResultado('NO EXISTE DIVISIÓN PARA CERO');
      return;
    }

    const res = a / b;
    setResultado(`Resultado: ${res}`);
  };

  return (
    <View style={styles.container}>
        <TextInput style={styles.input}
        placeholder="Número 1"
        keyboardType="numeric"
        value={num1}
        onChangeText={setNum1}
        />

        <TextInput style={styles.input}
        placeholder="Número 2"
        keyboardType="numeric"
        value={num2}
        onChangeText={setNum2}
        />

        <Button 
        title="Dividir" 
        onPress={dividir} 
        />

         {resultado !== '' && <Text style={styles.result}>{resultado}</Text>}
    </View>
  )
}

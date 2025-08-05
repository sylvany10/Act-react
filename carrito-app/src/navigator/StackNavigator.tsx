import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Pantalla1Screen } from '../screens/Pantalla1Screen';
import { Pantalla3Screen } from '../screens/Pantalla3Screen';
import { Pantalla2Screen } from '../screens/Pantalla2Screen';

const Stack = createStackNavigator();

export const StackNavigator =  () => {
    return (
    <Stack.Navigator>
      <Stack.Screen name="Pantalla1" options={{title:'Registro de Usuario'}} component={Pantalla1Screen} />
      <Stack.Screen name="Pantalla2" options={{title:'Inicio de sesión'}} component={Pantalla2Screen} />
      <Stack.Screen name="Pantalla3" component={Pantalla3Screen} />
    </Stack.Navigator>
  );
};

//initialRouteName='Pantalla2' define el inicio de la navegación


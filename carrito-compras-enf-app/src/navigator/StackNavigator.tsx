import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../screens/LoginScreen';

import { PRIMARY_COLOR } from '../commons/constants';
import { HomeScreen } from '../screens/HomeScreen';
import { useState } from 'react';
import { RegisterScreen } from '../screens/RegisterScreen';

//interface - arreglo usuarios
export interface User {
  id: number;
  email: string;
  user: string;
  password: string;
}


const Stack = createStackNavigator();
export const StackNavigator = () => {
  //arreglo de usuarios para iniciar sesión
  const users: User[] = [
    { id: 1, user: 'Silvana', email: 'sylvana@gmail.com', password: '1234' },
    { id: 1, user: 'Juan', email: 'juan@gmail.com', password: '2345' },
  ];

  // hook useState: manipulación del arreglo con la lista de usuarios
  const [listUsers, setListUsers] = useState(users);

  //función permite añadir nuevos usuarios al arreglo
  const handleAddUser=(user: User)=>{
    //añadir nuevos elementos en el listUsers
    //operador propagación  ... crear una copia del arreglo
    setListUsers([...listUsers, user]);
  }

  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: PRIMARY_COLOR
        }
      }}>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Login"
        children={()=> <LoginScreen users={listUsers}/>} />

      <Stack.Screen
        options={{ headerShown: false }}
        name="Register"
        component={RegisterScreen}/>
        
      <Stack.Screen
        options={{ headerShown: false }}
        name="Home"
        component={HomeScreen} />
    </Stack.Navigator>
  );
}
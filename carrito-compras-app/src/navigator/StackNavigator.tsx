import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../screens/LoginScreen';
import { PRIMARY_COLOR } from '../commons/constants';
import { RegisterScreen } from '../screens/RegisterScreen';
import { useState } from 'react';
import { HomeScreen } from '../screens/HomeScreen/HomeScreen';


//interface - arreglo usuario
export interface User {
    id: number;
    name: string;
    password: string;
}
const Stack = createStackNavigator();
export const StackNavigator = () => {
    // arreglo de usuarios para el inicio de sesión
    const users: User[] = [
        { id: 1, name: 'Silvanita', password: '1234' },
        { id: 2, name: 'Juanca', password: 'abcd' },
    ];

    //hook use state: manipulación del arreglo con la lista de usuarios
    const [listUsers, setListUsers] = useState(users);

    // función permite añadir nuevos usuarios al arreglo
    const handleAddUser = (user: User) => {
        //añadir nuevos elementos en el listUser
        //operador propagación ...: crear una copia del arreglo
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
                children={() => <LoginScreen users={listUsers} />} />
            <Stack.Screen
                options={{ headerShown: false }}
                name="Register"
                children={() => <RegisterScreen users={listUsers} handleAddUser={handleAddUser}/>} />
                <Stack.Screen
                options={{ headerShown: false }}
                name='Home'
                component={HomeScreen}
                />
        </Stack.Navigator>
    );
}
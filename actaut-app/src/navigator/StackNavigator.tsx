import { createStackNavigator } from '@react-navigation/stack';
import { Pantalla1Screens } from '../screens/Pantalla1Screens';
import { Pantalla2Screens } from '../screens/Pantalla2Screens';

const Stack = createStackNavigator();

export const StackNavigator=()=> {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Pantalla1" component={Pantalla1Screens} 
      options={{headerShown: false}}
      />
      <Stack.Screen name="Pantalla2" component={Pantalla2Screens} 
      options={{headerShown: false}}
      />
      </Stack.Navigator>
  );
}
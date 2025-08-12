import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { Button, Image, View } from 'react-native'
import { Text } from 'react-native-gesture-handler'
import { styles } from '../theme/app.Theme';

//interface - props de naveación
interface Props extends StackScreenProps<any, any>{};
export const Pantalla1Screens = ({navigation}: Props) => {
  //console.log(props);
  
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Bienvenidos</Text>
        <Image style={styles.image}
          source={{uri: 'https://reactnative.dev/img/tiny_logo.png',}}
        />
        <Button
        title='Acceder'
        onPress={()=>navigation.navigate('Pantalla2')}
        />
    </View>
  )
}

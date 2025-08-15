import React, { useState } from 'react'
import { Alert, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import { TitleComponent } from '../components/TitleComponent'
import { PRIMARY_COLOR, IMPUT_COLOR } from '../commons/constants';
import { BodyComponent } from '../components/BodyComponent'
import { style } from '../theme/appTheme';
import { ImputComponent } from '../components/ImputComponent'
import { ButtonComponent } from '../components/ButtonComponent'
import { CommonActions, useNavigation } from '@react-navigation/native';
import { User } from '../navigator/StackNavigator';

//interface - props
interface Props {
  users: User[]; //arreglo con la vista de usuarios
}
//interface - formulario login
interface FormLogin {
  user: string;
  password: string;
}

export const LoginScreen = ({ users }: Props) => {

  // hook useState: cambiar el estado del formulario
  const [formLogin, setFormLogin] = useState<FormLogin>({
    user: '',
    password: ''
  });

  // hook useState: manipular la visualización o no del password
  const [hiddenPassword, setHiddenPassword] = useState<boolean>(true);

  //hook useNavigation: navegar de una pantalla a otra
  const navigation = useNavigation();

  //función actualizar el estado del formulario
  const handleSetValues = (name: string, value: string) => {
    setFormLogin({ ...formLogin, [name]: value })
    console.log(name);
    console.log(value);
  }
  //función para iniicar sesión
  const handleSingIn = () => {
    //Validar que todos los campos estén completos
    if (!formLogin.user || !formLogin.password) {
      //Mensaje de aviso
      Alert.alert(
        'Error',
        'Por favor, ingresar valores en todos los campos!'
      );
      return;
    }

    // Validar que el usuario si exista
    if (!verifyUser()) {
      Alert.alert(
        'Error',
        '¡Correo, usuario y/o contraseña incorrecta!'
      );
      return;

    }
    console.log(formLogin);
  }
  //función permitir verificar si el usuario está en el arreglo (registrado)
  const verifyUser = () => {
    const existUser = users.filter(user => user.user === formLogin.user && user.password === formLogin.password)[0];
    return existUser; // user | null
  }

  return (
    <View>
      <StatusBar backgroundColor={PRIMARY_COLOR} />
      <TitleComponent title='Iniciar Sesión' />
      <BodyComponent>
        <View>
          <Text style={style.titleBody}>Iniciar Sesión</Text>
          <Text style={style.titleBody}>Realiza tus compras</Text>
        </View>
        <View style={style.contentImput}>
          <ImputComponent
            placeholder='Nombre de Usuario'
            handleSetValues={handleSetValues}
            name='user' />

          <ImputComponent
            placeholder='Contraseña'
            handleSetValues={handleSetValues}
            name='password'
            isPassword={hiddenPassword}
            hasIcon={true}
            accionIcon={() => setHiddenPassword(!hiddenPassword)} />

        </View>
        <ButtonComponent textButton='Registrarse' onPress={handleSingIn} />
        <TouchableOpacity
          onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'Iniciar' }))}>
          <Text
            style={style.linkText}>
            ¿Ya tienes una cuenta? Inicia sesión ahora
          </Text>
        </TouchableOpacity>
      </BodyComponent>
    </View>
  )
}

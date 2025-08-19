import React, { useState } from 'react';
import { Alert, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { TitleComponent } from '../components/TitleComponent';
import { PRIMARY_COLOR } from '../commons/constants';
import { BodyComponent } from '../components/BodyComponent';
import { styles } from '../theme/appTheme';
import { InputComponent } from '../components/ImputComponent';
import { Buttoncomponent } from '../components/Buttoncomponent';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { User } from '../navigator/StackNavigator';

//interface que contenga los props
interface Props {
  users: User[]; // arreglo con la lista de usuarios
}
// interface: formulario Login
interface FormLogin {
  name: string;
  password: string;
}

export const LoginScreen = ({ users }: Props) => {
  // hook useState cambiar el estado de formulario
  const [formLogin, setFormLogin] = useState<FormLogin>({
    name: '',
    password: ''
  });

  // hook useState manipular la visualización o no del password
  const [hiddenPasword, setHiddenPasword] = useState<boolean>(true);

  // hook useNavigation: navegar de una pantalla a otra
  const navigation = useNavigation();

  //función actualizar el estado del formulario
  const handleSetValues = (name: string, value: string) => {
    setFormLogin({ ...formLogin, [name]: value })
  }

  //función para iniciar sesión
  const handleSingIn = () => {
    // validar que todos los campos estén completos
    if (!formLogin.name || !formLogin.password) {
      //mensaje de alerta
      Alert.alert(
        'Error',
        'Por favor llene todos los campos!'
      );
      return;
    }
    //if() validar que el usuario si existe (registrado)
    if (!verifyUser()) {
      Alert.alert(
        'Error',
        'Usuario y/o contraseña incorrecta'
      );
      return;
    }
    //Si inicio sesión correctamente ir al home screen
    navigation.dispatch(CommonActions.navigate({ name: 'Home' }));
    //console.log(formLogin);
  }
  // función permitir verificar si el usario consta en el arreglo (registrado)
  const verifyUser = () => {
    const existUser = users.filter(user => user.name === formLogin.name && user.password === formLogin.password)[0];
    return existUser; //User | null
  }

  return (
    <View>
      <StatusBar backgroundColor={PRIMARY_COLOR} />
      <TitleComponent title='Iniciar Sesión' />
      <BodyComponent>
        <View>
          <Text style={styles.titleBody}>¡Compra con confianza!</Text>
          <Text style={styles.descriptionBody}>Tu satisfacción es nuestra prioridad</Text>
        </View>
        <View style={styles.contentInputs}>
          <InputComponent
            placeholder='Usuario'
            handleSetValues={handleSetValues}
            name='name' />
          <InputComponent
            placeholder='Contraseña'
            handleSetValues={handleSetValues}
            name='password'
            isPassword={hiddenPasword}
            hasIcon={true}
            accionIcon={() => setHiddenPasword(!hiddenPasword)} />
        </View>

        <Buttoncomponent textButton='Iniciar' onPress={handleSingIn} />
        <TouchableOpacity
          onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'Register' }))}>
          <Text
            style={styles.textEnlace}>
            ¿No tienes cuenta? Regístrate
          </Text>
        </TouchableOpacity>
      </BodyComponent>
    </View>
  )
}

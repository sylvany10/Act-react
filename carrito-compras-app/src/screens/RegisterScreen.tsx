import React, { useState } from 'react'
import { Alert, StatusBar, Text, View } from 'react-native'
import { PRIMARY_COLOR } from '../commons/constants'
import { TitleComponent } from '../components/TitleComponent'
import { BodyComponent } from '../components/BodyComponent'
import { styles } from '../theme/appTheme'
import { InputComponent } from '../components/ImputComponent'
import { Buttoncomponent } from '../components/Buttoncomponent'
import { TouchableOpacity } from 'react-native'
import { CommonActions, useNavigation } from '@react-navigation/native'
import { User } from '../navigator/StackNavigator';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry'
//interface - props
interface Props {
  users: User[]; // arreglo con la lista de usuarios
  handleAddUser: (user: User) => void; // función para agregar usuarios al arreglo
}
// interface - formulario de registro
interface formRegister {
  email: string,
  name: string,
  password: string
}
export const RegisterScreen = ({ users, handleAddUser }: Props) => {

  // hook useState: manipular el estado del formulario
  const [formRegister, setFormRegister] = useState<formRegister>({
    email: '',
    name: '',
    password: ''
  });

  // hook useState manipular la visualización o no del password
  const [hiddenPasword, setHiddenPasword] = useState<boolean>(true);

  //hook useNavigation: permite navegar de una pantalla a otra
  const navigation = useNavigation();

  //función actualizar el estado del formulario
  const handleSetValues = (name: string, value: string) => {
    setFormRegister({ ...formRegister, [name]: value });
  }

  //función registrar nuevos usuarios
  const handleSignUp = () => {
    //validando que los campos del formulario no estén vacíos
    if (!formRegister.email || !formRegister.name || !formRegister.password) {
      //mensaje de alerta
      Alert.alert(
        'Error',
        'Por favor llene todos los campos!'
      );
      return;
    }

    //validando que el usuario no se encuentre registrado
    if (verifyUser() != null) {
      Alert.alert(
        'Error',
        'El usuario ya se encuentra registrado!'
      );
      return;
    }
    //Generar la información del nuevo usuario (objeto - User)
    //Arreglo con los ids del usuario
    const getIdUsers = users.map(user => user.id); //[1,2]
    //generar el ID para el nuevo usuario
    const getNewId = Math.max(...getIdUsers) + 1;
    //crear el nuevo objeto usuario
    const newUser: User = {
      id: getNewId,
      name: formRegister.name,
      password: formRegister.password
    };
    //agregando el nuevo usuario al arreglo
    handleAddUser(newUser);
    Alert.alert(
      'Se registro correctamente'
    );
    navigation.goBack();
    //console.log(formRegister);
  }

  //función para validar que el usuario no esté registrado
  const verifyUser = () => {
    const exitUser = users.filter(user => user.name === formRegister.email)[0];
    return exitUser; // User | null
  }

  return (
    <View>
      <StatusBar backgroundColor={PRIMARY_COLOR} />
      <TitleComponent title='Registro de Usuario' />
      <BodyComponent>
        <View>
          <Text style={styles.titleBody}>Registrate</Text>
        </View>
        <View style={styles.contentInputs}>
          <InputComponent
            placeholder='Correo'
            handleSetValues={handleSetValues}
            name='email' />
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
        <Buttoncomponent textButton='Registrar' onPress={handleSignUp} />
        <TouchableOpacity
          onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'Login' }))}>
          <Text
            style={styles.textEnlace}>
            ¿Ya tienes una cuenta? Inicia sesión ahora
          </Text>
        </TouchableOpacity>
      </BodyComponent>
      <Text>Registrate</Text>
    </View>
  )
}

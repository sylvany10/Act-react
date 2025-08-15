import React, { useState } from 'react'
import { StatusBar, Text, View } from 'react-native'
import { PRIMARY_COLOR } from '../commons/constants'
import { TitleComponent } from '../components/TitleComponent'
import { BodyComponent } from '../components/BodyComponent'
import { style } from '../theme/appTheme'
import { ImputComponent } from '../components/ImputComponent'
import { ButtonComponent } from '../components/ButtonComponent'
import { TouchableOpacity } from 'react-native'
import { CommonActions, useNavigation } from '@react-navigation/native'

//interface - formulario registro
interface FormRegister {
    user: string
    email: string;
    password: string;
}

export const RegisterScreen = () => {

    //hook useState manipular el estado del formulario
    const [formRegister, setFormRegister] = useState<FormRegister>({
        user: '',
        email: '',
        password: ''
    });

    // hook useState: manipular la visualización o no del password
    const [hiddenPassword, setHiddenPassword] = useState<boolean>(true);

    // hook useNavigation: permite navegar de una pantalla a otra
    const navigation = useNavigation();

    //función actualizar el estado del formulario
    const handleSetValues = (name: string, value: string) => {
        setFormRegister({ ...formRegister, [name]: value });
    }

    //funcion registrar nuevos usuarios
    const handleSingUp = () => {
        console.log(formRegister);
    }

    return (
        <View>
            <StatusBar backgroundColor={PRIMARY_COLOR} />
            <TitleComponent title='Registrate' />
            <BodyComponent>
                <View>
                    <Text style={style.titleBody}>Registrate</Text>
                    <Text style={style.titleBody}>Realiza tus compras</Text>
                </View>
                <View style={style.contentImput}>
                    <ImputComponent
                        placeholder='Nombre de Usuario'
                        handleSetValues={handleSetValues}
                        name='user' />
                    <ImputComponent
                        placeholder='Correo'
                        handleSetValues={handleSetValues}
                        name='email' />
                    <ImputComponent
                        placeholder='Contraseña'
                        handleSetValues={handleSetValues}
                        name='password'
                        isPassword={hiddenPassword}
                        hasIcon={true}
                        accionIcon={() => setHiddenPassword(!hiddenPassword)} />
                </View>
                <ButtonComponent textButton='Registrar' onPress={handleSingUp} />
                <TouchableOpacity
                    onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'Login' }))}>
                    <Text
                        style={style.linkText}>
                        ¿Ya tienes una cuenta? Inicia sesión ahora
                    </Text>
                </TouchableOpacity>
            </BodyComponent>

        </View>
    )
}

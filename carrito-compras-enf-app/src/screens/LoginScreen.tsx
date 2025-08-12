import React from 'react'
import { StatusBar, Text, View } from 'react-native'
import { TitleComponent } from '../components/TitleComponent'
import { PRIMARY_COLOR } from '../commons/constants'

export const LoginScreen = () => {
  return (
    <View>
    <StatusBar backgroundColor={PRIMARY_COLOR}/>
    <TitleComponent title='Iniciar Sesión'/>
    </View>
  )
}

import React from 'react'
import { Text, useWindowDimensions, View } from 'react-native'
import { style } from '../theme/appTheme';

export const BodyComponent = (props: any) => {
  //hook useWindowDimension: tamaño de la pantalla
  const {height} = useWindowDimensions();
  return (
    <View style={{
      ...style.contentBody,
      height: height * 0.88
      }}>
        {props.children}
    </View>
  )
}

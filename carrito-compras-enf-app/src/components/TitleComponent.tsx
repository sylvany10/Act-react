import React from 'react'
import { Text } from 'react-native'
import { style } from '../theme/appTheme';

//interface - props
interface Props{
    title: string;
}
export const TitleComponent = ({ title }: Props) => {
  return (
    <Text style={style.title}>{title}</Text>
  )
}

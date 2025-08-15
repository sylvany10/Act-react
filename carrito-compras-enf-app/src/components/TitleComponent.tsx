import React from 'react'
import { Text, useWindowDimensions } from 'react-native';
import { style } from '../theme/appTheme';

//interface - props
interface Props{
    title: string;
}
export const TitleComponent = ({ title }: Props) => {
  const{height} = useWindowDimensions();
  return (
    <Text style={{
      ...style.globaltitle,
      height:height * 0.12
    }}>{title}</Text>
  )

}

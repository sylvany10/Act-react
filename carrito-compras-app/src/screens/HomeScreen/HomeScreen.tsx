import React from 'react'
import { FlatList, StatusBar, Text, View } from 'react-native'
import { TitleComponent } from '../../components/TitleComponent'
import { BodyComponent } from '../../components/BodyComponent'
import { PRIMARY_COLOR } from '../../commons/constants'
import { CardProduct } from './components/CardProduct'

//interface - arreglo productos
export interface Product{
    id: number;
    name: string;
    price: number;
    stock: number;
    pathImage: string;
}
export const HomeScreen = () => {
    //arreglo de productos
    const products: Product[]=[
        {id: 1, name: 'Cuaderno personalizado', price: 8.00, stock: 8, pathImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjqCPE6P1aUNE0VF9kTvsuwk79guA7WzyY7A&s'},
        {id: 2, name: 'Jarro personalizado', price: 5.00, stock: 5, pathImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2PN7URrn-69kh4SBZ0DEEbpyjNmwbNroqDA&s'},
        {id: 3, name: 'Audífonos personalizados', price: 15.00, stock: 3, pathImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz_HfBigYuDkQUT1bj1BaaqV5FHwE8uVRlZA&s'}
    ];

  return (
    <View>
        <StatusBar backgroundColor={PRIMARY_COLOR} />
        <TitleComponent title='Productos'/>
        <BodyComponent>
        <FlatList
        data={products}
        renderItem={({item})=><CardProduct product={item}/>}
        keyExtractor={item=> item.id.toString()}/>
        </BodyComponent>
    </View>
  )
}

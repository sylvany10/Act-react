import React from 'react';
import { FlatList, FlatListComponent, StatusBar, Text, View } from 'react-native';
import { TitleComponent } from '../components/TitleComponent';
import { BodyComponent } from '../components/BodyComponent';
import { PRIMARY_COLOR } from '../commons/constants';

//interface - arreglo productos
interface Product{
    id: number;
    name: string;
    price: number;
    stock: number;
    pathImage: string;
}

export const HomeScreen = () => {
    // arreglo de productos
    const products: Product[]=[
        {id: 1, name: 'jarro personalizado', price: 5.00, stock: 8, pathImage:''},
        {id: 2, name: 'cuaderno personalizado', price: 8.00, stock: 5, pathImage:''},
        {id: 3, name: 'audifonos personalizados', price: 15.00, stock: 2, pathImage:''},
    ];
    return (
        <View>
            <StatusBar backgroundColor={PRIMARY_COLOR} />
            <TitleComponent title='Productos' />
            <BodyComponent>
                <FlatList
                data={products}
                renderItem={({item})=> <Text>{item.name}</Text>}
                keyExtractor={item => item.id.toString() }/>
            </BodyComponent>
        </View>
    )
}

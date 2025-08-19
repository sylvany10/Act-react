import React, { useState } from 'react';
import { FlatList, StatusBar, Text, View } from 'react-native';
import { TitleComponent } from '../../components/TitleComponent';
import { BodyComponent } from '../../components/BodyComponent';
import { PRIMARY_COLOR, SECUNDARY_COLOR } from '../../commons/constants';
import { CardProduct } from './components/CardProduct';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { styles } from '../../theme/appTheme';
import { ModalCard } from './components/ModalCar';


//interface - arreglo productos
export interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
  pathImage: string;
}

//interface - arreglo del carrito de compras
export interface Car {
  id: number;
  name: string;
  price: number;
  totalQuantity: number;

}
export const HomeScreen = () => {
  //arreglo de productos
  const products: Product[] = [
    { id: 1, name: 'Cuaderno personaliz.', price: 8.00, stock: 10, pathImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHnNvUecZdWZQWOz6Jy_W9oeoMaqSzOvLpOQ&s' },
    { id: 2, name: 'Jarro personaliz.', price: 5.00, stock: 5, pathImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWzbVxjZfIy7LX_sgOtZIzQeIPkprUSfTIdw&s' },
    { id: 3, name: 'Audífonos personaliz.', price: 15.00, stock: 5, pathImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_ilVHvnOiRYOEoNnGwKqt4ttiYVCzdW6bJA&s' },
    { id: 4, name: 'Esferos personaliz.', price: 2.00, stock: 10, pathImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWrWQRc_3Xq5yXIuC_fsmVip0Z8KkO-6EhqA&s' },
    { id: 5, name: 'Rollup', price: 35.00, stock: 3, pathImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgMv5ZgQ6Lp9Z8AV3ov7KCvILKOztXcRm5Kw&s' },
    { id: 6, name: 'Araña publicitaria', price: 25.00, stock: 3, pathImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0gKSsfVBuL6HgqtzYAsHOh6orYfWMO1B8fg&s' },
    { id: 7, name: 'Camiseta personaliz.', price: 10.00, stock: 10, pathImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8kTGfujlyOCK_cf-Hc25n1jtJNPoTbICAGg&s' },
    { id: 8, name: 'Gorro personaliz.', price: 10.00, stock: 10, pathImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2YcNZfr7VRmBURAxaQZesxmDCo54aMNo7GA&s' },
    { id: 9, name: 'Buff personaliz.', price: 8.00, stock: 5, pathImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9eCjoJKVOBzqnZizGDyYxxxFGx3Dl9oA7wg&s' },
    { id: 10, name: 'Álbumes personaliz.', price: 20.00, stock: 5, pathImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvBwfbNsxteUROvUFF3INWjgCxVA7nCZ0L5A&s' },
  ];

  // hook useState: manipular el estado del producto
  const [productsState, setProductsState] = useState(products);

  //hook useState: manipular el estado del arreglo del carrito de compras
  const [car, setCar] = useState<Car[]>([]);

  //hook useState: manipular el modal del carrito
  const [showModal, setShowModal] = useState<boolean>(false);

  //función para controla el stock
  const handleChangeStockProduct = (idProduct: number, quantity: number) => {
    const updateStock = productsState.map(item => item.id === idProduct
      ? {
        ...item,
        stock: item.stock - quantity
      }
      : item);
    // actulaizar información arreglo - stock
    setProductsState(updateStock);

    //llamar función agregar carrito
    addProduct(idProduct, quantity);
  }
  //función agregar producots al carrito de compras
  const addProduct = (idProduct: number, quantity: number) => {
    //bucar el produto que se desea agregar al carrito
    const product = productsState.find(item => item.id === idProduct);

    // controlar en el caso que no se encuentre el producto
    if (!product) {
      return;
    }

    // si se encontró el producto - objeto productor car
    const newProductCar: Car = {
      id: product.id,
      name: product.name,
      price: product.price,
      totalQuantity: quantity
    }

    //agregar al arreglo del carrito de compras
    setCar([...car, newProductCar]);
    //console.log(car);
  }

  return (
    <View>
      <StatusBar backgroundColor={PRIMARY_COLOR} />
      <View style={styles.contentHeaderHome}>
        <TitleComponent title='Productos' />
      </View>
      <View style={styles.iconCarHome}>
        <Text style={styles.textIconCarHome}>{car.length}</Text>
        <Icon
          name='shopping-cart'
          size={32}
          color={SECUNDARY_COLOR}
          onPress={() => setShowModal(!showModal)} />
      </View>
      <BodyComponent>
        <FlatList
          data={productsState}
          renderItem={({ item }) => <CardProduct product={item} handleChangeStockProduct={handleChangeStockProduct} />}
          keyExtractor={item => item.id.toString()} />
      </BodyComponent>
      <ModalCard
        isVisible={showModal}
        car={car}
        setShowModal={() => setShowModal(!showModal)} />
    </View>

  )
}

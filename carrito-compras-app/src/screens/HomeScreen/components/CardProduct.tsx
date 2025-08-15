import React from 'react';
import { Image, Text, View } from 'react-native';
import { Product } from '../HomeScreen';
import { styles } from '../../../theme/appTheme';

//interface - props
interface Props{
    product: Product;
}

export const CardProduct = ({product}: Props) => {
  return (
    <View style={styles.contentCard}>
        <Image 
        source={{
            uri: product.pathImage
        }}
        style={styles.imageCard}/>
        <Text style={styles.titleCard}>{product.name}</Text>
    </View>
  )
}

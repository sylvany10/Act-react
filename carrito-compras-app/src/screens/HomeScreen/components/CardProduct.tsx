import React, { useState } from 'react';
import { Image, Text, View } from 'react-native';
import { Product } from '../HomeScreen';
import { styles } from '../../../theme/appTheme';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { PRIMARY_COLOR } from '../../../commons/constants';
import { ModalProduc } from './ModalProduc';

//interface - props
interface Props {
  product: Product;
  handleChangeStockProduct: (idProduct: number, quantity:number)=> void;
}

export const CardProduct = ({ product, handleChangeStockProduct }: Props) => {
  //hook useState: manipular la visualizaión o no del modal
  const [showModal, setShowModal] = useState(false);

  return (
    <View>
      <View style={styles.contentCard}>
        <Image
          source={{
            uri: product.pathImage
          }}
          style={styles.imageCard} />
        <View style={styles.contentText}>
          <View>
          <Text style={styles.titleCard}>{product.name}</Text>
          <Text>Precio: ${product.price.toFixed(2)}</Text>
          </View>
        </View>
        <View style={styles.iconCard}>
          <Icon
            name='add-shopping-cart'
            size={32}
            color={PRIMARY_COLOR}
            onPress={() => setShowModal(!showModal)} />
        </View>
      </View>

      <ModalProduc
        isVisible={showModal}
        setShowModal={() => setShowModal(!showModal)}
        product={product}
        handleChangeStockProduct={handleChangeStockProduct} />
    </View>
  )
}

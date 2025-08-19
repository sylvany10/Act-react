import React, { useState } from 'react'
import { Image, Modal, Text, useWindowDimensions, View } from 'react-native';
import { styles } from '../../../theme/appTheme';
import { TouchableOpacity } from 'react-native';
import { Product } from '../HomeScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { PRIMARY_COLOR } from '../../../commons/constants';
import { Buttoncomponent } from '../../../components/Buttoncomponent';
//interface-props
interface Props {
    product: Product;
    isVisible: boolean;
    setShowModal: () => void; // función para cerrar el modal
    handleChangeStockProduct: (idProduct: number, quantity: number) => void;
}
export const ModalProduc = ({ isVisible, setShowModal, product, handleChangeStockProduct }: Props) => {
    //hook useWindowDimension: tomar el tamaño de la pantalla
    const { width } = useWindowDimensions();
    //hook useState: manipular el estado del contador
    const [quantity, setQuantity] = useState<number>(1);

    //funcion para actualizar el contador
    const handleChangeQuantity = (value: number) => {
        setQuantity(quantity + value);
    }

    // función para agregar el producto al carrito de compras
    const handleAddProduct = () => {
        //Actualizar el stock
        handleChangeStockProduct(product.id, quantity);
        //Actualizar el contador
        setQuantity(1)
        //Cerrar el Modal
        setShowModal();
    }

    return (
        <Modal visible={isVisible} animationType='slide' transparent={true}>
            <View style={styles.contentPrincipal}>
                <View style={{
                    ...styles.contentModal,
                    width: width * 0.80
                }}>
                    <View style={styles.headerModal}>
                        <Text style={styles.titleModal}>{product.name}  -  ${product.price.toFixed(2)}</Text>
                        <View style={styles.iconCard}>
                            <Icon
                                name='cancel'
                                size={20}
                                color={PRIMARY_COLOR}
                                onPress={setShowModal} />
                        </View>
                    </View>
                    <View style={styles.contentImageModal}>
                        <Image
                            source={{
                                uri: product.pathImage
                            }}
                            style={styles.imageModal} />
                    </View>
                    {
                        (product.stock === 0)
                            ? <Text style={styles.textStock}>Agotado!</Text>
                            : <View>
                                <View style={styles.contentQuantity}>
                                    <TouchableOpacity
                                        onPress={() => handleChangeQuantity(1)}
                                        disabled={quantity === product.stock}
                                        style={styles.buttonQuantity}>
                                        <Text style={styles.textButtonQuantity}>+</Text>
                                    </TouchableOpacity>
                                    <Text style={styles.textQuantity}>{quantity}</Text>
                                    <TouchableOpacity
                                        onPress={() => handleChangeQuantity(-1)}
                                        disabled={quantity === 1}
                                        style={styles.buttonQuantity}>
                                        <Text style={styles.textButtonQuantity}>-</Text>
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <Text style={styles.textQuantity}>Total: ${(product.price * quantity).toFixed(2)}</Text>
                                </View>

                                <TouchableOpacity
                                    onPress={handleAddProduct}
                                    style={styles.buttonAddCard}>
                                    <Text style={styles.textButtonAddCard}>Añadir al Carrito</Text>
                                </TouchableOpacity>
                            </View>
                    }

                </View>
            </View>
        </Modal>
    )
}

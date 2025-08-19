import React from 'react';
import { Button, FlatList, Modal, Text, useWindowDimensions, View } from 'react-native';
import { Car } from '../HomeScreen';
import { styles } from '../../../theme/appTheme';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { PRIMARY_COLOR } from '../../../commons/constants';

//interface - props
interface Props {
  isVisible: boolean;
  setShowModal: () => void;
  car: Car[]; //arreglo de los productos en el carrito
}
export const ModalCard = ({ isVisible, setShowModal, car }: Props) => {
  //hook useWindowDimension: tomar el tamaño de la pantalla
  const { width } = useWindowDimensions();

  //función para calcular el total
  const totalPay = () => {
    let total= 0
    car.forEach(item=>{
      total += item.price* item.totalQuantity
    })
    return total;
  }

  return (
    <Modal visible={isVisible} animationType='fade' transparent={true}>
      <View style={styles.contentPrincipal}>
        <View style={{
          ...styles.contentModal,
          width: width * 0.93
        }}>
          <View style={styles.headerModal}>
            <Text style={styles.titleModal}>Mi compra</Text>
            <View style={styles.iconCard}>
              <Icon
                name='cancel'
                size={20}
                color={PRIMARY_COLOR}
                onPress={setShowModal} />
            </View>
          </View>
          <View style={styles.headerTable}>
            <Text style={styles.textHeader}>Producto</Text>
            <View style={styles.headerInformation}>
              <Text style={styles.textInformation}>Prec</Text>
              <Text style={styles.textInformation}>Cant</Text>
              <Text style={styles.textInformation}>Tot</Text>
            </View>
          </View>
          <FlatList
            data={car}
            renderItem={({ item }) =>
              <View style={styles.headerTable}>
                <Text >{item.name}</Text>
                <View style={styles.headerInformation}>
                  <Text style={{ paddingHorizontal: 16 }}>{item.price.toFixed(2)}</Text>
                  <Text style={{ paddingHorizontal: 16 }}>{item.totalQuantity.toFixed(2)}</Text>
                  <Text style={{ paddingHorizontal: 16 }}>{(item.price * item.totalQuantity).toFixed(2)}</Text>
                </View>
              </View>
            }
            keyExtractor={item => item.id.toString()}
          />
          <View >
            <Text style={styles.contentTotalPay}>Total a pagar: ${totalPay().toFixed(2)}</Text>            
          </View>
        </View>
      </View>
    </Modal>
  )
}

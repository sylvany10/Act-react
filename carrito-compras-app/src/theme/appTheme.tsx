import { StyleSheet } from "react-native";
import { INPUT_COLOR, PRIMARY_COLOR, SECUNDARY_COLOR } from "../commons/constants";
import { BorderlessButton } from "react-native-gesture-handler";

export const styles = StyleSheet.create({
    globalTitle: {
        color: SECUNDARY_COLOR,
        fontSize: 25,
        paddingHorizontal: 30,
        paddingVertical: 15,
        fontWeight: 'bold'
    },
    contentBody: {
        backgroundColor: SECUNDARY_COLOR,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingHorizontal: 20,
        paddingTop: 10
    },
    titleBody: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black'
    },
    descriptionBody: {
        fontSize: 15,
    },
    inputText: {
        backgroundColor: INPUT_COLOR,
        paddingHorizontal: 20,
        paddingVertical: 20,
        borderRadius: 10
    },
    contentInputs: {
        marginTop: 10,
        gap: 5
    },
    button: {
        marginTop: 10,
        backgroundColor: PRIMARY_COLOR,
        paddingVertical: 15,
        borderRadius: 10
    },
    buttonText: {
        color: SECUNDARY_COLOR,
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    iconPassword: {
        position: 'absolute',
        right: 20,
        zIndex: 1,
        marginTop: 20
    },
    textEnlace: {
        color: PRIMARY_COLOR,
        marginTop: 30,
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    // estilo productos
    contentCard: {
        flexDirection: 'column',
        padding: 5,
        shadowColor: '#f0b191ff',
        borderColor: '#f0b191ff',
        borderWidth: 2,
        borderRadius: 7,
        marginBottom: 8,
        backgroundColor: '#ffeae6'

        /*shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.02,
        elevation: 2*/
    },
    contentText: {
        flex: 1,
        marginLeft: 10,
        
        alignItems: 'center'
    },
    titleCard: {
        fontWeight: 'bold',
        color: '#f56817ff',
        fontSize: 15
    },
    imageCard: {
        width: 80,
        height: 80,
        
    },
    //estilo icono carrito
    iconCard: {
        flex: 1,
        alignItems: 'flex-end',
        marginLeft: 25,

    },
    contentPrincipal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    contentModal: {
        backgroundColor: SECUNDARY_COLOR,
        padding: 25,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    headerModal: {
        flexDirection: 'row',
        borderBottomColor: '#f0b191ff',
        borderBottomWidth: 2,
        padding: 8,
        paddingBottom: 12
    },
    titleModal: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#f56817ff'
    },
    contentImageModal: {
        alignItems: 'center',
        marginTop: 12
    },
    imageModal: {
        width: 200,
        height: 200,
        borderRadius: 10
    },
    contentQuantity: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonQuantity: {
        width: 35,
        height: 35,
        backgroundColor: PRIMARY_COLOR,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 15
    },
    textButtonQuantity: {
        color: SECUNDARY_COLOR,
        fontSize: 20,
        fontWeight: 'bold'
    },
    textQuantity: {
        fontSize: 17,
        color: '#f56817ff',
        textAlign: 'center',
        minWidth: 30,
        fontWeight: 'bold'
    },
    buttonAddCard: {
        marginTop: 5,
        backgroundColor: PRIMARY_COLOR,
        paddingVertical: 8,
        alignItems: 'center',
        borderRadius: 5
    },
    textButtonAddCard: {
        color: SECUNDARY_COLOR,
        fontWeight: 'bold'
    },
    textStock: {
        fontSize: 18,
        color: '#F04422',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    contentHeaderHome: {
        flexDirection: 'row',
        alignItems: 'center',

    },
    iconCarHome: {
        flex: 1,
        alignItems: 'flex-end',
        paddingHorizontal: 30,
    },
    textIconCarHome: {
        backgroundColor: SECUNDARY_COLOR,
        borderRadius: 18,
        paddingHorizontal: 5,
        fontWeight: 'bold',
        fontSize: 12
    },
    headerTable:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    headerInformation:{
        flexDirection: 'row'
    },
    textInformation:{
        marginHorizontal: 14,
        fontWeight: 'bold',
        color: '#f56817ff'
    },
    textHeader:{
        fontWeight: 'bold',
        color: '#f56817ff'
    },
    contentTotalPay: {
        textAlign: 'center',
        marginTop:15,
        fontWeight: 'bold',
        color: '#f56817ff',
        
    }



})


import { StyleSheet } from "react-native";
import { INPUT_COLOR, PRIMARY_COLOR, SECUNDARY_COLOR } from "../commons/constants";

export const styles = StyleSheet.create({
    globalTitle: {
        color: SECUNDARY_COLOR,
        fontSize: 27,
        paddingHorizontal: 30,
        paddingVertical: 15,
        fontWeight: 'bold'
    },
    contentBody: {
        backgroundColor: SECUNDARY_COLOR,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingTop: 20
    },
    titleBody:{
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black'
    },
    descriptionBody:{
        fontSize: 13
    },
    inputText:{
        backgroundColor: INPUT_COLOR,
        paddingHorizontal: 20,
        paddingVertical: 20,
        borderRadius: 10
    },
    contentInputs:{
        marginTop: 20,
        gap: 5
    },
    button:{
        marginTop:10,
        backgroundColor: PRIMARY_COLOR,
        paddingVertical: 15,
        borderRadius:10
    },
    buttonText:{
        color: SECUNDARY_COLOR,
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    iconPassword:{
        position: 'absolute',
        right: 20,
        zIndex: 1,
        marginTop: 20
    },
    textEnlace: {
        color: PRIMARY_COLOR,
        marginTop:30,
        fontSize:16,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    contentCard:{
        padding: 15,
        shadowColor: '',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.02,
        elevation: 4
    },
    titleCard:{
        fontWeight: 'bold',
        color: '#000',
        fontSize: 15
    },
    imageCard: {
        width: 50,
        height: 50
    }
})


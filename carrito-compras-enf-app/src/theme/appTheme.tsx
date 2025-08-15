import { StyleSheet } from "react-native";
import { IMPUT_COLOR, PRIMARY_COLOR, SECUNDARY_COLOR } from "../commons/constants";

//estilos globales
export const style=StyleSheet.create({
    globaltitle:{
        color: SECUNDARY_COLOR,
        fontSize: 27,
        paddingHorizontal: 30,
        paddingVertical: 30,
        fontWeight: 'bold'
    },
    contentBody:{
        backgroundColor: SECUNDARY_COLOR,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 40,
        paddingTop: 40        
    },
    titleBody:{
        fontSize: 17,
        fontWeight: 'bold',
        color: 'black'
    },
    descriptionBody:{
        fontSize: 15
    },
    immputText:{
        backgroundColor: IMPUT_COLOR,
        paddingHorizontal: 20,
        paddingVertical: 20,
        borderRadius: 10
    },
    contentImput:{
        marginTop: 30,
        gap: 10
    },
    button:{
        marginTop: 20,
        backgroundColor: PRIMARY_COLOR,
        paddingVertical: 15,
        borderRadius: 10
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
    linkText: {
        marginTop: 10,
        color: '#ff4800ff',
        textAlign: 'center'
    },
    globalMargin: {
        marginHorizontal: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 12,
        borderRadius: 10,
        marginBottom: 15
    }



    

    
})
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    globalMargin: {
        marginHorizontal: 20,

    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: '#333'
    },

    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#D3D3D3'
    },

    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 12,
        borderRadius: 10,
        marginBottom: 15
    },
    button: {
        backgroundColor: '#007BFF',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center'
    },

    buttonText: {
        color: '#fff',
        fontWeight: 'bold'
    },

    linkText: {
        marginTop: 20,
        color: '#007BFF',
        textAlign: 'center'
    },


});


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
    productItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 10,
    marginBottom: 10,
    borderRadius: 10
  },
  productImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 10
  },
  productInfo: {
    flex: 1
  },
  productName: {
    fontWeight: 'bold',
    fontSize: 16
  },
  productPrice: {
    color: '#333'
  },
  buyButton: {
    backgroundColor: '#007BFF',
    padding: 8,
    borderRadius: 5
  },
  buyButtonText: {
    color: '#fff'
  }


});


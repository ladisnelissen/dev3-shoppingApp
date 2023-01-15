import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';



const CartItem = cartProps => {
    const navigation = useNavigation();

    return (
        <View style={styles.listItem}>
            <View>
                <Image style = {styles.imagestyle} source={{uri: cartProps.itemImage}}  />
                <Text style={styles.text}>{cartProps.itemTitle}</Text>
                <Text style={styles.itemprice}>{cartProps.itemMeta}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    listItem: {
        flexDirection: 'row',
        padding: 10,
        margin: 10,
        backgroundColor: '#eee',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
    },
    imagestyle: {
        width: 100,
        height: 100,
        borderRadius: 10,
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    itemprice: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'red',
    },
    productbutton: {
        backgroundColor: 'black',
        padding: 10,
        borderRadius: 10,
        marginTop: 10,
    },
    buttontext: {
        color: 'white',
        fontSize: 20,
    },
});

export default CartItem;
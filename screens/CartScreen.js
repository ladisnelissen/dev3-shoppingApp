import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList, Text, Pressable } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import CartItem from '../components/CartItem';

const CartScreen = ({ navigation, route }) => {
    
    const [cartData, setCartData] = useState([]);

    const getCartData = async () => {
        try {
            AsyncStorage.getItem("@newCartItem").then((value) => {
                setCartData(JSON.parse(value));
                console.log(JSON.parse(value));
            });
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getCartData();
    }, []);

    //make function to clear cart
    const clearCart = async () => {
        try {
            await AsyncStorage.setItem("@newCartItem", JSON.stringify([]));
            alert("Cart cleared, navigation to homepage")
            navigation.navigate("Home")
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Cart</Text>
            <Pressable style={styles.productbutton} onPress={() => clearCart()}>
                <Text style={styles.buttonClear}>Clear cart</Text>
            </Pressable>
            

            <FlatList
                data={cartData} 
                keyExtractor={(item) => item.itemID}
                renderItem={({ item }) => (
                    <CartItem
                        itemTitle={item.itemTitle}
                        itemImage={item.itemImage}
                        itemMeta={item.itemMeta}
                    />
                )}
            />

            <Pressable style={styles.productbutton} onPress={() => navigation.navigate("orderScreen")}>
                <Text style={styles.buttonOrder}>Order</Text>
            </Pressable>
        </View>
    );
}




    const styles = StyleSheet.create({
        container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        },
        title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20,
        },
        buttonClear: {
        fontSize: 10,
        fontWeight: 'bold',
        color: 'black',
        border: '1px solid black',
        padding: 10,
        borderRadius: 10,
        marginTop: 20,
        },
        buttonOrder: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        border: '1px solid black',
        padding: 10,
        borderRadius: 10,
        margin: 10,
        },
    });

    export default CartScreen;

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
            navigation.navigate("Home")
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Cart</Text>
            <Pressable style={styles.productbutton} onPress={() => clearCart()}>
                <Text style={styles.buttontext}>Clear cart</Text>
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
    });

    export default CartScreen;

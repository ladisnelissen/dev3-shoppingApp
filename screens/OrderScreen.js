import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList, Text, Pressable } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import CartItem from '../components/CartItem';

const orderScreen = ({ navigation, route }) => {
    
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

    //function to calculate total price
    const calculateTotal = () => {
        let total = 0;
        cartData.forEach((item) => {
            //grab price after € sign
            item.itemMeta = item.itemMeta.substring(1);

            //make sure to convert string to number
            total += Number(item.itemMeta);

        });
        return total;
    }


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Your order</Text>
            <Text style={styles.total}>Total items: {cartData.length}</Text>
            <Text style={styles.total}>Total: {calculateTotal()} euro's</Text>
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

            <Pressable style={styles.productbutton} onPress={() => navigation.navigate("Home")}>
                <Text style={styles.buttonOrder}>Back to homepage</Text>
            </Pressable>

        </View>
    );

    
}

      const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
        },
        title: {
          fontSize: 25,
          fontWeight: 'bold',
          marginTop: 20,
        },
        total: {
          fontSize: 15,
          fontWeight: 'bold',
          marginTop: 20,
        },
        productbutton: {
          backgroundColor: '#000',
          padding: 10,
          borderRadius: 5,
          marginTop: 20,
        },
        buttonOrder: {
          color: '#fff',
          fontSize: 15,
          fontWeight: 'bold',
        },
        

      });


export default orderScreen;
      
    
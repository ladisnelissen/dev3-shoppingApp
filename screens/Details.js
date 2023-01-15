import React from "react";
import { StyleSheet, Text, View, Pressable, Image} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

import DOMParser from 'react-native-html-parser'

const parser = new DOMParser.DOMParser();

function DetailsScreen({ navigation, route }, ) {

    //function to trim description from html tags
    const trimDescription = (description) => {
        const parsedDescription = parser.parseFromString(description, 'text/html');
        const parsedDescriptionText = parsedDescription.documentElement.textContent;
        //stop at continue reading and trim last 4 characters
        const parsedDescriptionTextTrimmed = parsedDescriptionText.substring(0, parsedDescriptionText.indexOf("Continue reading") - 3);


        
        
        return parsedDescriptionTextTrimmed;
    }

    
    const storeNewItem = async () => {
        try {
            const existingDataJSON = await AsyncStorage.getItem("@newCartItem");
            const existingDataArray = JSON.parse(existingDataJSON) || [];
            if (existingDataArray.find((item) => item.itemID === route.params.itemID)) {
                alert("Item already in cart");
                return;
            } else {
              alert("Item added to cart")
            }
            existingDataArray.push(route.params);
            const newDataJSON = JSON.stringify(existingDataArray);
            await AsyncStorage.setItem("@newCartItem", newDataJSON);
            //console log data
            console.log(existingDataArray);
            navigation.navigate("CartScreen", {cartData: route.params})
        } catch (error) {
            console.log(error);
        }
    }
    
    
    return (
        <View style={styles.screen}>
          <Pressable onPress={() => navigation.navigate('CartScreen')}>
            <Image style={styles.cart} source={require('../assets/cart.png')}/>
          </Pressable>
            <Text style = {styles.title}>{route.params.itemTitle}</Text>
            <Image style = {styles.imagestyle} source={{uri: route.params.itemImage}}  />
            <Text style = {styles.price}>{route.params.itemMeta}</Text>
            <Text style = {styles.descText}>{trimDescription(route.params.itemDescription)}</Text>

            <Pressable style={styles.productbutton} onPress={() => storeNewItem()}>
                <Text style={styles.buttontext}>Add to cart</Text>
            </Pressable>
        </View>
    );
    }


    const styles = StyleSheet.create({
        screen: {
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
        imagestyle: {
            width: 250,
            height: 250,
            borderRadius: 10,
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
        cart: {
          //add cart in header
          width: 25,
          height: 25,
          marginTop: 20,

        },
        descText: {
          marginTop: 20,
          fontSize: 15,
          //add margin to left and right
          marginHorizontal:40,
          alignContent: 'center',
          textAlign: 'center',

        },
        price: {
          marginTop: 20,
          fontSize: 30,
          fontWeight: 'bold',
        },



      });



export default DetailsScreen;
      

import React from "react";
import { StyleSheet, Text, View, Pressable, Image} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';


function DetailsScreen({ navigation, route }, ) {
    
    const storeNewItem = async () => {
        try {
            await AsyncStorage.setItem("@newCartItem", JSON.stringify(route.params)).then(
                navigation.navigate("CartScreen", {cartData: route.params})
            );
            //console log data
            console.log(route.params);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <View style={styles.screen}>
            <Text style = {styles.title}>{route.params.itemTitle}</Text>
            <Image style = {styles.imagestyle} source={{uri: route.params.itemImage}}  />
            <Text>{route.params.itemMeta}</Text>


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

      });



export default DetailsScreen;
      

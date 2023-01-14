import React, { useState, useEffect} from "react";
import { StyleSheet, Text, View, Button, Pressable, FlatList, Image } from "react-native";

import ShoppingItem from "../components/ShoppingItem";

function HomeScreen({ navigation }) {

    //fetch data from API
    const [data, setData] = useState([]);

    const getData = async () => {
      try {
          const response = await fetch('https://ladisneliss.be/wp-json/wp/v2/posts');
          const data = await response.json();
          setData(data);
          console.log(data);
      } catch (error) {
          console.log(error);
      }
    }
  

    useEffect(() => {
        getData();
    }, []);



    return (
        <View style={styles.container}>
        <Pressable style={styles.cartbutton} onPress={() => navigation.navigate("CartScreen")}>
            <Text>test</Text>
        </Pressable>

        <FlatList 
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) =>
        (
            <ShoppingItem
              itemID={item.id}
              description={item.excerpt.rendered}
              title={item.title.rendered}
              metaimage={item.yoast_head_json.og_image[0].url}
              metadata={item.yoast_head_json.og_description}
            />

            )
          }
        />


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
        cartbutton: {
            position: "absolute",
            top: 50,
            right: 20,
            width: 50,
            height: 50,
        }
                
      });

export default HomeScreen;
      
    
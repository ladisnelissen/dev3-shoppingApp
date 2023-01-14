import React, { useState, useEffect} from "react";
import { StyleSheet, Text, View, Button, Pressable, FlatList } from "react-native";

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
        <Pressable onPress={() => navigation.navigate("Details")}>
            <Text>Let's get shopping</Text>
        </Pressable>

        <FlatList 
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) =>
        (
            <ShoppingItem
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
      });

export default HomeScreen;
      
    
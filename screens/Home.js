import React, { useState, useEffect} from "react";
import { StyleSheet, Text, View, Button } from "react-native";



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
        <Text>Home Screen</Text>
        <Button
            title="Go to Details"
            onPress={() => navigation.navigate("Details")}
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
      
    
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";


function DetailsScreen({ navigation }) {
    return (
        <View style={styles.container}>
        <Text>Details Screen</Text>
        <Button
            title="Go to Profile"
            onPress={() => navigation.navigate("Profile")}
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

export default DetailsScreen;
      
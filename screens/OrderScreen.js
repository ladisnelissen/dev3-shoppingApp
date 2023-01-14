import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

function ProfileScreen({ navigation }) {
    return (
        <View style={styles.container}>
        <Text>Profile Screen</Text>
        <Button title="Go to Home" onPress={() => navigation.popToTop()} />
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

export default ProfileScreen;
      
    
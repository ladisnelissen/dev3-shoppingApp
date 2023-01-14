import {View, Text, StyleSheet, Button, Image, Pressable } from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function ShoppingItem({item}) {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{item.title.rendered}</Text>
            <Button title="Go to Details" onPress={() => navigation.navigate("Details", {item: item})} />
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
        text: {
            fontSize: 20,
            fontWeight: 'bold',
        },
    });
    

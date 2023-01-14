import {View, Text, StyleSheet, Button, Image, Pressable } from 'react-native';
import {useNavigation} from '@react-navigation/native';

const ShoppingItem = itemprops => {
    const navigation = useNavigation();

    return (
        <View style={styles.listItem}>
            <View>
                <Image style = {styles.imagestyle} source={{uri: itemprops.metaimage}}  />
                <Text style={styles.text}>{itemprops.title}</Text>
                <Text style={styles.itemprice}>{itemprops.metadata}</Text>
                <Pressable style={styles.productbutton} onPress={() => navigation.navigate("Details", 
                {itemTitle: itemprops.title, itemID: itemprops.itemid, itemMeta: itemprops.metadata, itemImage: itemprops.metaimage})}>
                    <Text style={styles.buttontext}>Details</Text>
                </Pressable>
            </View>
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
        listItem: {
            flexDirection: 'row',
            padding: 10,
            margin: 10,
            backgroundColor: '#eee',
            borderColor: 'black',
            borderWidth: 1,
            borderRadius: 10,
        },
        imagestyle: {
            width: 100,
            height: 100,
            borderRadius: 10,
        },
        text: {
            fontSize: 20,
            fontWeight: 'bold',
        },
        itemprice: {
            fontSize: 20,
            fontWeight: 'bold',
            color: 'red',
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
            fontWeight: 'bold',
        }
    });

    export default ShoppingItem;
    

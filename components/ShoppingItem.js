import {View, Text, StyleSheet, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const ShoppingItem = itemprops => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
        <Text style={styles.text}>{itemprops.item}</Text>
        <Button
            title="Go to Details"
            onPress={() => navigation.navigate('Details')}
        />
        </View>
    );
    }
    
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const SwipeablePage = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Swipe Left or Right</Text>
            <TouchableOpacity onPress={() => navigation.navigate('OtherPages')}>
                <Text style={styles.linkText}>Go to Other Pages</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        marginBottom: 20,
    },
    linkText: {
        color: 'blue',
        fontSize: 16,
    },
});

export default SwipeablePage;
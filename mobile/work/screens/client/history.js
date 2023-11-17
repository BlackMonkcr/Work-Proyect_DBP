import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const History = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>History</Text>
            {/* Add your history content here */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
});

export default History;

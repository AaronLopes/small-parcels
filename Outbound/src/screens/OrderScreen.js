import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Heading } from '../components/Heading';


export default function MeasureScreen() {
  return (
    <View style={styles.container}>
        <Heading style={styles.title}>Orders</Heading>

    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 120,
        alignItems: 'center'
    },
    title: {
        
    }
})
import React from 'react';
import { Camera, Permissions } from 'expo';
import { Heading } from '../components/Heading';
import { View, Text } from 'react-native';


export default function MeasureScreen() {
  return (
    <View style={styles.container}>
        <Heading style={styles.title}>Your Measurements</Heading>
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
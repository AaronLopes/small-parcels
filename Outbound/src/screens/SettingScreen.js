import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Heading } from '../components/Heading';


export default function SettingScreen() {
  return (
    <View style={styles.container}>
        <Heading style={styles.title}>Settings</Heading>

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
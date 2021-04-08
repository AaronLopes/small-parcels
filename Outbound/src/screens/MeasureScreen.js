import React from 'react';
import { Camera, Permissions } from 'expo';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Heading } from '../components/Heading';
import { RectButton } from '../components/RectButton';


export default function MeasureScreen({navigation}) {
  return (
    <View style={styles.container}>
        <Heading style={styles.title}>Measurements</Heading>
        <FilledButton style={styles.signin} title={'Measure'} onPress={() => {}}/>
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
      color: 'red',
    }
})
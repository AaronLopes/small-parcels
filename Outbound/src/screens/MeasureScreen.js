import React, { useState, useEffect } from 'react';
import { Camera, Permissions } from 'expo';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Heading } from '../components/Heading';
import { RectButton } from '../components/RectButton';

export default function MeasureScreen({navigation}) {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  /*
  useEffect(() => {
    fetch('/movies').then(response => response.json().then(data => {
      console.log(data)
    }))
  }, []);*/
  
  return (
    <View style={styles.container}>
        <Heading style={styles.title}>Measurements</Heading>
        <RectButton style={styles.measure} title={'Add Item'} onPress={() => {}}/>
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
    },
    measure: {
      position: 'absolute',
      height: 68,
      top: 190,
      //bottom: 83,
      width: '80%'
    }
})
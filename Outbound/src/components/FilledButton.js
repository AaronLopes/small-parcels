import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useTheme} from '@react-navigation/native';

export function FilledButton({title, style, onPress}) {

  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#169189',
    width: '60%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderRadius: 50,
  },
  text: {
    fontSize: 16,
    fontFamily: 'System',
    fontWeight: '400',
    color: 'white'
  },
});
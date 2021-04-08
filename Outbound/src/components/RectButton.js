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
    backgroundColor: '#DF7E4D',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
  text: {
    fontSize: 28,
    fontFamily: 'System',
    fontWeight: '500',
    color: 'white'
  },
});
import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {useTheme} from '@react-navigation/native';

export function Paragraph({children, style, ...props}) {
    const {colors} = useTheme();
    return (
      <Text {...props} style={[styles.text, style, {color: colors.text}]}>
        {children}
      </Text>
    );
}


const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        fontFamily: 'System',
        fontWeight: '400',
    }
})
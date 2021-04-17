import React from "react";
import { StyleSheet, Text } from "react-native";

export function Heading({ children, style, ...props }) {
  return (
    <Text {...props} style={[styles.text, style]}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 36,
    fontFamily: "System",
    fontWeight: "500",
    color: "#2D5E91",
  },
});

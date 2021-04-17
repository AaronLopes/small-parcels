import React from "react";
import { StyleSheet, Text } from "react-native";

export function SubHeading({ children, style, ...props }) {
  return (
    <Text {...props} style={[styles.text, style]}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 28,
    fontFamily: "System",
    fontWeight: "500",
    color: "#DF7E4D",
  },
});

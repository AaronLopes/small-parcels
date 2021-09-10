import React from "react";
import { StyleSheet, TextInput } from "react-native";

export function Input({ style, ...props }) {
  return (
    <TextInput
      {...props}
      style={[styles.input, style]}
      placeholderTextColor={"#579FAC"}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    width: "85%",
    padding: 20,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "#579FAC",
    color: "black",
  },
});

import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Heading } from "../components/Heading";
import { Input } from "../components/Input";
import { FilledButton } from "../components/FilledButton";

export default function RegisterScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Heading style={styles.title}>Register</Heading>
      <Input
        style={styles.input}
        placeholder={"Email"}
        keyboardType={"email-address"}
      />
      <Input
        style={styles.input}
        placeholder={"Business Address"}
        keyboardType={"email-address"}
      />
      <Input style={styles.input} placeholder={"Phone Number"} />
      <Input style={styles.input} placeholder={"Password"} secureTextEntry />
      <Input
        style={styles.input}
        placeholder={"Confirm Password"}
        secureTextEntry
      />
      <FilledButton
        style={styles.signin}
        title={"Register"}
        onPress={() => {
          navigation.navigate("HomeStack", { screen: "Measure" });
        }}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 100,
    alignItems: "center",
    //alignItems: 'center',``
    //justifyContent: 'center',
  },
  title: {
    marginBottom: 30,
  },
  subtitle: {
    marginBottom: 50,
  },
  input: {
    marginVertical: 10,
  },
  signin: {
    marginTop: 50,
    marginBottom: 20,
  },
});

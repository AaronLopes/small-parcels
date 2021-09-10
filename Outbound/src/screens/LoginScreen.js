import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Heading } from "../components/Heading";
import { Input } from "../components/Input";
import { Paragraph } from "../components/Paragraph";
import { FilledButton } from "../components/FilledButton";

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Heading style={styles.title}>Outbound</Heading>

      <Paragraph style={styles.subtitle}>
        Welcome to painless end to end shipping
      </Paragraph>

      <Input
        style={styles.input}
        placeholder={"Email"}
        keyboardType={"email-address"}
      />
      <Input style={styles.input} placeholder={"Password"} secureTextEntry />
      <FilledButton
        style={styles.signin}
        title={"Sign In"}
        onPress={() => {
          navigation.navigate("HomeStack", { screen: "Measure" });
        }}
      />
      <FilledButton
        title={"Register"}
        onPress={() => {
          navigation.navigate("AuthStack", { screen: "Register" });
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
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  title: {
    marginBottom: 10,
  },
  subtitle: {
    marginTop: 10,
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

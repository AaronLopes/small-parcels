import React from "react";
import { StyleSheet, View } from "react-native";
import { FilledButton } from "../components/FilledButton";
import { Heading } from "../components/Heading";
import { Input } from "../components/Input";
import { Paragraph } from "../components/Paragraph";
import { SubHeading } from "../components/SubHeading";

export default function CheckoutScreen({ navigation, route }) {
  const { fromZ, toZ, rate } = route.params;
  return (
    <View style={styles.container}>
      <Heading style={styles.title}>Checkout</Heading>
      <SubHeading style={styles.subtitle}>Summary</SubHeading>
      <View style={styles.checkoutBox}>
        <Paragraph style={styles.content}>Carrier: USPS</Paragraph>
        <Paragraph style={styles.content}>Expected: Tues, April 20</Paragraph>
        <Paragraph style={styles.total}>Total: ${rate}</Paragraph>
      </View>
      <SubHeading style={styles.subtitle}>Payment</SubHeading>
      <Paragraph style={styles.payment}>
        Confirm CVV for card ending in 4200
      </Paragraph>
      <Input style={styles.input} secureTextEntry />
      <FilledButton
        style={styles.finish}
        title={"Finish"}
        onPress={() => {
          navigation.navigate("HomeStack", { screen: "Measure" });
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 120,
    alignItems: "center",
  },
  subtitle: {
    padding: 25,
  },
  checkoutBox: {
    borderWidth: 4,
    width: 300,
    height: 210,
    borderRadius: 8,
    borderColor: "#579FAC",
    alignContent: "flex-end",
    flexDirection: "column",
  },
  content: {
    padding: 15,
    color: "#579FAC",
  },
  payment: {
    color: "#DF7E4D",
  },
  total: {
    padding: 15,
    color: "#579FAC",
    fontWeight: "700",
  },
  input: {
    width: 65,
    marginTop: 15,
  },
  finish: {
    marginTop: 50,
  },
});

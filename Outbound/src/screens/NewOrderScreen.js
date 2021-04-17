import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  View,
} from "react-native";
import { Heading } from "../components/Heading";
import { SubHeading } from "../components/SubHeading";
import { Input } from "../components/Input";
import { Paragraph } from "../components/Paragraph";
import { FilledButton } from "../components/FilledButton";

export default function NewOrderScreen({ navigation }) {
  const [fromZip, setFromZip] = React.useState(null);
  const [toZip, setToZip] = React.useState(null);

  const DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>
  );

  return (
    <DismissKeyboard>
      <View style={styles.container}>
        <Heading style={styles.title}>New Shipment</Heading>
        <SubHeading style={styles.title}>Single Destination</SubHeading>
        <Paragraph style={styles.title}>From:</Paragraph>
        <Input
          style={styles.input}
          defaultValue={fromZip}
          placeholder={"Zip Code"}
          keyboardType={"number-pad"}
        />
        <Paragraph style={styles.title}>To:</Paragraph>
        <Input
          style={styles.input}
          defaultValue={toZip}
          placeholder={"Zip Code"}
          keyboardType={"number-pad"}
        />
        <FilledButton
          style={styles.nextButton}
          title={"Next"}
          onPress={() => {
            navigation.navigate("NewMeasureStack", {
              screen: "Checkout",
              from: fromZip,
              to: toZip,
            });
          }}
        />
      </View>
    </DismissKeyboard>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 100,
    alignItems: "center",
  },
  title: {
    margin: 20,
  },
  input: {
    width: 110,
  },
  nextButton: {
    marginTop: 50,
  },
});

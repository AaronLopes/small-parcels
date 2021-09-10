import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  View,
  Keyboard,
} from "react-native";
import { Heading } from "../components/Heading";
import { SubHeading } from "../components/SubHeading";
import { Input } from "../components/Input";
import { Paragraph } from "../components/Paragraph";
import { FilledButton } from "../components/FilledButton";
import axios from "axios";

export default function NewOrderScreen({ navigation }) {
  const [fromZip, setFromZip] = React.useState("30332");
  const [toZip, setToZip] = React.useState("10001");

  let uspsPriceURL = "http://128.61.43.138:5000/price_USPS/";
  let fedexPriceURL = "http://128.61.43.138:5000/price_FedEx/";

  const getPrices = () => {
    if (toZip == "") {
      uspsPriceURL = "http://128.61.43.138:5000/price_USPS/10001";
      fedexPriceURL = "http://128.61.43.138:5000/price_FedEx/10001";
    }
    const requestUSPS = axios.get(`${uspsPriceURL + toZip}`);
    const requestFedEx = axios.get(`${fedexPriceURL + toZip}`);

    axios
      .all([requestUSPS, requestFedEx])
      .then(
        axios.spread((...responses) => {
          const responseUSPS = responses[0];
          const responseFedEx = responses[1];
          console.log(responseUSPS.data[0], responseFedEx.data);
          navigation.navigate("NewMeasureStack", {
            screen: "Rates",
            params: {
              fromZ: fromZip,
              toZ: toZip,
              uspsRate: responseUSPS.data[0],
              fedexRate: responseFedEx.data,
            },
          });
        })
      )
      .catch((errors) => {
        // react on errors.
        console.error(errors);
      });
  };

  const getUSPSPrice = () => {
    axios
      .get(`${uspsPriceURL + toZip}`)
      .then((response) => {
        console.log("succes axios :", response.data[0]);
        navigation.navigate("NewMeasureStack", {
          screen: "Rates",
          params: {
            fromZ: fromZip,
            toZ: toZip,
            uspsRate: response.data[0],
            fedexRate: "34.50",
          },
        });
      })
      .catch((error) => {
        console.log("fail axios :", error);
      });
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <Heading style={styles.title}>New Shipment</Heading>
          <SubHeading style={styles.title}>Single Destination</SubHeading>
          <Paragraph style={styles.title}>From: </Paragraph>
          <Input
            style={styles.input}
            placeholder={"Zip Code"}
            defaultValue={fromZip}
            onChangeText={(fromZip) => setFromZip(fromZip)}
            keyboardType={"number-pad"}
            returnKeyType={"done"}
          />
          <Paragraph style={styles.title}>To:</Paragraph>
          <Input
            style={styles.input}
            placeholder={"Zip Code"}
            onChangeText={(toZip) => setToZip(toZip)}
            keyboardType={"number-pad"}
            returnKeyType={"done"}
          />
          <FilledButton
            style={styles.nextButton}
            title={"Next"}
            onPress={() => {
              //getUSPSPrice();
              getPrices();
            }}
          />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  inner: {
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

import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Heading } from "../components/Heading";
import { SubHeading } from "../components/SubHeading";
import { RateCard } from "../components/RateCard";
import { Paragraph } from "../components/Paragraph";

export default function RateScreen({ navigation, route }) {
  const { fromZ, toZ, uspsRate, fedexRate } = route.params;
  return (
    <View style={styles.container}>
      <Heading style={styles.title}>New Shipment</Heading>
      <SubHeading style={styles.title}>Carrier Rates</SubHeading>
      <Text style={styles.zipStyle}>
        {fromZ} to {toZ}
      </Text>
      <View style={styles.rateCards}>
        <RateCard
          title={"USPS"}
          dateInfo={"Thurs, April 22"}
          rateInfo={uspsRate}
          style={styles.card}
          onPress={() => {
            navigation.navigate("NewMeasureStack", {
              screen: "Checkout",
              params: {
                fromZ: fromZ,
                toZ: toZ,
                rate: uspsRate,
              },
            });
          }}
        />
        <View style={styles.space}></View>
        <RateCard
          title={"FedEx"}
          dateInfo={"Sat, April 22"}
          rateInfo={fedexRate}
          onPress={() => {
            navigation.navigate("NewMeasureStack", {
              screen: "Checkout",
              params: {
                fromZ: fromZ,
                toZ: toZ,
                rate: fedexRate,
              },
            });
          }}
        />
      </View>
    </View>
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
  zipStyle: {
    fontSize: 18,
    fontFamily: "System",
    fontWeight: "500",
    color: "#DF7E4D",
  },
  space: {
    height: 40,
  },
  rateCards: {
    flex: 1,
    flexDirection: "column",
    paddingTop: 40,
  },
});

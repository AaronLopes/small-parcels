import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export function RateCard({ title, dateInfo, rateInfo, refundInfo, onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.infobox}>
        <Text style={styles.subtitle}>Expected</Text>
        <Text style={styles.info}>{dateInfo}</Text>
      </View>
      <View style={styles.infobox}>
        <Text style={styles.subtitle}>Rate</Text>
        <Text style={styles.info}>{rateInfo}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#169189",
    width: 350,
    height: 66,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  infobox: {
    flexDirection: "column",
    alignContent: "flex-start",
  },
  info: {
    fontSize: 14,
    fontFamily: "System",
    fontWeight: "400",
    color: "white",
    paddingTop: 5,
    paddingLeft: 37,
  },
  title: {
    fontSize: 18,
    fontFamily: "System",
    fontWeight: "500",
    color: "white",
    paddingLeft: 20,
    paddingRight: 10,
    paddingTop: 20,
  },
  subtitle: {
    fontSize: 18,
    fontFamily: "System",
    fontWeight: "500",
    color: "white",
    paddingLeft: 37,
    paddingRight: 10,
    paddingTop: 10,
  },
  measurement: {
    fontSize: 16,
    fontFamily: "System",
    fontWeight: "400",
    color: "white",
    paddingLeft: 60,
    paddingTop: 12,
  },
});

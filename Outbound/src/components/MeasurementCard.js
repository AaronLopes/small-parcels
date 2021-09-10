import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export function MeasurementCard({
  title,
  length,
  width,
  height,
  weight,
  onPress,
  navigation,
}) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.measurement}>
        {length}
        {"x"}
        {width}
        {"x"}
        {height}
      </Text>
      <Text style={styles.measurement}>
        {weight}
        {" lbs"}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#579FAC",
    width: 350,
    height: 45,
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
  title: {
    fontSize: 18,
    fontFamily: "System",
    fontWeight: "500",
    color: "white",
    paddingLeft: 20,
    paddingRight: 10,
    paddingTop: 11,
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

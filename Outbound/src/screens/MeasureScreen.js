import React, { useState } from "react";
import Modal from "react-native-modal";
import { Camera, Permissions } from "expo";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Heading } from "../components/Heading";
import { RectButton } from "../components/RectButton";
import { MeasurementCard } from "../components/MeasurementCard";

export default function MeasureScreen({ navigation }) {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.container}>
      <Heading style={styles.title}>Measurements</Heading>
      <RectButton
        style={styles.measure}
        title={"Add Item"}
        onPress={toggleModal}
      />
      <MeasurementCard
        title={"Shovel"}
        length={"5"}
        width={"5"}
        height={"10"}
        weight={"18.2"}
        onPress={() => {
          navigation.navigate("NewMeasureStack", { screen: "NewOrder" });
        }}
      />
      <View style={styles.container}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={isModalVisible}
          onBackdropPress={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <Text style={styles.newItem}>New Item</Text>
            <RectButton
              style={styles.modalButton}
              title={"Camera"}
              onPress={() => {
                setModalVisible(false);
                navigation.navigate("NewMeasureStack", { screen: "Camera" });
              }}
            />
            <RectButton
              style={styles.modalButton}
              title={"Manual"}
              onPress={() => {
                setModalVisible(false);
                navigation.navigate("NewMeasureStack", {
                  screen: "Estimation",
                });
              }}
            />
          </View>
        </Modal>
      </View>
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
  modalContainer: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    height: 300,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    marginBottom: 15,
  },
  measure: {
    height: 68,
    width: 350,
    marginTop: 10,
    marginBottom: 50,
  },
  modalButton: {
    margin: 15,
    width: 250,
    height: 70,
  },
  newItem: {
    fontSize: 36,
    fontFamily: "System",
    fontWeight: "500",
    color: "#2D5E91",
  },
});

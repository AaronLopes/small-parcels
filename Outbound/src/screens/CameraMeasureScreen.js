import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Camera } from "expo-camera";
import { FilledButton } from "../components/FilledButton";

export default function CameraMeasureScreen({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate("HomeStack", { screen: "Measure" });
            }}
          >
            <Text style={styles.text}> Return </Text>
          </TouchableOpacity>
          <FilledButton
            title={"Scan"}
            style={styles.capture}
            onPress={() => {
              navigation.navigate("NewMeasureStack", { screen: "Estimation" });
            }}
          />
        </View>
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  capture: {
    alignContent: "center",
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "column-reverse",
    alignItems: "center",
    backgroundColor: "transparent",
    margin: 30,
  },
  button: {
    padding: 20,
  },
  text: {
    fontSize: 18,
    color: "white",
  },
});

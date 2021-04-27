import React from "react";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Heading } from "../components/Heading";
import { Input } from "../components/Input";
import { Paragraph } from "../components/Paragraph";
import { FilledButton } from "../components/FilledButton";

export default function EstimationScreen({ navigation }) {
  const DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>
  );

  return (
    <DismissKeyboard>
      <View style={styles.container}>
        <Heading style={styles.title}>Estimation</Heading>
        <Paragraph>Length, Width, Height</Paragraph>
        <View style={styles.sizesContainer}>
          <Input
            style={styles.input}
            defaultValue={"5"}
            keyboardType={"number-pad"}
          />
          <Input
            style={styles.input}
            defaultValue={"10"}
            keyboardType={"number-pad"}
          />
          <Input
            style={styles.input}
            defaultValue={"5"}
            keyboardType={"number-pad"}
          />
        </View>
        <Paragraph>Weight</Paragraph>
        <View style={styles.sizesContainer}>
          <Input style={styles.input} keyboardType={"number-pad"}></Input>
        </View>
        <Paragraph>Measurement Title</Paragraph>
        <View style={styles.titleContainer}>
          <Input style={styles.titleInput} defaultValue={"Small Box"}></Input>
        </View>
        <FilledButton
          style={styles.nextButton}
          title={"Start Order"}
          onPress={() => {
            navigation.navigate("NewMeasureStack", {
              screen: "NewOrder",
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
    paddingTop: 120,
    alignItems: "center",
  },
  sizesContainer: {
    flexDirection: "row",
    paddingTop: 30,
    paddingBottom: 50,
  },
  title: {
    margin: 20,
  },
  input: {
    width: 65,
    marginHorizontal: 15,
  },
  sizes: {
    marginHorizontal: 15,
  },
  titleInput: {
    width: 150,
  },
  titleContainer: {
    paddingTop: 20,
  },
  nextButton: {
    marginTop: 60,
  },
});

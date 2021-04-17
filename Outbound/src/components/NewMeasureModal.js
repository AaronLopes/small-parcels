import React, { useState } from "react";
import Modal from "react-native-modal";
import { StyleSheet, Text, View } from "react-native";
import { RectButton } from "../components/RectButton";
import { Heading } from "../components/Heading";

const initialValues = {
  length: "",
  width: "",
  height: "",
  weight: "",
  name: "",
};

export default function NewMeasureModal({ visible, onPress }) {}

const styles = StyleSheet.create({
  container: {
    width: "80%",
  },
});

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CameraMeasureScreen from "../screens/CameraMeasureScreen";
import NewOrderScreen from "../screens/NewOrderScreen";
import EstimationScreen from "../screens/EstimationScreen";
import CheckoutScreen from "../screens/CheckoutScreen";
import RateScreen from "../screens/RatesScreen";

const NewMeasureStack = createStackNavigator();

export default function NewMeasureNavigator() {
  return (
    <NewMeasureStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <NewMeasureStack.Screen name={"Camera"} component={CameraMeasureScreen} />
      <NewMeasureStack.Screen name={"NewOrder"} component={NewOrderScreen} />
      <NewMeasureStack.Screen name={"Rates"} component={RateScreen} />
      <NewMeasureStack.Screen
        name={"Estimation"}
        component={EstimationScreen}
      />
      <NewMeasureStack.Screen name={"Checkout"} component={CheckoutScreen} />
    </NewMeasureStack.Navigator>
  );
}

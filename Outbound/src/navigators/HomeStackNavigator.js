import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SettingScreen from "../screens/SettingScreen";
import MeasureScreen from "../screens/MeasureScreen";
import OrderScreen from "../screens/OrderScreen";
import CameraMeasureScreen from "../screens/CameraMeasureScreen";

const HomeStack = createBottomTabNavigator();

export default function HomeStackNavigator() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <HomeStack.Screen name={"Orders"} component={OrderScreen} />
      <HomeStack.Screen name={"Measure"} component={MeasureScreen} />
      <HomeStack.Screen name={"Settings"} component={SettingScreen} />
    </HomeStack.Navigator>
  );
}

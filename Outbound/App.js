import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AuthStackNavigator from './src/navigators/AuthStackNavigator';
import HomeStackNavigator from './src/navigators/HomeStackNavigator';

const RootStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{
        headerShown: false,
      }}>
        <RootStack.Screen name={'AuthStack'} component={AuthStackNavigator}/>
        <RootStack.Screen name={'HomeStack'} component={HomeStackNavigator}/>
      </RootStack.Navigator>
    </NavigationContainer>
  )
}

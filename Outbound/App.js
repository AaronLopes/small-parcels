import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import AuthStackNavigator from './src/navigators/AuthStackNavigator';

const RootStack = createStackNavigator();
const AuthStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{
        headerShown: false,
      }}>
        <RootStack.Screen name={'AuthStack'} component={AuthStackNavigator}/>
      </RootStack.Navigator>
    </NavigationContainer>
  )
}

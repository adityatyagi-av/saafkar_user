import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from '../screens/SplashScreen/SplashScreen';
import AfterSplashScreen from '../screens/AfterSplashScreen/AfterSplash';
import Login from '../screens/LoginScreen/LoginScreen';
import OtpVerify from '../screens/OtpVerify/Otp';
import Dashboard from '../screens/Dashboard/Dashboard';
import MapScreen from '../screens/MapScreen/MapScreen';
const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Splash" component={MapScreen} />
        <Stack.Screen name="After-Splash" component={AfterSplashScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="OtpVerify" component={OtpVerify} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="MapScreen" component={MapScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;

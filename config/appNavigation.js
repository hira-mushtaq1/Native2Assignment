// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../Components/Home';
import Product from '../Components/Product';
import Order from '../Components/Order';

function HomeScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function AppRouter() {
  return (
    <NavigationContainer>
      <Stack.Navigator></Stack.Navigator>
      <Stack.Screen name="Product" component={Product} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Order" component={Order} />
    </NavigationContainer>
  );
}

export default AppRouter;

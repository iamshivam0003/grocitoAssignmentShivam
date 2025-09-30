import { View, Text } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from '../screen/Splash';
import BottomNavigator from './BottomNavigator';
import Product from '../screen/Product'
const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='Splash'>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="BottomNavigator" component={BottomNavigator}/>
      <Stack.Screen name="Product" component={Product} options={{headerShown:true}}/>
    </Stack.Navigator>
  );
};

export default StackNavigator;

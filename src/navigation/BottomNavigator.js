import { View, Text } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screen/Home';
import Cart from '../screen/Cart';
import CartIconCount from '../components/CartIconCount';
import { MaterialIcons } from '@react-native-vector-icons/material-icons';
const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarStyle: {
          height: 60,
          paddingVertical: 4,
          justifyContent: 'center',
        },
        tabBarLabelStyle: {
          fontSize: 13,
          fontWeight: '800',
          paddingBottom: 7,
        },
        headerTitleAlign:'center',
        headerTitleStyle:{fontSize:30,color:'#535050ff'}
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => {
            return focused ? (
              <MaterialIcons name="home-filled" color="#4a78c2" size={35} />
            ) : (
              <MaterialIcons name="home" color="#414142" size={35} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({ focused }) => {
            return focused ? (
              <CartIconCount focused={focused} />
            ) : (
              <CartIconCount />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;

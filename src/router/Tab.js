import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import {
  HomeScreen,
  ProfileScreen,
} from '../pages';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default MainTab = (Props) => {
  return (
    <Tab.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

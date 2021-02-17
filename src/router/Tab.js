import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 

import {
  HomeScreen,
  ProfileScreen,
} from '../pages';
import { View,Text } from 'react-native';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TabComponent = (Props)=>{
  return(
    <View>
      <Text></Text>
    </View>
  );
}

export default MainTab = (Props) => {
  return (
    <Tab.Navigator tabBar={TabComponent}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

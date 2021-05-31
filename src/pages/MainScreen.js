import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import MainTab from '../layouts/MainTab';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
export default MainScreen = ({navigation,route}) => {
  return (
    <Tab.Navigator tabBar={MainTab}>
      <Stack.Screen name="Home" component={HomeScreen} initialParams={{id:route.params.id}}/>
      <Stack.Screen name="Profile" component={ProfileScreen} initialParams={{id:route.params.id}}/>
    </Tab.Navigator>
  );
};

import 'react-native-gesture-handler';
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Assets, createStackNavigator } from '@react-navigation/stack';
import { SplashScreen, HomeScreen, ProfileScreen, LoginScreen } from '../pages';

const Stack = createStackNavigator();

const MainApp = () => {
    return (
        <Stack.Navigator initialRouteName='Home' headerMode='none'>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
    )
}

const Router = () => {
    return (
        <Stack.Navigator initialRouteName='Splash' headerMode='none'>
            <Stack.Screen name="Splash" component={SplashScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="MainApp" component={MainApp} />
        </Stack.Navigator>
    )
}

export default Router

const styles = StyleSheet.create({})

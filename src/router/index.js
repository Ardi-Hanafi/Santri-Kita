import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Assets, createStackNavigator} from '@react-navigation/stack';
import {
  HomeScreen,
  ProfileScreen,
  SplashScreen,
  LoginScreen,
  KesehatanScreen,
  AktivitasScreen,
  PelanggaranScreen,
  PrestasiScreen,
  SilabusScreen,
  SilabusDetailScreen,
  BiayaScreen,
  BiayaDetailScreen,
} from '../pages';

const Stack = createStackNavigator();

const MainApp = () => {
  return (
    <Stack.Navigator initialRouteName="Home" headerMode="none">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Kesehatan" component={KesehatanScreen} />
      <Stack.Screen name="Aktivitas" component={AktivitasScreen} />
      <Stack.Screen name="Pelanggaran" component={PelanggaranScreen} />
      <Stack.Screen name="Prestasi" component={PrestasiScreen} />
      <Stack.Screen name="Silabus" component={SilabusScreen} />
      <Stack.Screen name="SilabusDetail" component={SilabusDetailScreen} />
      <Stack.Screen name="Biaya" component={BiayaScreen} />
      <Stack.Screen name="BiayaDetail" component={BiayaDetailScreen} />
    </Stack.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="MainApp" headerMode="none">
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="MainApp" component={MainApp} />
    </Stack.Navigator>
  );
};

export default Router;

const styles = StyleSheet.create({});

import 'react-native-gesture-handler';
import React, {useReducer, useEffect, useMemo} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SplashScreen, LoginScreen} from '../pages';

import {
  KesehatanScreen,
  AktivitasScreen,
  PelanggaranScreen,
  PrestasiScreen,
  SilabusScreen,
  SilabusDetailScreen,
  BiayaScreen,
  BiayaDetailScreen,
  NotifScreen,
} from '../pages';
import MainTab from './Tab';
import {View, Text} from 'react-native';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="MainApp">
      <Stack.Screen name="Home" component={MainTab} />
      <Stack.Screen name="Kesehatan" component={KesehatanScreen} />
      <Stack.Screen name="Aktivitas" component={AktivitasScreen} />
      <Stack.Screen name="Pelanggaran" component={PelanggaranScreen} />
      <Stack.Screen name="Prestasi" component={PrestasiScreen} />
      <Stack.Screen name="Silabus" component={SilabusScreen} />
      <Stack.Screen name="SilabusDetail" component={SilabusDetailScreen} />
      <Stack.Screen name="Biaya" component={BiayaScreen} />
      <Stack.Screen name="BiayaDetail" component={BiayaDetailScreen} />
      <Stack.Screen name="Notif" component={NotifScreen} />
    </Stack.Navigator>
  );
};

export default Router;

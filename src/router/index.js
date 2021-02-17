import 'react-native-gesture-handler';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

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
import MainTab from './MainTab';
import Header from '../components/Header';

const Stack = createStackNavigator();

const screenOptions = {
  header: () => <Header name="Ahmad Supardi"/>,
};

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions} headerMode="float">
      <Stack.Screen name="Home" component={MainTab} />
      <Stack.Screen name="Kesehatan" component={KesehatanScreen}/>
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

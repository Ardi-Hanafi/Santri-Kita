import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
    HomeScreen,
    ProfileScreen,
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

export default MainApp = () => {
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

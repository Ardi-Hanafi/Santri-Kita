import React from 'react';
import {Text,View} from 'react-native';
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
  NotifScreen,
} from '../pages';

const Stack = createStackNavigator();
const Pages = ({route}) => {
  return (
    <Stack.Navigator initialRouteName="Home" headerMode="none">
      <Stack.Screen
        name="Home"
        initialParams={{...route.params}}
        component={HomeScreen}
      />
      <Stack.Screen
        name="Kesehatan"
        initialParams={{...route.params}}
        component={KesehatanScreen}
      />
      <Stack.Screen
        name="Aktivitas"
        initialParams={{...route.params}}
        component={AktivitasScreen}
      />
      <Stack.Screen
        name="Pelanggaran"
        initialParams={{...route.params}}
        component={PelanggaranScreen}
      />
      <Stack.Screen
        name="Prestasi"
        initialParams={{...route.params}}
        component={PrestasiScreen}
      />
      <Stack.Screen
        name="Silabus"
        initialParams={{...route.params}}
        component={SilabusScreen}
      />
      <Stack.Screen
        name="SilabusDetail"
        initialParams={{...route.params}}
        component={SilabusDetailScreen}
      />
      <Stack.Screen
        name="Biaya"
        initialParams={{...route.params}}
        component={BiayaScreen}
      />
      <Stack.Screen
        name="BiayaDetail"
        initialParams={{...route.params}}
        component={BiayaDetailScreen}
      />
      <Stack.Screen
        name="Notif"
        initialParams={{...route.params}}
        component={NotifScreen}
      />
    </Stack.Navigator>
  );
};

const MyTab = (Props) => {
  return (
    <View style={{}}>
      <Text>Test</Text>
    </View>
  );
};

export default MainApp = ({route}) => {
  return (
    <Tab.Navigator tabBar={MyTab}>
      <Stack.Screen
        name="Home"
        component={Pages}
        initialParams={{...route.params}}
        
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};

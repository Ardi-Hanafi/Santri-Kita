import React, {createContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';

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
const Tab = createBottomTabNavigator();

const Pages = () => {
  return (
    <Stack.Navigator iznitialRouteName="Home" headerMode="none">
      <Stack.Screen name="Home" component={HomeScreen} />
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

export default MainApp = () => {
  const [page, setPage] = React.useState('Home');
  const pageContext = React.useMemo(() => ({
    getContext: () => {
      return page;
    },
    setContext: (value) => {
      setPage(value);
    },
  }));
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#10B981',
      }}>
      <Stack.Screen
        name="Home"
        component={Pages}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="user-alt" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

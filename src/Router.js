import 'react-native-gesture-handler';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {
  MainScreen,
  KesehatanScreen,
  AktivitasScreen,
  PelanggaranScreen,
  PrestasiScreen,
  SilabusScreen,
  SilabusDetailScreen,
  BiayaScreen,
  BiayaDetailScreen,
  NotifScreen,
} from './pages';
import Header from './layouts/MainHeader';
import {AuthContext, SantriDataContext} from './components/Context';
const Stack = createStackNavigator();

// const screenOptions = {
//   header: () => {
//     return <Header name={dataSantri.nama} countNotif='' />;
//   },
// };

const Router = () => {
  const {dataSantri} = React.useContext(SantriDataContext);
  const {userID} = React.useContext(AuthContext);
  
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{header: ()=> <Header name={dataSantri.nama} countNotif='' />}}
      headerMode="float">
      <Stack.Screen
        name="Home"
        component={MainScreen}
        initialParams={{id: userID}}
      />
      <Stack.Screen
        name="Kesehatan"
        component={KesehatanScreen}
        initialParams={{id: userID}}
      />
      <Stack.Screen
        name="Aktivitas"
        component={AktivitasScreen}
        initialParams={{id: userID}}
      />
      <Stack.Screen
        name="Pelanggaran"
        component={PelanggaranScreen}
        initialParams={{id: userID}}
      />
      <Stack.Screen
        name="Prestasi"
        component={PrestasiScreen}
        initialParams={{id: userID}}
      />
      <Stack.Screen
        name="Silabus"
        component={SilabusScreen}
        initialParams={{id: userID}}
      />
      <Stack.Screen
        name="SilabusDetail"
        component={SilabusDetailScreen}
        initialParams={{id: userID}}
      />
      <Stack.Screen
        name="Biaya"
        component={BiayaScreen}
        initialParams={{id: userID}}
      />
      <Stack.Screen
        name="BiayaDetail"
        component={BiayaDetailScreen}
        initialParams={{id: userID}}
      />
      <Stack.Screen
        name="Notif"
        component={NotifScreen}
        initialParams={{id: userID}}
      />
    </Stack.Navigator>
  );
};

export default Router;

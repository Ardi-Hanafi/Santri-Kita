import React,{createContext} from 'react';
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
    NotifScreen
  } from '../pages';

  import {ActivePageContext} from '../components/Context';
import { setContext } from '@apollo/client/link/context';
const Stack = createStackNavigator();

export default MainApp = () => {
  const [page,setPage] = React.useState('Home')
  const pageContext = React.useMemo(()=>({
    getContext:()=>{
      return page
    },
    setContext: (value)=>{
      setPage(value)
    }
  }))
  return (
    <ActivePageContext.Provider value={pageContext}>
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
        <Stack.Screen name="Notif" component={NotifScreen} />
      </Stack.Navigator>
    </ActivePageContext.Provider>
  );
};

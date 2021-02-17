import 'react-native-gesture-handler';
import React, {useReducer, useEffect, useMemo} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Text, TouchableOpacity} from 'react-native';
import {SplashScreen, LoginScreen} from '../pages';
import ScreenRouter from './ScreenRouter';
import {AuthContext, SantriDataContext} from '../components/Context';
import AsyncStorage from '@react-native-community/async-storage';
import {setContext} from '@apollo/client/link/context';

import {
  HomeScreen,
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

import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from '@apollo/client';

const Stack = createStackNavigator();

// endpoint api
const httpLink = createHttpLink({
  uri: `https://santrikita-api.herokuapp.com/graphql`,
});

const authLink = setContext(async (_, {headers}) => {
  // get the authentication token from local storage if it exists
  const token = await AsyncStorage.getItem('userToken');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
});

const initialLoginState = {
  isLoading: true,
  userName: null,
  userToken: null,
};

const loginReducer = (prevState, action) => {
  switch (action.type) {
    case 'RETRIEVE_TOKEN':
      return {
        userName: action.id,
        userToken: action.token,
        isLoading: false,
      };
    case 'LOGIN':
      return {
        userName: action.id,
        userToken: action.token,
        isLoading: false,
      };
    case 'LOGOUT':
      return {
        userName: null,
        userToken: null,
        isLoading: false,
      };
  }
};

const Router = () => {
  const [notifCount, setNotifCount] = React.useState(0);
  const [loginState, dispatch] = useReducer(loginReducer, initialLoginState);
  const [dataSantri, setDataSantri] = React.useState();
  const authContext = useMemo(() => ({
    signIn: async (jwt, userName) => {
      if (jwt) {
        try {
          await AsyncStorage.setItem('userToken', jwt);
          await AsyncStorage.setItem('id', userName);
        } catch (e) {
          console.log(e);
        }
      }
      dispatch({type: 'LOGIN', id: userName, token: jwt});
    },
    signOut: async () => {
      try {
        await AsyncStorage.removeItem('userToken');
        await AsyncStorage.removeItem('id');
      } catch (e) {
        console.log(e);
      }
      dispatch({type: 'LOGOUT'});
    },
  }));

  useEffect(() => {
    setTimeout(async () => {
      let userToken = null;
      let userName = null;
      try {
        // get userToken and id from AsyncStorage
        userToken = await AsyncStorage.getItem('userToken');
        userName = await AsyncStorage.getItem('id');
      } catch (e) {
        console.log(e);
      }
      // Assign state userName and userToken
      dispatch({type: 'RETRIEVE_TOKEN', id: userName, token: userToken});
    }, 3000);
  });

  // return login if isLoading true
  const handleSplash = () => {
    // if (loginState.isLoading) {
    if (loginState.isLoading) {
      return (
        <Stack.Screen
          options={{headerShown: false}}
          name="Splash"
          component={SplashScreen}
        />
      );
    }
  };

  return (
    <SantriDataContext.Provider value={(dataSantri, setDataSantri)}>
      <AuthContext.Provider value={authContext}>
        <ApolloProvider client={client}>
          <Stack.Navigator initialRouteName="MainApp">
            {handleSplash()}
            {loginState.userToken === null ? (
              <Stack.Screen
                options={{headerShown: false}}
                name="Login"
                component={LoginScreen}
              />
            ) : (
              <>
                <Stack.Screen name="Home" component={MainTab} />
                <Stack.Screen name="Kesehatan" component={KesehatanScreen} />
                <Stack.Screen name="Aktivitas" component={AktivitasScreen} />
                <Stack.Screen
                  name="Pelanggaran"
                  component={PelanggaranScreen}
                />
                <Stack.Screen name="Prestasi" component={PrestasiScreen} />
                <Stack.Screen name="Silabus" component={SilabusScreen} />
                <Stack.Screen
                  name="SilabusDetail"
                  component={SilabusDetailScreen}
                />
                <Stack.Screen name="Biaya" component={BiayaScreen} />
                <Stack.Screen
                  name="BiayaDetail"
                  component={BiayaDetailScreen}
                />
                <Stack.Screen name="Notif" component={NotifScreen} />
              </>
            )}
          </Stack.Navigator>
        </ApolloProvider>
      </AuthContext.Provider>
    </SantriDataContext.Provider>
  );
};

export default Router;

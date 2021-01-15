import 'react-native-gesture-handler';
import React, {useReducer, useState, useEffect, useMemo} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Assets, createStackNavigator} from '@react-navigation/stack';
import {SplashScreen, LoginScreen} from '../pages';
import ScreenRouter from './ScreenRouter';
import {AuthContext} from '../components/Context';
import AsyncStorage from '@react-native-community/async-storage';

import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from '@apollo/client';
import {setContext} from '@apollo/client/link/context';

const Stack = createStackNavigator();

const initialLoginState = {
  isLoading: true,
  userName: null,
  userToken: null,
};

const httpLink = createHttpLink({
  uri: `https://avocado-api-test.herokuapp.com/graphql`,
});

const authLink = setContext(async(_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = await AsyncStorage.getItem('userToken');
  console.log(token);
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
});

const Router = () => {
  
  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT':
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatch] = useReducer(loginReducer, initialLoginState);

  const authContext = useMemo(() => ({
    getAuth: () =>{
      return loginState;
    },
    signIn: async (jwt,userName) => {
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
        userToken = await AsyncStorage.getItem('userToken');
        userName = await AsyncStorage.getItem('id');
      } catch (e) {
        console.log(e);
      }
      dispatch({type: 'RETRIEVE_TOKEN', id:userName, token: userToken});
    }, 3000);
  });

  function handleSplash() {
    if (loginState.isLoading) {
      return <Stack.Screen name="Splash" component={SplashScreen} />;
    }
  }

  return (
    <AuthContext.Provider value={authContext}>
      <ApolloProvider client={client}>
        <Stack.Navigator initialRouteName="MainApp" headerMode="none">
          {handleSplash()}
          {loginState.userToken === null ? (
            <Stack.Screen name="Login" component={LoginScreen} />
          ) : (
            <Stack.Screen name="MainApp" component={ScreenRouter} />
          )}
        </Stack.Navigator>
      </ApolloProvider>
    </AuthContext.Provider>
  );
};

export default Router;

const styles = StyleSheet.create({});

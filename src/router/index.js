import 'react-native-gesture-handler';
import React, {useReducer, useState, useEffect, useMemo} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Assets, createStackNavigator} from '@react-navigation/stack';
import {SplashScreen, LoginScreen} from '../pages';
import MainRouter from './MainRouter';
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

const jwt = undefined;
const link = createHttpLink({
  uri: `https://avocado-api-test.herokuapp.com/graphql`,
  headers: jwt
    ? {
        authorization: `Bearer ${jwt}`,
      }
    : undefined,
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});

const Router = () => {
  
  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
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
    signIn: async (jwt,userName) => {
      if (jwt) {
        try {
          await AsyncStorage.setItem('userToken', jwt);
        } catch (e) {
          console.log(e);
        }
      }
      dispatch({type: 'LOGIN', id: userName, token: jwt});
    },
    signOut: async () => {
      try {
        await AsyncStorage.removeItem('userToken');
      } catch (e) {
        console.log(e);
      }
      dispatch({type: 'LOGOUT'});
    },
  }));

  useEffect(() => {
    setTimeout(async () => {
      let userToken = null;
      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch (e) {
        console.log(e);
      }
      dispatch({type: 'RETRIEVE_TOKEN', token: userToken});
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
        <Stack.Navigator initialRouteName="Splash" headerMode="none">
          {handleSplash()}
          {loginState.userToken === null ? (
            <Stack.Screen name="Login" component={LoginScreen} />
          ) : (
            <Stack.Screen name="MainApp" component={MainRouter} />
          )}
        </Stack.Navigator>
      </ApolloProvider>
    </AuthContext.Provider>
  );
};

export default Router;

const styles = StyleSheet.create({});

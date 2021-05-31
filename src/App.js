import React, {useReducer, useEffect, useMemo} from 'react';
import LoginScreen from './pages/LoginScreen';
import {NavigationContainer} from '@react-navigation/native';
import Router from './Router';
import {AuthContext, SantriDataContext} from './components/Context';
import AsyncStorage from '@react-native-community/async-storage';
import {setContext} from '@apollo/client/link/context';

import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from '@apollo/client';
import {SplashScreen} from './pages';

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
  nama: '.................',
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

const App = () => {
  const [dataSantri, setDataSantri] = React.useState({
    nama: '................',
  });
  const santriDataContext = React.useMemo(() => ({dataSantri, setDataSantri}));

  const [loginState, dispatch] = useReducer(loginReducer, initialLoginState);
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
    userID: loginState.userName
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

  if (loginState.isLoading) {
    return <SplashScreen />;
  }

  return (
    <AuthContext.Provider value={authContext}>
      <SantriDataContext.Provider value={santriDataContext}>
        <ApolloProvider client={client}>
          <NavigationContainer>
            {loginState.userToken === null ? <LoginScreen /> : <Router />}
          </NavigationContainer>
        </ApolloProvider>
      </SantriDataContext.Provider>
    </AuthContext.Provider>
  );
};

export default App;

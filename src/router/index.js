import 'react-native-gesture-handler';
import React, {useReducer, useEffect, useMemo} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Text, TouchableOpacity} from 'react-native';
import {SplashScreen, LoginScreen} from '../pages';
import ScreenRouter from './ScreenRouter';
import {AuthContext} from '../components/Context';
import AsyncStorage from '@react-native-community/async-storage';
import {setContext} from '@apollo/client/link/context';
import Notif from '../assets/Header/notif.svg';
// import theme from '../components/theme';
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from '@apollo/client';


const Stack = createStackNavigator();
import {useNavigation} from '@react-navigation/native';

// endpoint api
const httpLink = createHttpLink({
  uri: `https://avocado-api-test.herokuapp.com/graphql`,
});

const authLink = setContext(async (_, {headers}) => {
  // get the authentication token from local storage if it exists
  const token = await AsyncStorage.getItem('userToken');
  console.log(token);
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
  const handleSplash = ()=>{
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
  }

  return (
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
            <Stack.Screen
              options={{
                headerStyle: {
                  borderColor: '#E5E7EB',
                  borderWidth: 1,
                  elevation: 0,
                  shadowOpacity: 0
                },
                headerTitle: (Props) => {
                  return (
                    <Text
                      style={{
                        fontFamily: 'Roboto',
                        marginLeft: 15,
                        fontSize: 16,
                        fontWeight: 'bold',
                        color: '#828282',
                      }}>
                      Santri Kita
                    </Text>
                  );
                },
                headerRight: (Props) => {
                  const navigation = useNavigation();
                  return (
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate('Notif');
                      }}
                      style={{
                        width: 15.6,
                        marginRight: 30,
                      }}>
                      <Notif />
                    </TouchableOpacity>
                  );
                },
              }}
              name="MainApp"
              component={ScreenRouter}
            />
          )}
        </Stack.Navigator>
      </ApolloProvider>
    </AuthContext.Provider>
  );
};

export default Router;

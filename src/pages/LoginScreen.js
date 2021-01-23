import React, {useState} from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Input} from 'react-native-elements';
import {AuthContext} from '../components/Context';
import {useMutation, gql} from '@apollo/client';

const NEW_LOGIN = gql`
  mutation login($identifier: String!, $password: String!) {
    login(input: {identifier: $identifier, password: $password}) {
      jwt
      user {
        id
        username
      }
    }
  }
`;

const LoginScreen = ({navigate}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const {signIn} = React.useContext(AuthContext);
  const [login, {data}] = useMutation(NEW_LOGIN);

  const handleSubmit = async (username, password) => {
    try {
      const {data} = await login({
        variables: {identifier: username, password: password},
      });
      signIn(data.login.jwt, data.login.user.id);
    } catch (e) {
      alert('Password salah');
      console.log(e);
    }
  };

  return (
    <SafeAreaView>
      <ScrollView style={styles.pageArea}>
        <View style={styles.container}>
          <Text style={styles.title}>Santri Kita</Text>
          <Image
            source={require('../assets/Login/gbrlogin.png')}
            style={styles.gbrlogin}></Image>

          <View style={styles.containerInput}>
            <Input
              style={{ fontSize:16 }}
              value={username}
              onChangeText={(text) => {
                setUsername(text);
              }}
              placeholder="Username"
              returnKeyType="next"
              />
            <Input
              style={{ fontSize:16 }}
              value={password}
              onChangeText={(text) => {
                setPassword(text);
              }}
              placeholder="Password"
              secureTextEntry={true}
              returnKeyType="done"
            />
          </View>

          <TouchableOpacity
            onPress={() => {
              handleSubmit(username,password);
            }}
            style={styles.btnLogin}>
            <Text style={styles.textBtnLogin}>Masuk</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  pageArea: {
    height: '100%',
    width: '100%',
    backgroundColor: '#fff',
  },
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
    color: '#27AE60',
    marginTop: '10%',
  },
  gbrlogin: {
    width: 300,
    height: 185,
    marginTop: '12%',
  },
  containerInput: {
    width: 290,
    marginVertical: '15%',
  },
  btnLogin: {
    width: 270,
    height: 50,
    backgroundColor: '#27AE60',
    borderRadius: 7,
    justifyContent: 'center',
  },
  textBtnLogin: {
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#F2F2F2',
  },
});

import 'react-native-gesture-handler';
import React, {useContext} from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  Button,
} from 'react-native';
import {AuthContext} from '../components/Context';

const HomeScreen = ({navigation}) => {
  const {signOut} = useContext(AuthContext);

  return (
    <SafeAreaView style={styles.pageArea}>
      <View style={styles.container}>
        <Button
          title="Logout"
          onPress={() => {
            signOut();
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  pageArea: {
    height: '100%',
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  title2: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
  },
  container: {
    width: '100%',
    alignContent: 'center',
  },
});

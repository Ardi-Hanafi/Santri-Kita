import 'react-native-gesture-handler';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Button,
  Image,
  ScrollView,
} from 'react-native';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Biaya from '../components/Home/Biaya';
import Profile from '../components/Home/Profile';
import Menus from '../components/Home/Menus';
import Aktivitas from '../components/Home/Aktivitas';

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.pageArea}>
      <Header></Header>

      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.bagianScroll}>
        <Biaya />
        <Profile />
        <Menus />
        <Aktivitas />
      </ScrollView>

      <Navbar></Navbar>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  bagianScroll: {
    backgroundColor: '#fff',
    marginVertical: 50,
  },
  pageArea: {
    height: '100%',
    backgroundColor: '#fff',
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  container: {
    width: '100%',
    alignContent: 'center',
  },
});

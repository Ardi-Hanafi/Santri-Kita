import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Title from '../components/Title';

const SilabusScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.pageArea}>
      <Header></Header>
      <Title backRoute="Home" title="Silabus" />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.bagianScroll}></ScrollView>

      <Navbar></Navbar>
    </SafeAreaView>
  );
};

export default SilabusScreen;

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

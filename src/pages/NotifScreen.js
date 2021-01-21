import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {View, Text, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Title from '../components/Title';
import NotifList from '../components/Notif/NotifList'

const AktivitasScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.pageArea}>
      <Header></Header>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.bagianScroll}>
        <Title backRoute="Home" title="Notifikasi" />
        <NotifList/>
      </ScrollView>
      <Navbar></Navbar>
    </SafeAreaView>
  );
};

export default AktivitasScreen;

const styles = StyleSheet.create({
  bagianScroll: {
    backgroundColor: '#fff',
    marginVertical: 50,
    flex: 1,
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

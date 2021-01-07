import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {View, Text, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Title from '../components/Title';
import RiwayatList from '../components/Aktivitas/AktivitasList';
import DateFilter from '../components/Aktivitas/DateFilter';
import moment from 'moment';

const AktivitasScreen = ({navigation}) => {
  const handleCallback = (_date, _startDate, _endDate) => {
    console.log([
      _startDate.format('YYYY-MM-DD'),
      _endDate.format('YYYY-MM-DD'),
      _date.format('YYYY-MM-DD'),
    ]);
  };

  return (
    <SafeAreaView style={styles.pageArea}>
      <Header></Header>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.bagianScroll}>
        <Title backRoute="Home" title="Aktivitas" />
        <DateFilter parentCallback={handleCallback} />
        <RiwayatList />
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

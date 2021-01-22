import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import Title from '../components/Title';
import KesehatanList from '../components/Kesehatan/KesehatanList';
import FilterKesehatan from '../components/Kesehatan/FilterKesehatan';
import {useQuery, gql} from '@apollo/client';

const KesehatanScreen = ({navigation}) => {

  return (
    <SafeAreaView style={styles.pageArea}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.bagianScroll}>
        <Title backRoute="Home" title="Riwayat Kesehatan" />
        <FilterKesehatan />
        <KesehatanList />
      </ScrollView>
    </SafeAreaView>
  );
};

export default KesehatanScreen;

const styles = StyleSheet.create({
  bagianScroll: {
    backgroundColor: '#fff',
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

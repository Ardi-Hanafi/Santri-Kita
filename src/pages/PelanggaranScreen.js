import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import Title from '../components/Title';
import FilterPelanggaran from '../components/Pelanggaran/FilterPelanggaran'
import PelanggaranList from '../components/Pelanggaran/PelanggaranList'

const PelanggaranScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.pageArea}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.bagianScroll}>
        <Title backRoute="Home" title="Riwayat Pelanggaran" />
        <FilterPelanggaran />
        <PelanggaranList />
      </ScrollView>
    </SafeAreaView>
  );
};

export default PelanggaranScreen;

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

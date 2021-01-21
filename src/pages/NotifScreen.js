import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import Title from '../components/Title';
import NotifList from '../components/Notif/NotifList'

const AktivitasScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.pageArea}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.bagianScroll}>
        <Title backRoute="Home" title="Notifikasi" />
        <NotifList/>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AktivitasScreen;

const styles = StyleSheet.create({
  bagianScroll: {
    backgroundColor: '#fff',
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

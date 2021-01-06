import React from 'react';
import {View, StyleSheet} from 'react-native';
import Menu from './Menu';

const Menus = () => {
  return (
    <View style={styles.container}>
      <Menu navigationName="Kesehatan" imagePath={require('../../assets/Home/kesehatan.png')} labelText="Kesehatan"/>
      <Menu navigationName="Pelanggaran" imagePath={require('../../assets/Home/pelanggaran.png')} labelText="Pelaggaran"/>
      <Menu navigationName="Prestasi" imagePath={require('../../assets/Home/prestasi.png')} labelText="Prestasi"/>
      <Menu navigationName="Silabus" imagePath={require('../../assets/Home/silabus.png')} labelText="Silabus" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginRight: 25,
    marginLeft: 25,
    marginTop: 20,
    justifyContent: 'space-between',
  },
});

export default Menus;

import React from 'react';
import {View, StyleSheet} from 'react-native';
import Menu from './Menu';
import Icon from 'react-native-vector-icons/Ionicons';
import Iconft from 'react-native-vector-icons/Feather';

const Menus = () => {
  return (
    <View style={styles.container}>
      <Menu navigationName="Kesehatan" iconSvg={<Icon name='heart-outline' size={34} color="#10B981" />} labelText="Kesehatan"/>
      <Menu navigationName="Silabus" iconSvg={<Icon name='book-outline' size={34} color="#10B981" />} labelText="Silabus" />
      <Menu navigationName="Prestasi" iconSvg={<Icon name='md-medal-outline' size={34} color="#10B981" />} labelText="Prestasi"/>
      <Menu navigationName="Pelanggaran" iconSvg={<Iconft name='alert-triangle' size={34} color="#10B981" />} labelText="Kesalahan"/>
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

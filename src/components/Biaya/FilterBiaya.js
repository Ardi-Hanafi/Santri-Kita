import React, {useState} from 'react';
import {TouchableOpacity, Text, StyleSheet, View, Image} from 'react-native';
import Lunas from './Lunas.svg';
import Iconmci from 'react-native-vector-icons/MaterialCommunityIcons';
import Iconft from 'react-native-vector-icons/Feather';


const Item = (Props) => {
  const active = React.useMemo(()=>Props.active,[Props.active]);
  return (
    <TouchableOpacity
      onPress={() => {
        Props.parentCallback(!active);
      }}>
      <View style={[active ? styles.itemAktif : styles.item]}>
          {Props.icon}
        <Text style={{ color:'#fff' }}>{Props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const FilterBiaya = (Props) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 15,
      }}>
      <Item icon={<Iconmci name='check-circle-outline' size={18} color="#fff" style={{marginRight: 5}} />} active={Props.lunas} parentCallback={Props.setLunas} title="Lunas"></Item>
      <Item icon={<Iconft name='alert-circle' size={18} color="#fff" style={{marginRight: 5}} />} active={Props.belumLunas} parentCallback={Props.setBelumLunas} title="Belum Lunas"></Item>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#D1D5DB',
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginHorizontal: 5,
    borderRadius: 8
  },
  itemAktif: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#10B981',
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginHorizontal: 5,
    borderRadius: 8
  },
});

export default FilterBiaya;

import React, {useState} from 'react';
import {TouchableOpacity, Text, StyleSheet, View, Image} from 'react-native';
import Lunas from './Lunas.svg';
import Iconmci from 'react-native-vector-icons/MaterialCommunityIcons';

const data = [
  {
    title: 'Lunas',
    active: true,
  },
  {
    title: 'Belum Lunas',
    active: true,
  },
];

const Item = (Props) => {
  const [active, setActive] = useState(true);
  return (
    <TouchableOpacity
      onPress={() => {
        setActive(!active);
      }}>
      <View style={[active ? styles.itemAktif : styles.item]}>
          <Iconmci name='check-circle-outline' size={18} color="#fff" style={{marginRight: 5}} />
          {/* <Lunas width={15} height={15} style={{marginRight: 5}} /> */}
        <Text style={{ color:'#fff' }}>{Props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const FilterBiaya = () => {
  const items = data.map((item) => (
    <Item key={item.title} title={item.title} />
  ));
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 15,
      }}>
      {items}
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

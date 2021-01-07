import React, {useState} from 'react';
import {TouchableOpacity, Text, StyleSheet, View, Image} from 'react-native';
import LarangWh from '../Pelanggaran/LarangWh.svg'

const data = [
  {
    title: 'Ringan',
    active: true,
  },
  {
    title: 'Sedang',
    active: true,
  },
  {
    title: 'Berat',
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
        <LarangWh height={15} width={15} />
        <Text style={{ color:'#fff', marginLeft:5 }}>{Props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const FilterPelanggaran = () => {
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

export default FilterPelanggaran;

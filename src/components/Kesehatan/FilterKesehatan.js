import React, {useState} from 'react';
import {TouchableOpacity, Text, StyleSheet, View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const data = [
  {
    title: 'Umum',
    active: true,
  },
  {
    title: 'Parah',
    active: true,
  },
  {
    title: 'Bawaan',
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
        <Icon 
          name='heart' 
          size={20} color="#fff" 
          style={{marginRight:5}}
        />
        {/* <Image
          style={{width: 20, height: 20,marginRight:5}}
          source={require('../../assets/Kesehatan/umum-white.png')}
          resizeMode="contain"
        /> */}
        <Text style={{ color:'#fff' }}>{Props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const FilterKesehatan = () => {
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

export default FilterKesehatan;

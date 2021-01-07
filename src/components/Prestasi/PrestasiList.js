import React from 'react';
import {Image, View, FlatList, StyleSheet, Text} from 'react-native';
import Medal from './medal.svg'

import {useNavigation} from '@react-navigation/native';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Juara 1 Qori’',
    date: '18/12/2020',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b',
    title: 'Juara 1 Qori’',
    date: '18/12/2020',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28',
    title: 'Juara 1 Qori’',
    date: '18/12/2020',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb2',
    title: 'Juara 1 Qori’',
    date: '18/12/2020',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb',
    title: 'Juara 1 Qori’',
    date: '18/12/2020',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53ab',
    title: 'Juara 1 Qori’',
    date: '18/12/2020',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abc',
    title: 'Juara 1 Qori’',
    date: '18/12/2020',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abs',
    title: 'Juara 1 Qori’',
    date: '18/12/2020',
  },
];

const PrestasiList = () => {
  const Item = ({title, date}) => (
    <View style={styles.container}>
      <View style={{flexDirection: 'row',alignItems: 'center'}}>
        <Medal height={25} width={25} />
        <Text style={{ color:'#52525B', marginLeft:10 }}>{title}</Text>
      </View>
      <Text style={{ color:'#52525B' }}>{date}</Text>
    </View>
  );

  const renderItem = ({item}) => <Item title={item.title} date={item.date}/>;

  return (
    <>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    marginHorizontal: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 25,
    paddingVertical: 20,
    backgroundColor: '#F4F4F5',
    borderRadius: 8,
  },
});

export default PrestasiList;

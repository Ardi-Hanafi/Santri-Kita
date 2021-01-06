import React from 'react';
import {Image, View, FlatList, StyleSheet, Text} from 'react-native';

import {useNavigation} from '@react-navigation/native';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Pusing kepala',
    date: '18:00 18/12/2020',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b',
    title: 'Pusing kepala',
    date: '18:00 18/12/2020',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28',
    title: 'Pusing kepala',
    date: '18:00 18/12/2020',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb2',
    title: 'Pusing kepala',
    date: '18:00 18/12/2020',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb',
    title: 'Pusing kepala',
    date: '18:00 18/12/2020',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53ab',
    title: 'Pusing kepala',
    date: '18:00 18/12/2020',
  },
];

const SilabusList = () => {
  const Item = ({title, date}) => (
    <View style={styles.container}>
      <View style={{flexDirection: 'row',alignItems: 'center'}}>
        <Image
          style={{width: 35, height: 35, marginRight: 10}}
          source={require('../../assets/Kesehatan/umum.png')}
          resizeMode="contain"
        />
        <Text style={{ color:'#71717A' }}>{title}</Text>
      </View>
      <Text style={{ color:'#A1A1AA' }}>{date}</Text>
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

export default SilabusList;

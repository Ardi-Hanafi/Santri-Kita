import React from 'react';
import {View, FlatList, StyleSheet, Text} from 'react-native';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Membaca Alquran',
    date: '18:00 18/12/2020',
  },
  {
    id: 'bd7acbea-c1b1-46c',
    title: 'Membaca Alquran',
    date: '18:00 18/12/2020',
  },
  {
    id: 'bd7acbea-c1b1-46c2-',
    title: 'Membaca Alquran',
    date: '18:00 18/12/2020',
  },
  {
    id: 'bd7acbea-c1b1-46c2-ae',
    title: 'Membaca Alquran',
    date: '18:00 18/12/2020',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed',
    title: 'Membaca Alquran',
    date: '18:00 18/12/2020',
  },
  {
    id: 'bd7acbea-c1b1-46c2-a',
    title: 'Membaca Alquran',
    date: '18:00 18/12/2020',
  },
  {
    id: 'bd7acbea-c1b1--aed',
    title: 'Membaca Alquran',
    date: '18:00 18/12/2020',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5',
    title: 'Membaca Alquran',
    date: '18:00 18/12/2020',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-',
    title: 'Membaca Alquran',
    date: '18:00 18/12/2020',
  },
];

const SilabusList = () => {
  const Item = ({title, date}) => (
    <View style={styles.container}>
      <Text style={{color: '#71717A'}}>{title}</Text>
      <Text style={{color: '#A1A1AA'}}>{title}</Text>
    </View>
  );

  const renderItem = ({item}) => <Item title={item.title} />;

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

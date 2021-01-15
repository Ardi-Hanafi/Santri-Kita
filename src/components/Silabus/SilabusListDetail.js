import React from 'react';
import {View, FlatList, StyleSheet, Text} from 'react-native';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First hai',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b',
    title: 'First hai',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb2',
    title: 'First hai',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb',
    title: 'First hai',
  },
];

const Item = ({title}) => (
  <View style={styles.container}>
    <Text style={{color: '#71717A'}}>{title}</Text>
  </View>
);

const SilabusListDetail = () => {
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
    paddingVertical: 15,
    backgroundColor: '#FFF',
    borderRadius: 8,
    // shadow
    shadowColor: '#999999',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
});

export default SilabusListDetail;

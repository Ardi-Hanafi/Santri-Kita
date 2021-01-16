import React from 'react';
import {View, FlatList, StyleSheet, Text} from 'react-native';
import { theme } from '../theme'

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
    <Text style={{color: theme.colors.gray5}}>{title}</Text>
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
    paddingVertical: 10,
    backgroundColor: theme.colors.gray1,
    borderRadius: 8,
  },
});

export default SilabusListDetail;

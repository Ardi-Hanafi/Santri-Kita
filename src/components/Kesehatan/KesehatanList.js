import React from 'react';
import {Image, View, FlatList, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import { theme } from '../theme'

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Pusing kepala',
    date: '18/12/2020',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b',
    title: 'Pusing kepala',
    date: '18/12/2020',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28',
    title: 'Pusing kepala',
    date: '18/12/2020',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb2',
    title: 'Pusing kepala',
    date: '18/12/2020',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb',
    title: 'Pusing kepala',
    date: '18/12/2020',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53ab',
    title: 'Pusing kepala',
    date: '18/12/2020',
  },
];

const SilabusList = () => {
  const Item = ({title, date}) => (
    <View style={styles.container}>
      <View style={{flexDirection: 'row',alignItems: 'center'}}>
        <Icon 
          name='heart' 
          size={30} color="#71717A" 
          style={{marginRight:10}}
        />
        <Text style={{ color: theme.colors.gray5 }}>{title}</Text>
      </View>
      <Text style={{ color: theme.colors.gray4 }}>{date}</Text>
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
    backgroundColor: theme.colors.gray1,
    borderRadius: 8,
  },
});

export default SilabusList;

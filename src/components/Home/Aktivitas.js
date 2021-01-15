import React from 'react';
import {View, FlatList, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { theme } from '../theme';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First hai',
    date: '18:00 12/12/2020',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b',
    title: 'First hai',
    date: '18:00 12/12/2020',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb2',
    title: 'First hai',
    date: '18:00 12/12/2020',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb',
    title: 'First hai',
    date: '18:00 12/12/2020',
  },
];

const Item = ({title, date, uji}) => (
  <View style={styles.item}>
    <Text style={styles.kegiatan} >{title}</Text>
    <Text style={styles.waktu} >{date}</Text>
  </View>
);

const Aktivitas = () => {
  const navigation = useNavigation();
  function handleClick() {
    navigation.navigate('Aktivitas');
  }

  const renderItem = ({item}) => <Item title={item.title} date={item.date} />;

  return (
    <>
      <Text style={styles.title}>Aktivitas</Text>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <TouchableOpacity
        onPress={() => {
          handleClick();
        }}
        style={styles.button}>
        <Text style={{
          color: '#fff',
          fontSize: 16
        }}>Selengkapnya</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    alignSelf: 'center',
    marginTop: 30,
    marginBottom: 10,
    fontSize: 20,
    color: theme.colors.gray6,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#F2F2F2',
    padding: 20,
    marginVertical: 4,
    marginHorizontal: 16,
    borderRadius: 8,
  },
  kegiatan: {
    fontSize: 14,
    color: theme.colors.gray5,
  },
  waktu: {
    fontSize: 14,
    color: theme.colors.gray5
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#27AE60',
    padding: 20,
    marginVertical: 4,
    marginHorizontal: 16,
    borderRadius: 8,
  },
});

export default Aktivitas;

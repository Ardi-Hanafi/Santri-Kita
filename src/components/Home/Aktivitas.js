import React from 'react';
import {View, FlatList, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import theme from '../theme';
import {DateFormat} from '../Helper';
import NoData from '../NoData';

const Item = ({title, date}) => {
  return (
    <View style={itemStyle.item}>
      <Text style={itemStyle.title}>{title}</Text>
      <Text style={itemStyle.date}>{date}</Text>
    </View>
  );
};

const renderItem = ({item}) => (
  <Item key={item.id} title={item.siswa_title} date={DateFormat(item.tanggal)} />
);
export default Aktivitas = (Props) => {
  const navigation = useNavigation();
  const data = React.useMemo(() => {
    return Props.data;
  });

  return (
    <>
      
      <FlatList
        data={data}
        renderItem={renderItem}
        ListEmptyComponent={<NoData />}
      />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Aktivitas');
        }}
        style={aktivitasStyle.button}>
        <Text style={aktivitasStyle.buttonText}>Selengkapnya</Text>
      </TouchableOpacity>
    </>
  );
};

const itemStyle = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: theme.colors.gray1,
    padding: 20,
    marginVertical: 4,
    marginHorizontal: 25,
    borderRadius: 7,
  },
  title: {
    fontSize: 14,
    color: theme.colors.gray5,
  },
  date: {
    fontSize: 14,
    color: theme.colors.gray5,
  },
});

const aktivitasStyle = StyleSheet.create({
  title: {
    alignSelf: 'center',
    marginTop: 30,
    marginBottom: 10,
    fontSize: 18,
    color: theme.colors.gray5,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#27AE60',
    padding: 20,
    marginVertical: 4,
    marginHorizontal: 25,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
  },
});

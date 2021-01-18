import React from 'react';
import {View, FlatList, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { theme } from '../theme';


const Item = ({title, date, uji}) => (
  <View style={styles.item}>
    <Text style={styles.kegiatan} >{title}</Text>
    <Text style={styles.waktu} >{date}</Text>
  </View>
);

const Aktivitas = (Props) => {
  const data = React.useMemo(()=>{
    return Props.data
  },[])

  const navigation = useNavigation();
  function handleClick() {
    navigation.navigate('Aktivitas');
  }

  const renderItem = ({item}) => <Item title={item.pelajaran} date={item.tanggal} />;

  return (
    <>
      <Text style={styles.title}>Aktivitas</Text>
      <FlatList
        data={data}
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
    backgroundColor: theme.colors.gray1,
    padding: 20,
    marginVertical: 4,
    marginHorizontal: 25,
    borderRadius: 7,
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
    marginHorizontal: 25,
    borderRadius: 8,
  },
});

export default Aktivitas;

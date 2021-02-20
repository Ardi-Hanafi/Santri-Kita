import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Iconft from 'react-native-vector-icons/Feather';
import Iconmci from 'react-native-vector-icons/MaterialCommunityIcons';

export default Item = ({data}) => {
  const {status, keperluan, tanggal_pembayaran, nominal} = data;
  const navigation = useNavigation();
  const handleClick = () => {
    navigation.navigate('BiayaDetail', {
      ...data,
    });
  };
  return (
    <TouchableOpacity
      onPress={() => handleClick()}
      style={{...styles.container, justifyContent: 'space-between'}}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        {status === 'Lunas' ? (
          <Iconmci name="check-circle-outline" size={28} color="#71717A" />
        ) : (
          <Iconft name="alert-circle" size={28} color="#71717A" />
        )}
        <View style={{marginLeft: 10}}>
          <Text style={styles.mouth}>{keperluan}</Text>
          <Text style={styles.date}>{tanggal_pembayaran}</Text>
        </View>
      </View>

      <Text style={styles.jumlah}>Rp. {nominal}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
    backgroundColor: '#F4F4F5',
    borderRadius: 8,
  },
  mouth: {
    fontSize: 15,
    color: '#71717A',
  },
  date: {
    fontSize: 12,
    color: '#A1A1AA',
  },
  jumlah: {
    fontSize: 14,
    color: '#71717A',
  },
});

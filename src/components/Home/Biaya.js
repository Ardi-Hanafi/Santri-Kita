import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import theme from '../theme';
import {useNavigation} from '@react-navigation/native';
import {moneySeparator} from '../Helper';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const NoPembayaran = () => (
  <Text style={pembayaranStyle.cost}>Tidak ada pembayaran</Text>
);

const Pembayaran = () => (
  <>
    <Text style={pembayaranStyle.cost}>Rp {moneySeparator(data.nominal)}</Text>
    {/* perkondisian sesuai status pembayaran */}
    <Text
      style={[
        pembayaranStyle.status,
        data.status === 'Lulus'
          ? pembayaranStyle.bgLulus
          : pembayaranStyle.bgBelum,
      ]}>
      {data.status}
    </Text>
  </>
);

export default Biaya = ({data}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={biayaStyle.container}
      onPress={() => {
        navigation.navigate('Biaya');
      }}>
      {/* Detail of Biaya */}
      <View style={biayaStyle.left}>
        <Text style={biayaStyle.label}>Biaya:</Text>
        {data === undefined ? <NoPembayaran /> : <Pembayaran />}
      </View>
      {/* button right arrow */}
      <View style={biayaStyle.right}>
        <Icon name="chevron-forward" size={25} color="#71717A" />
      </View>
    </TouchableOpacity>
  );
};

const biayaStyle = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    height: 60,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 25,
    paddingRight: 25,
    marginLeft: 25,
    marginRight: 25,
    marginTop: 15,
    marginBottom: 20,
    borderRadius: 8,
    borderColor: theme.colors.gray2,
    borderRadius: 9,
    borderWidth: 1,
  },
  right: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    color: theme.colors.gray5,
    marginRight: 5,
  },
});

const pembayaranStyle = StyleSheet.create({
  bgLunas: {
    backgroundColor: theme.colors.brand2,
    color: theme.colors.brand7,
  },
  bgBelum: {
    backgroundColor: theme.colors.amber100,
    color: theme.colors.amber700,
  },
  status: {
    fontWeight: 'bold',
    borderRadius: 4,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginLeft: 5,
  },
  cost: {
    color: theme.colors.gray5,
    fontWeight: 'bold',
  },
});

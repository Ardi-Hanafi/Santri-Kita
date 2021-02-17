import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import theme from '../theme';
import {useNavigation} from '@react-navigation/native';
import {moneySeparator} from '../Helper';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const NoPembayaran = () => (
  <Text style={pembayaranStyle.cost}>Tidak ada pembayaran</Text>
);

const Pembayaran = ({data}) => (
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

export default Biaya = ({containerStyle,data}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={{...Style.container,...containerStyle}}
      onPress={() => {
        navigation.navigate('Biaya');
      }}>
      {/* Detail of Biaya */}
      <View style={Style.left}>
        <Text style={Style.label}>Biaya:</Text>
        {data === undefined ? <NoPembayaran /> : <Pembayaran data={data}/>}
      </View>
      {/* button right arrow */}
      <View style={Style.right}>
        <Icon name="chevron-forward" size={25} color="#71717A" />
      </View>
    </TouchableOpacity>
  );
};

const Style = StyleSheet.create({
  container: {
    width:'100%',
    backgroundColor: '#fff',
    flexDirection: 'row',
    height: 60,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 25,
    paddingRight: 25,
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

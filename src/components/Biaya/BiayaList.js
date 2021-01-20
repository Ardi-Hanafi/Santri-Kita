import React from 'react';
import {
  Image,
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Lunas from './Lunas.svg';
import BelumLunas from './BelumLunas.svg';
import Iconft from 'react-native-vector-icons/Feather';
import Iconmci from 'react-native-vector-icons/MaterialCommunityIcons';

const Item = ({
  id,
  semester,
  tahun,
  status,
  keperluan,
  tanggal_pembayaran,
  nominal,
  nominal_dibayar,
  sisa_pembayaran,
  keterangan,
}) => {
  const navigation = useNavigation();
  const handleClick = () => {
    navigation.navigate('BiayaDetail', {
      id,
      semester,
      tahun,
      status,
      keperluan,
      tanggal_pembayaran,
      nominal,
      nominal_dibayar,
      sisa_pembayaran,
      keterangan,
    });
  };
  return (
    <TouchableOpacity onPress={() => handleClick()} style={styles.container}>
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

const renderItem = ({item}) => (
  <Item
    id={item.id}
    semester={item.semester}
    status={item.status}
    keperluan={item.keperluan}
    tahun={item.tahun}
    tanggal_pembayaran={item.tanggal_pembayaran}
    nominal={item.nominal}
    nominal_dibayar={item.nominal_dibayar}
    sisa_pembayaran={item.sisa_pembayaran}
    keterangan={item.keterangan}
  />
);

const BiayaList = (Props) => {
  const data = React.useMemo(() => Props.data, [Props.data]);
  return (
    <>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    marginHorizontal: 25,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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

export default BiayaList;

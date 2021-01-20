import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import BelumLunas from './BelumLunas.svg';
import Iconft from 'react-native-vector-icons/Feather';
import Iconmci from 'react-native-vector-icons/MaterialCommunityIcons';

const BiayaDetailList = ({data}) => {
  const {
    tahun,
    status,
    keperluan,
    nominal,
    nominal_dibayar,
    total,
    keterangan,
    tanggal_pembayaran,
    sisa_pembayaran,
  } = data;
  return (
    <View>
      <View style={{...styles.container, justifyContent: 'center'}}>
        <Text
          style={{
            ...styles.text,
            fontWeight: 'bold',
            marginBottom: 15,
            textAlign: 'center',
          }}>
          {keperluan}
        </Text>
        <View style={styles.rincian}>
          <Text style={styles.text}>Semester</Text>
          <Text style={{...styles.text}}>2</Text>
        </View>
        <View style={styles.rincian}>
          <Text style={styles.text}>Tahun</Text>
          <Text style={{...styles.text}}>{tahun}</Text>
        </View>
        <View style={styles.rincian}>
          <Text style={styles.text}>Taggal Bayar</Text>
          <Text style={{...styles.text}}>{tanggal_pembayaran}</Text>
        </View>
        <View
          style={{
            backgroundColor: '#D1FAE5',
            paddingVertical: 16,
            paddingHorizontal: 15,
            marginVertical: 15,
            borderRadius: 15,
          }}>
          <View style={styles.rincian}>
            <Text style={styles.text}>Nominal Pembayaran</Text>
            <Text style={{...styles.text}}>{nominal}</Text>
          </View>
          <View style={styles.rincian}>
            <Text style={styles.text}>Nominal Dibayar</Text>
            <Text style={{...styles.text}}>{nominal_dibayar}</Text>
          </View>
          <View style={styles.rincian}>
            <Text style={styles.text}>Sisa Pembayaran</Text>
            <Text style={{...styles.text}}>{sisa_pembayaran}</Text>
          </View>
          <View
            style={{
              alignItems: 'center',
              marginTop: 25,
              marginBottom: 15,
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            {status === 'Lunas' ? (
              <Iconmci name="check-circle-outline" size={28} color="#71717A" />
            ) : (
              <Iconft name="alert-circle" size={28} color="#71717A" />
            )}
            <Text style={{marginLeft: 10}}>{status}</Text>
          </View>
        </View>
      </View>
      <View style={{ marginTop:150,  }}>
        <Text style={{...styles.text, textAlign: 'center'}}>Catatan</Text>
        <Text style={styles.catatan}>{keterangan}</Text>
      </View>
    </View>
  );
};

export default BiayaDetailList;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginVertical: 15,
    marginHorizontal: 25,
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#D1D5DB',
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
  text: {
    color: '#52525B',
    fontSize: 15,
  },
  rincian: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // marginVertical: 15,
  },
  catatan: {
    color: '#52525B',
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 50,
    marginHorizontal: 25,
  },
});

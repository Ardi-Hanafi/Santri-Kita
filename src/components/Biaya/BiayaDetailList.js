import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import BelumLunas from './BelumLunas.svg';
import Iconft from 'react-native-vector-icons/Feather';

const DATA = {
  id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
  status: 'Belum Lunas',
  keperluan: 'Bayar Buku 1',
  nominal: '1.000.000',
  nominal_dibayar: '1.000.000',
  nominal_dibayar: '1.000.000',
  sisa_pembayaran: '0',
  tahun: '2020/2021',
  tglBayar: '21 April 2021',
  catatan:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley',
};

{/* <Iconft name="alert-circle" size={28} color="#71717A" /> */}
const BiayaDetailList = (Props) => {
  const {tahun, status, keperluan, nominal,nominal_dibayar, total, catatan, tglBayar,sisa_pembayaran} = DATA;
  return (
    <View>
      <View style={{ ...styles.container, justifyContent: 'center' }}>
        <Text style={{...styles.text, fontWeight: 'bold',marginBottom: 15,textAlign:'center' }}>{keperluan}</Text>
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
          <Text style={{...styles.text}}>{tglBayar}</Text>
        </View>
        <View
          style={{
            backgroundColor: '#D1FAE5',
            paddingVertical: 16,
            paddingHorizontal: 20,
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
        </View>
      </View>
      <Text style={{ ...styles.text,textAlign:'center' }}>Catatan</Text>
      <Text style={styles.catatan}>{catatan}</Text>
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
    // flex:1,
    // width:'100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // marginVertical: 15,
  },
  total: {
    // width:'100%',
    height: 45,
    backgroundColor: '#fff',
    borderWidth: 1.5,
    borderRadius: 8,
    borderColor: '#10B981',
    alignItems: 'center',
    justifyContent: 'center',
  },
  totalText: {
    color: '#10B981',
    fontSize: 15,
    fontWeight: 'bold',
  },
  catatan: {
    color: '#52525B',
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 50,
    marginHorizontal: 25
  },
});

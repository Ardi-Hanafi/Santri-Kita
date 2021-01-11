import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import BelumLunas from './BelumLunas.svg'
import Iconft from 'react-native-vector-icons/Feather';

const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      status: 'Belum Lunas',
      keperluan: 'Bayar Buku 1',
      biaya: '1.000.000',
      total: '1.000.000',
    //   catatan: 'Cepat dibayar ya pak...!!!',
      catatan: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley',
    },
  ];

const BiayaDetailList = () => {
    const Item = ({status, keperluan, biaya, total, catatan}) => (
        <View style={{ alignItems:'center' }} >
          <View style={styles.container} >
            <View style={{ flexDirection:'row', alignItems:'center', marginBottom:15 }} >
              <Iconft name="alert-circle" size={28} color="#71717A" />
              {/* <BelumLunas width={30} height={30} />  */}
              <Text style={{...styles.text, marginLeft:5}} >{status}</Text>
            </View>
            <View style={styles.rincian} >
                <Text style={styles.text} >{keperluan}</Text>
                <Text style={{...styles.text}} >Rp. {biaya}</Text>
            </View>
            <Text style={{...styles.text, marginVertical:15}} >Total:</Text>
            <View style={styles.total} >
                <Text style={styles.totalText} >Rp. {total}</Text>
            </View>
          </View>
          <Text style={styles.text} >Catatan</Text>
          <Text style={styles.catatan} >{catatan}</Text>
        </View>
    );

    const renderItem = ({item}) => <Item status={item.status} keperluan={item.keperluan} 
    biaya={item.biaya} total={item.total} catatan={item.catatan} 
    />;

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

export default BiayaDetailList

const styles = StyleSheet.create({
    container: {
        width: 310,
        backgroundColor: '#fff',
        marginVertical: 15,
        paddingVertical: 15,
        paddingHorizontal: 25,
        alignItems: 'center',
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
            width:'100%', 
            flexDirection:'row', 
            alignItems:'center', 
            justifyContent:'space-between',
            // marginVertical: 15,
        },
        total:{
            width:'100%', height: 45,
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
            fontWeight: 'bold'
        },
        catatan: {
            color: '#52525B',
            fontSize: 15,
            width: 310,
            textAlign: 'center',
            marginBottom: 50,
        }
})

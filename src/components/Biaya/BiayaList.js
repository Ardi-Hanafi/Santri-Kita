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
import Lunas from './Lunas.svg'
import BelumLunas from './BelumLunas.svg'
import Iconft from 'react-native-vector-icons/Feather';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba', 
    mouth: 'Mei',
    date: '1/5/2020',
    jumlah: '3.000.000',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b',
    mouth: 'Mei',
    date: '1/5/2020',
    jumlah: '3.000.000',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb2',
    mouth: 'Mei',
    date: '1/5/2020',
    jumlah: '3.000.000',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb',
    mouth: 'Mei',
    date: '1/5/2020',
    jumlah: '3.000.000',
  },
];


const BiayaList = () => {
  const navigation = useNavigation();
  const handleClick = () => {
    navigation.navigate('BiayaDetail')
  }
  const Item = ({mouth, date, jumlah}) => (
    <TouchableOpacity onPress={()=>handleClick()} style={styles.container}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }} >
        <Iconft name="alert-circle" size={28} color="#71717A" />
        {/* <BelumLunas width={30} height={30} /> */}
        <View style={{ marginLeft:10 }} >
            <Text style={styles.mouth}>Bulan {mouth}</Text>
            <Text style={styles.date}>{date}</Text>
        </View>
      </View>
      
      <Text style={styles.jumlah}>Rp. {jumlah}</Text>
      
    </TouchableOpacity>
  );
  


  const renderItem = ({item}) => <Item mouth={item.mouth} date={item.date} jumlah={item.jumlah} />;

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

const styles = StyleSheet.create({
  container: {
    marginVertical: 10, 
    marginHorizontal: 25,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 60, width: 310,
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

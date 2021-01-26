import React from 'react';
import {
  Image,
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import theme from '../theme';
import Iconet from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';
import {useQuery, gql} from '@apollo/client';
import NoData from '../NoData';
import Loading from '../Loading';
import Error from '../Error';

const GET_SILABUS = gql`
  query Get_Silabus($id: ID!) {
    user(id: $id) {
      student {
        kelas {
          silabuses {
            id
            pelajaran
            bab
            kompetensi_dasar
            keterangan
          }
        }
      }
    }
  }
`;

function filter(data) {
  // wadah kunci unik
  let distinct = [];
  // menampung data sebagai keluaran
  let result = [];

  for (let i = 0; i < data.length; i++) {
    const p = data[i].pelajaran;

    // cek pelajaran ada di array distict
    if (!distinct.includes(p)) {
      // menambahkan pelajaran ke array distinct supaya tidak duplikat
      distinct.push(p);
      // tambah disini unutuk element yang unik
      result.push({
        pelajaran: p,
      });
      // menset data sebagai array agar bisa diisi
      result[distinct.indexOf(p)]['data'] = [];
    }
    // menambahkan data ke element data pada result
    result[distinct.indexOf(p)]['data'].push(data[i]);
  }
  return result;
}

const Item = ({item}) => {
  const {pelajaran, data} = item;
  const navigation = useNavigation();
  const handleClick = () => {
    navigation.navigate('SilabusDetail', {pelajaran, data});
  };

  return (
    <TouchableOpacity
      onPress={() => handleClick(item)}
      style={styles.container}>
      <Text style={{color: '#333333'}}>{pelajaran}</Text>
      <Iconet name="chevron-right" size={25} color="#333333" />
    </TouchableOpacity>
  );
};

const renderItem = ({item}) => {
  return <Item key={item.pelajaran} item={item} />;
};

const SilabusList = () => {
  const {loading, error, data} = useQuery(GET_SILABUS, {
    variables: {id: '2'},pollInterval:500
  });

  if (loading) return <Loading />;
  if (error) return <Error />;

  const newData =filter(data.user.student.kelas.silabuses);

  return (
    <>
      <FlatList
        data={newData}
        renderItem={renderItem}
        ListEmptyComponent={<NoData />}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    marginHorizontal: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 25,
    paddingVertical: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
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
});

export default SilabusList;

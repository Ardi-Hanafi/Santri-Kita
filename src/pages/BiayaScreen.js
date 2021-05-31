import React from 'react';
import {FlatList, StyleSheet, SafeAreaView} from 'react-native';
import HeaderListBiaya from '../components/Biaya/HeaderListBiaya';
import {useQuery, gql} from '@apollo/client';
import LoadingScreen from './LoadingScreen';
import ErrorScreen from './ErrorScreen';

import ItemEmpty from '../components/ItemEmpty';
import ItemBiaya from '../components/Biaya/ItemBiaya';

const renderItem = ({item}) => <ItemBiaya data={item} />;

const GET_ACTIVITIES = gql`
  query Get_Activities($id: ID!) {
    user(id: $id) {
      student {
        bills {
          id
          semester
          status
          keperluan
          tahun
          tanggal_pembayaran
          nominal
          nominal_dibayar
          sisa_pembayaran
          keterangan
        }
      }
    }
  }
`;

const BiayaScreen = ({navigation,route}) => {
  const {loading, error, data} = useQuery(GET_ACTIVITIES, {
    variables: {id: route.params.id},
    pollInterval: 500,
  });

  const [lunas, setLunas] = React.useState(true);
  const [belumLunas, setBelumLunas] = React.useState(true);

  if (loading) return <LoadingScreen />;
  if (error) return <ErrorScreen />;

  const dataFiltered = data.user.student.bills.filter((item) => {
    if (
      (lunas && item.status === 'Lunas') ||
      (belumLunas && item.status === 'Belum Lunas')
    )
      return true;
  });

  const headerListBiaya = (
    <HeaderListBiaya
      lunas={lunas}
      setLunas={setLunas}
      belumLunas={belumLunas}
      setBelumLunas={setBelumLunas}
    />
  );

  return (
    <SafeAreaView style={styles.pageArea}>
      <FlatList
        data={dataFiltered}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={headerListBiaya}
        ListEmptyComponent={ItemEmpty}
      />
    </SafeAreaView>
  );
};

export default BiayaScreen;

const styles = StyleSheet.create({
  pageArea: {
    height: '100%',
    backgroundColor: '#fff',
    paddingHorizontal: 25,
  },
  
});

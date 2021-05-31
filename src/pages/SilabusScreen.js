import React from 'react';
import {Text, FlatList, StyleSheet, SafeAreaView} from 'react-native';
import HeaderList from '../components/Silabus/HeaderList';
import {useQuery, gql} from '@apollo/client';
import LoadingScreen from './LoadingScreen';
import ErrorScreen from './ErrorScreen';
import {filter} from '../components/Helper';
import Item from '../components/Silabus/ItemSilabus';

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

const renderItem = ({item}) => {
  return <Item item={item} />;
};

const SilabusScreen = ({navigation,route}) => {
  const {loading, error, data} = useQuery(GET_SILABUS, {
    variables: {id: route.params.id},
    pollInterval: 500,
  });

  if (loading) return <LoadingScreen />;
  if (error) return <ErrorScreen />;
  const newData = filter(data.user.student.kelas.silabuses);
  
  return (
    <SafeAreaView style={styles.pageArea}>
      <FlatList
        data={newData}
        keyExtractor={(item) => item.pelajaran}
        renderItem={renderItem}
        ListHeaderComponent={HeaderList}
        ListEmptyComponent={
          <Item
            title="Tidak ada data"
            wrapper={{alignItems: 'center', justifyContent: 'center'}}
          />
        }
      />
    </SafeAreaView>
  );
};

export default SilabusScreen;

const styles = StyleSheet.create({
  pageArea: {
    height: '100%',
    backgroundColor: '#fff',
    paddingHorizontal: 25,
  },
});

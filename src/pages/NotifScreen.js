import 'react-native-gesture-handler';
import React from 'react';
import {FlatList, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import HeaderList from '../components/Notif/HeaderList';
import LoadingScreen from './LoadingScreen';
import ErrorScreen from './ErrorScreen';
import ItemNotif from '../components/Notif/ItemNotif';
import {useQuery, gql} from '@apollo/client';

const GET_NOTIF = gql`
  query Get_Notif($id: ID!) {
    user(id: $id) {
      student {
        notifications(where: {terbaca: false}, sort: "waktu:desc") {
          id
          notifikasi
          waktu
          slug
        }
      }
    }
  }
`;

const AktivitasScreen = ({navigation}) => {
  const renderItem = ({item}) => <ItemNotif data={item} />;

  const {loading, error, data} = useQuery(GET_NOTIF, {
    variables: {id: 28},
    pollInterval: 500,
  });
  if (loading) return <LoadingScreen />;
  if (error) return <ErrorScreen />;

  return (
    <SafeAreaView style={styles.pageArea}>
      <FlatList
        data={data.user.student.notifications}
        keyExtractor={(item) => item.id}
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

export default AktivitasScreen;

const styles = StyleSheet.create({
  pageArea: {
    height: '100%',
    backgroundColor: '#fff',
    paddingHorizontal: 25,
  },
});

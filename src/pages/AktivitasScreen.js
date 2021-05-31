import React from 'react';
import {SafeAreaView, FlatList, StyleSheet} from 'react-native';
import {useQuery, gql} from '@apollo/client';
import Item from '../components/Item';
import LoadingScreen from './LoadingScreen';
import ErrorScreen from './ErrorScreen';
import {DateFormat} from '../components/Helper';
import HeaderList from '../components/Aktivitas/HeaderList';

const GET_ACTIVITIES = gql`
  query Get_Activities($id: ID!) {
    user(id: $id) {
      student {
        student_aktivities(sort: "tanggal:desc") {
          id
          siswa_title
          keterangan
          tanggal
        }
      }
    }
  }
`;

const renderItem = ({item}) => (
  <Item
    title={item.siswa_title}
    date={DateFormat(item.tanggal)}
    containerStyle={{marginVertical: 7}}
    description={item.keterangan}
  />
);

const AktivitasScreen = ({navigation,route}) => {
  const {loading, error, data} = useQuery(GET_ACTIVITIES, {
    variables: {id: route.params.id},
    pollInterval: 500,
  });

  if (loading) return <LoadingScreen />;
  if (error) return <ErrorScreen />;

  return (
    <SafeAreaView style={styles.pageArea}>
      <FlatList
        data={data.user.student.student_aktivities}
        renderItem={renderItem}
        ListHeaderComponent={<HeaderList />}
        ListEmptyComponent={() => (
          <Item
            title="Tidak ada data"
            wrapper={{alignItems: 'center', justifyContent: 'center'}}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default AktivitasScreen;

const styles = StyleSheet.create({
  pageArea: {
    height: '100%',
    backgroundColor: '#fff',
    paddingHorizontal: 25
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  container: {
    width: '100%',
    alignContent: 'center',
  },
});

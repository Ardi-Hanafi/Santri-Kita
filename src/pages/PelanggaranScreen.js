import React from 'react';
import {FlatList, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import {useQuery, gql} from '@apollo/client';
import LoadingScreen from './LoadingScreen';
import ErrorScreen from './ErrorScreen';
import {DateFormat} from '../components/Helper';
import Item from '../components/Item';
import HeaderList from '../components/Pelanggaran/HeaderList';

const GET_ACTIVITIES = gql`
  query Get_Activities($id: ID!) {
    user(id: $id) {
      student {
        violations(sort: "tanggal:desc") {
          id
          pelanggaran
          tanggal
        }
      }
    }
  }
`;

const renderItem = ({item}) => (
  <Item
    key={item.id}
    title={item.pelanggaran}
    date={DateFormat(item.tanggal)}
    containerStyle={{marginVertical: 7}}
  />
);

const PelanggaranScreen = ({navigation}) => {
  const {loading, error, data} = useQuery(GET_ACTIVITIES, {
    variables: {id: 28},
    pollInterval: 500,
  });

  if (loading) return <LoadingScreen />;
  if (error) return <ErrorScreen />;

  return (
    <SafeAreaView style={styles.pageArea}>
      <FlatList
        data={data.user.student.violations}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={<HeaderList />}
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

export default PelanggaranScreen;

const styles = StyleSheet.create({
  pageArea: {
    height: '100%',
    backgroundColor: '#fff',
    paddingHorizontal: 25,
  },
});

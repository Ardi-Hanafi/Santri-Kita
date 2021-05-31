import React from 'react';
import {StyleSheet, FlatList, SafeAreaView, ScrollView} from 'react-native';
import {DateFormat} from '../components/Helper';
import Item from '../components/Item';
import {useQuery, gql} from '@apollo/client';
import LoadingScreen from './LoadingScreen';
import ErrorScreen from './ErrorScreen';
import HeaderList from '../components/Home/HeaderList';
import FooterList from '../components/Home/FooterList';
import {AuthContext, SantriDataContext} from '../components/Context';

const GET_DATA = gql`
  query Get_Data($id: ID!) {
    user(id: $id) {
      student {
        id
        nama
        kamar
        kelas {
          id
          kelas
        }
        student_aktivities(sort: "tanggal:desc") {
          id
          siswa_title
          keterangan
          tanggal
        }
        bills(limit: 1) {
          status
          nominal
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

const HomeScreen = ({route, navigation}) => {
  const {setDataSantri} = React.useContext(SantriDataContext);
  const {loading, error, data} = useQuery(GET_DATA, {
    variables: {id: route.params.id},
    pollInterval: 500,
    onCompleted(dt) {
      setDataSantri({nama: dt.user.student.nama});
    },
  });
  if (loading) return <LoadingScreen />;
  if (error) return <ErrorScreen />;

  const {student_aktivities, bills} = data.user.student;
  return (
    <SafeAreaView style={styles.pageArea}>
      <FlatList
        data={student_aktivities}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ListHeaderComponent={<HeaderList dataBiaya={bills[0]} />}
        ListFooterComponent={<FooterList />}
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

export default HomeScreen;

const styles = StyleSheet.create({
  pageArea: {
    height: '100%',
    backgroundColor: '#fff',
    paddingHorizontal: 25,
  },
});

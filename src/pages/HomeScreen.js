import 'react-native-gesture-handler';
import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import Biaya from '../components/Home/Biaya';
import Profile from '../components/Home/Profile';
import Menus from '../components/Home/Menus';
import Aktivitas from '../components/Home/Aktivitas';
import {useQuery, gql} from '@apollo/client';
import HomeLoading from '../components/loading/HomeLoading';

const GET_DATA = gql`
  query Get_Data($id: ID!) {
    user(id: $id) {
      student {
        id
        nama
        kamar
        kelas {
          kelas
          lesson_histories(limit: 3) {
            id
            pelajaran
            tanggal
          }
        }
        bills(limit: 1) {
          status
          nominal
        }
      }
    }
  }
`;

const wait = (timeout) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};

const HomeScreen = ({navigation}) => {
  const {loading, error, data} = useQuery(GET_DATA, {
    variables: {id: '2'},pollInterval:500
  });
  if (loading) return <HomeLoading />;
  if (error) return <Text>Error</Text>;
  // console.log(data.user.student.bills[0])
  return (
    <SafeAreaView style={styles.pageArea}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.bagianScroll}>
        <Biaya data={data.user.student.bills[0]} />
        <Profile
          nama={data.user.student.nama}
          kamar={data.user.student.kamar}
          kelas={data.user.student.kelas.kelas}
        />
        <Menus />
        <Aktivitas data={data.user.student.kelas.lesson_histories} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  bagianScroll: {
    backgroundColor: '#fff',
  },
  pageArea: {
    height: '100%',
    backgroundColor: '#fff',
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

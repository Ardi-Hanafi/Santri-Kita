import React from 'react';
import {StyleSheet, SafeAreaView, ScrollView, FlatList} from 'react-native';
import {useQuery, gql} from '@apollo/client';
import LoadingScreen from './LoadingScreen';
import ErrorScreen from './ErrorScreen';
import ItemIcon from '../components/ItemIcon';
import Icon from 'react-native-vector-icons/Ionicons';
import {DateFormat} from '../components/Helper';
import HeaderList from '../components/Kesehatan/HeaderList';

const GET_MEDICAL = gql`
  query Get_Medical($id: ID!) {
    user(id: $id) {
      student {
        medical_histories(sort: "tanggal:desc") {
          id
          penyakit
          keterangan
          status
          tanggal
        }
      }
    }
  }
`;

const renderItem = ({item}) => {
  return (
    <ItemIcon
      title={item.penyakit}
      date={DateFormat(item.tanggal)}
      icon={<Icon name="heart" size={30} color="#71717A" />}
    />
  );
};

export default KesehatanScreen = ({navigation}) => {
  const {loading, error, data} = useQuery(GET_MEDICAL, {
    variables: {id: 28},
    pollInterval: 500,
  });

  if (loading) return <LoadingScreen />;
  if (error) return <ErrorScreen />;

  return (
    <SafeAreaView style={styles.pageArea}>
      <FlatList
        data={data.user.student.medical_histories}
        renderItem={renderItem}
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

const styles = StyleSheet.create({
  pageArea: {
    height: '100%',
    backgroundColor: '#fff',
    paddingHorizontal: 25,
  },
});

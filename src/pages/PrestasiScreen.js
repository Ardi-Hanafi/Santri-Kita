import React from 'react';
import {FlatList, StyleSheet, SafeAreaView} from 'react-native';
import ItemIcon from '../components/ItemIcon';
import Item from '../components/Item';
import Icon from 'react-native-vector-icons/Ionicons';
import {useQuery, gql} from '@apollo/client';
import LoadingScreen from './LoadingScreen';
import ErrorScreen from './ErrorScreen';
import HeaderList from '../components/Prestasi/HeaderList';

const GET_ACTIVITIES = gql`
  query Get_Activities($id: ID!) {
    user(id: $id) {
      student {
        achievements {
          id
          prestasi
          kegiatan_lomba
          tahun
        }
      }
    }
  }
`;

const renderItem = ({item}) => (
  <ItemIcon
    title={item.prestasi}
    date={item.tahun}
    icon={<Icon name="medal-outline" size={30} color="#71717A" />}
  />
);

const PrestasiScreen = ({navigation}) => {
  const {loading, error, data} = useQuery(GET_ACTIVITIES, {
    variables: {id: 28},
    pollInterval: 500,
  });

  if (loading) return <LoadingScreen />;
  if (error) return <ErrorScreen />;

  return (
    <SafeAreaView style={styles.pageArea}>
      <FlatList
        data={data.user.student.achievements}
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

export default PrestasiScreen;

const styles = StyleSheet.create({
  pageArea: {
    height: '100%',
    backgroundColor: '#fff',
    paddingHorizontal: 25,
  },
});

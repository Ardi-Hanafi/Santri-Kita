import React from 'react';
import {Image, View, FlatList, StyleSheet, Text} from 'react-native';
import Medal from './medal.svg';
import Iconi from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {useQuery, gql} from '@apollo/client';
import NoData from '../NoData';
import Loading from '../Loading';
import Error from '../Error';

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

const Item = ({title, date}) => (
  <View style={styles.container}>
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <Iconi name="medal" size={28} color="#52525B" />
      <Text style={{color: '#52525B', marginLeft: 10, fontSize: 15}}>
        {title}
      </Text>
    </View>
    <Text style={{color: '#71717A', fontSize: 13}}>{date}</Text>
  </View>
);

const renderItem = ({item}) => (
  <Item key={item.id} title={item.prestasi} date={item.tahun} />
);

const PrestasiList = () => {
  const {loading, error, data} = useQuery(GET_ACTIVITIES, {
    variables: {id: 28},
    pollInterval: 500,
  });

  if (loading) return <Loading />;
  if (error) return <Error />;

  return (
    <>
      <FlatList
        data={data.user.student.achievements}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={<NoData />}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    marginHorizontal: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 25,
    paddingVertical: 20,
    backgroundColor: '#F4F4F5',
    borderRadius: 8,
  },
});

export default PrestasiList;

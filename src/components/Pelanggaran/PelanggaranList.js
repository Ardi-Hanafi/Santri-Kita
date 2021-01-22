import React from 'react';
import {Image, View, FlatList, StyleSheet, Text} from 'react-native';
import LarangGrey from './LarangGrey.svg';
import {useNavigation} from '@react-navigation/native';
import {useQuery, gql} from '@apollo/client';
import Loading from '../Loading';
import Error from '../Error';

const GET_ACTIVITIES = gql`
  query Get_Activities($id: ID!) {
    user(id: $id) {
      student {
        violations {
          id
          pelanggaran
          tanggal
        }
      }
    }
  }
`;

const Item = ({title, date}) => (
  <View style={styles.container}>
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <LarangGrey height={30} width={30} />
      <Text style={{color: '#52525B', marginLeft: 10}}>{title}</Text>
    </View>
    <Text style={{color: '#52525B'}}>{date}</Text>
  </View>
);

const renderItem = ({item}) => (
  <Item key={item.id} title={item.pelanggaran} date={item.tanggal} />
);

const PelanggaranList = () => {
  const {loading, error, data} = useQuery(GET_ACTIVITIES, {
    variables: {id: '2'},
  });

  if (loading) return <Loading />;
  if (error) return <Error />;

  return (
    <>
      <FlatList
        data={data.user.student.violations}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={
          <View
            style={{
              marginVertical: 10,
              marginHorizontal: 25,
              paddingHorizontal: 20,
              flexDirection: 'row',
              alignItems: 'center',
              height: 60,
              backgroundColor: '#F4F4F5',
              borderRadius: 8,
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 15, color: '#71717A', textAlign: 'center'}}>
              Tidak ada Data
            </Text>
          </View>
        }
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

export default PelanggaranList;

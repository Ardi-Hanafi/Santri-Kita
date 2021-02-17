import React, {useState, useEffect} from 'react';
import {View, FlatList, StyleSheet, Text} from 'react-native';
import {useQuery, gql} from '@apollo/client';
import Loading from '../Loading';
import Error from '../Error';
import NoData from '../NoData';
import {DateFormat} from '../Helper';

const GET_ACTIVITIES = gql`
  query Get_Activities($id: ID!) {
    user(id: $id) {
      student {
        kelas {
          lesson_histories(limit: 3, sort: "tanggal:desc") {
            id
            pelajaran
            tanggal
          }
        }
      }
    }
  }
`;

const Item = ({title, date}) => (
  <View style={styles.container}>
    <Text style={{color: '#71717A'}}>{title}</Text>
    <Text style={{color: '#A1A1AA'}}>{DateFormat(date)}</Text>
  </View>
);

const renderItem = ({item}) => (
  <Item key={item.id} title={item.pelajaran} date={item.tanggal} />
);

const AktivitasList = () => {
  const {loading, error, data} = useQuery(GET_ACTIVITIES, {
    variables: {id: 28},
    pollInterval: 500,
  });

  if (loading) return <Loading />;
  if (error) return <Error />;

  if (data) {
    return (
      <>
        <FlatList
          data={data.user.student.kelas.lesson_histories}
          renderItem={renderItem}
          ListEmptyComponent={<NoData />}
        />
      </>
    );
  }
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

export default AktivitasList;

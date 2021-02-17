import React, {useState, useEffect} from 'react';
import {View, FlatList, StyleSheet, Text} from 'react-native';
import {useQuery, gql} from '@apollo/client';
import Loading from '../Loading';
import Error from '../Error';
import NoData from '../NoData';
import {DateFormat} from '../Helper';
import Item from '../Item';

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
          data={data.user.student.student_aktivities}
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

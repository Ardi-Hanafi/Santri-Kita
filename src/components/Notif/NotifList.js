import React from 'react';
import {View, FlatList, StyleSheet, Text} from 'react-native';
import {useQuery, gql} from '@apollo/client';
import {dateFormat} from '../Helper'
import Loading from '../Loading';
import Error from '../Error';

const GET_ACTIVITIES = gql`
  query Get_Activities($id: ID!) {
    user(id: $id) {
      student {
        notifications {
          id
          notifikasi
          waktu
          terbaca
          slug
        }
      }
    }
  }
`;

const Item = ({title, date,terbaca}) => (
  <View style={styles.container}>
    <Text style={{color: '#71717A'}}>{title}</Text>
    <Text style={{color: '#A1A1AA', fontSize:11}}>{dateFormat(date)}</Text>
  </View>
);

const renderItem = ({item}) => (
  <Item key={item.id} title={item.notifikasi} terbaca={item.terbaca} date={item.waktu} />
);

const AktivitasList = () => {
  const {loading, error, data} = useQuery(GET_ACTIVITIES, {
    variables: {id: '2'},
  });

  if (loading) return <Loading />;
  if (error) return <Error />;

  if (data) {
    return (
      <>
        <FlatList
          data={data.user.student.notifications}
          renderItem={renderItem}
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
  }
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    marginHorizontal: 25,
    // flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'space-between',
    paddingHorizontal: 25,
    paddingVertical: 20,
    backgroundColor: '#F4F4F5',
    borderRadius: 9
  },
});

export default AktivitasList;

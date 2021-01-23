import React from 'react';
import {View, FlatList, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useQuery, useMutation, gql} from '@apollo/client';
import {dateFormat} from '../Helper';
import Loading from '../Loading';
import Error from '../Error';
import {useNavigation} from '@react-navigation/native';

const GET_ACTIVITIES = gql`
  query Get_Activities($id: ID!) {
    user(id: $id) {
      student {
        notifications(where: {terbaca: false}) {
          id
          notifikasi
          waktu
          slug
        }
      }
    }
  }
`;

const SET_TERBACA = gql`
  mutation Set_Terbaca($id: ID!) {
    updateNotification(input: {where: {id: $id}, data: {terbaca: true}}) {
      notification {
        id
        notifikasi
        terbaca
      }
    }
  }
`;

const Item = (Props) => {
  const navigation = useNavigation();
  const {id, notifikasi, waktu, slug} = Props.data;
  console.log(Props.data)
  const [Set_Terbaca, {data}] = useMutation(SET_TERBACA);

  // ketika user klik diarahkan ke screen sesuai slug
  const handlePress = async (id) => {
    try {
      const dt = await Set_Terbaca({
        variables: {id: id},
      });
      navigation.replace(slug);
    } catch (e) {
      alert('Upsss terjadi masalah');
      console.log(e);
    }
  };

  return (
    <TouchableOpacity
      onPress={() => {
        handlePress(id);
      }}
      style={styles.container}>
      <Text style={{color: '#71717A'}}>{notifikasi}</Text>
      <Text style={{color: '#A1A1AA', fontSize: 11}}>{dateFormat(waktu)}</Text>
    </TouchableOpacity>
  );
};

const renderItem = ({item}) => <Item key={item.id} data={item} />;

const AktivitasList = () => {
  const {loading, error, data} = useQuery(GET_ACTIVITIES, {
    variables: {id: '2'},
    pollInterval: 500,
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
              <Text
                style={{fontSize: 15, color: '#71717A', textAlign: 'center'}}>
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
    borderRadius: 9,
  },
});

export default AktivitasList;

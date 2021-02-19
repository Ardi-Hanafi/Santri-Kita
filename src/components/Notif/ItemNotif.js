import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {useMutation, gql} from '@apollo/client';
import {dateFormat} from '../Helper';

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

export default ItemNotif = (Props) => {
  const navigation = useNavigation();
  const {id, notifikasi, waktu, slug} = Props.data;

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

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    paddingHorizontal: 25,
    paddingVertical: 20,
    backgroundColor: '#F4F4F5',
    borderRadius: 9,
  },
});

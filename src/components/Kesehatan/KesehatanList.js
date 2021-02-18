import React from 'react';
import {Image, View, FlatList, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import theme from '../theme';
import {useQuery, gql} from '@apollo/client';
import Loading from '../Loading';
import Error from '../Error';
import NoData from '../NoData';
import {DateFormat} from '../Helper';
import ItemIcon from '../../components/ItemIcon';

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
      icon={<Icon name="heart" size={30} color="#71717A" style={styles.icon} />}
    />
  );
};

const SilabusList = () => {
  const {loading, error, data} = useQuery(GET_MEDICAL, {
    variables: {id: 28},
    pollInterval: 500,
  });

  if (loading) return <Loading />;
  if (error) return <Error />;

  return (
    <FlatList
      data={data.user.student.medical_histories}
      renderItem={renderItem}
      ListEmptyComponent={<NoData />}
    />
  );
};


export default SilabusList;

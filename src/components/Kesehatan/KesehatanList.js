import React from 'react';
import {Image, View, FlatList, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import theme from '../theme';
import {useQuery, gql} from '@apollo/client';
import Loading from '../Loading';
import Error from '../Error';
import NoData from '../NoData';
import {DateFormat} from '../Helper';

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

const Item = ({title, date}) => (
  <View style={styles.container}>
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <Icon name="heart" size={30} color="#71717A" style={{marginRight: 10}} />
      <Text style={{color: theme.colors.gray5}}>{title}</Text>
    </View>
    <Text style={{color: theme.colors.gray4}}>{date}</Text>
  </View>
);

const renderItem = ({item}) => (
  <Item key={item.id} title={item.penyakit} date={DateFormat(item.tanggal)} />
);

const SilabusList = () => {
  const {loading, error, data} = useQuery(GET_MEDICAL, {
    variables: {id: '2'},
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

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    marginHorizontal: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 25,
    paddingVertical: 20,
    backgroundColor: theme.colors.gray1,
    borderRadius: 8,
  },
});

export default SilabusList;

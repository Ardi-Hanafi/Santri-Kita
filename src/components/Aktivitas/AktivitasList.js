import React, {useState, useEffect} from 'react';
import {View, FlatList, StyleSheet, Text} from 'react-native';
import {useQuery, gql} from '@apollo/client';

const EXCHANGE_RATES = gql`
  query {
    students {
      id
      nama
      kelas {
        kelas
      }
    }
  }
`;

export default AktivitasList = () => {
  // const [data,setData] = useState([]);
  const {loading, error, data} = useQuery(EXCHANGE_RATES,{poolInterval:2000});

  console.log(data);

  // useEffect(()=> {
  //   fetch('https://reqres.in/api/users?page=2')
  //     .then((response) => response.json())
  //     .then((json) => {
  //       setData(json.data)
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // })

  const Item = ({title, date}) => (
    <View style={styles.container}>
      <Text style={{color: '#71717A'}}>{title}</Text>
      <Text style={{color: '#A1A1AA'}}>{date}</Text>
    </View>
  );

  const renderItem = ({item}) => (
    <Item title={item.id} date={item.nama} />
  );

  if(loading) return(<Text>Loading</Text>)
  if(data){
    return (
      <>
        <FlatList
          data={data.students}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
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
  },
});

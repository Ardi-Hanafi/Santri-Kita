import React from 'react';
import Iconet from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';
import {Text, TouchableOpacity,StyleSheet} from 'react-native';

export default Item = ({item}) => {
  const {pelajaran, data} = item;
  const navigation = useNavigation();
  const handleClick = () => {
    navigation.navigate('SilabusDetail', {pelajaran, data});
  };

  return (
    <TouchableOpacity
      onPress={() => handleClick(item)}
      style={styles.container}>
      <Text style={{color: '#333333'}}>{pelajaran}</Text>
      <Iconet name="chevron-right" size={25} color="#333333" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 25,
    paddingVertical: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
    // shadow
    shadowColor: '#999999',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
});

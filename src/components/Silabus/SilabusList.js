import React from 'react';
import {
  Image,
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First hai',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b',
    title: 'First hai',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb2',
    title: 'First hai',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb',
    title: 'First hai',
  },
];


const SilabusList = () => {
  const navigation = useNavigation();
  const handleClick = () => {
    navigation.navigate('SilabusDetail')
  }
  const Item = ({title, date, uji}) => (
    <TouchableOpacity onPress={()=>handleClick()} style={styles.container}>
      <Text style={{ color:'#71717A' }}>{title}</Text>
      <Image
        style={{width: 40, height: 40}}
        source={require('../../assets/Silabus/mdi_chevron_right.png')}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
  
  

  const renderItem = ({item}) => <Item title={item.title} />;

  return (
    <>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    marginHorizontal: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 25,
    paddingVertical: 25,
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

export default SilabusList;

import React from 'react';
import {View, Text} from 'react-native';

const NoData = () => (
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
    <Text style={{color: '#71717A', textAlign: 'center'}}>Tidak ada Data</Text>
  </View>
);

export default NoData;

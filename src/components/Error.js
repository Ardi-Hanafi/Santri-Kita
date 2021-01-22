import React from 'react';
import {View, Text} from 'react-native';
import theme from './theme';

export default Error = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', backgroundColor: '#fff'}}>
      <Text style={{textAlign: 'center',color: '#71717A'}}>Upsss Terjadi Error</Text>
    </View>
  );
};

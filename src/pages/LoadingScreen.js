import React from 'react';
import {ActivityIndicator, View} from 'react-native';

export default LoadingScreen = (Props) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
      }}>
      <ActivityIndicator size="small" color="#10B981" />
    </View>
  );
};

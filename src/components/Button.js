import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

export default Button = (Props) => {
  return (
    <TouchableOpacity
      onPress={() => {
        Props.onPress();
      }}
      style={{
        ...Style.container,
        ...Props.containerStyle,
      }}>
      <Text style={{...Style.title, ...Props.titleStyle}}>{Props.title}</Text>
    </TouchableOpacity>
  );
};

const Style = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: 20,
    backgroundColor: '#10B981',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#FAFAFA',
    fontSize: 18,
  },
});

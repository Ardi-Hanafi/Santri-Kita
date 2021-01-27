import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default Menu = (Props) => {
  const navigation = useNavigation();

  function handleClick() {
    navigation.navigate(Props.navigationName);
  }

  return (
    <TouchableOpacity
      onPress={() => {
        handleClick();
      }}
      style={menuStyle.container}>
      {Props.iconSvg}
      <Text style={menuStyle.text}>{Props.labelText}</Text>
    </TouchableOpacity>
  );
};

const menuStyle = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
    flex: 1,
    borderRadius: 8,
    backgroundColor: '#ffffff',
  },
  text: {
    color: '#71717A',
    fontSize: 12,
  },
});

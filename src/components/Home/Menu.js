import React from 'react';
import {TouchableOpacity, View, Text, Image, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Menu = (Props) => {
  const navigation = useNavigation();

  function handleClick() {
    navigation.navigate(Props.navigationName);
  }

  return (
    <TouchableOpacity
      onPress={() => {
        handleClick();
      }}
      style={styles.container}>
      {Props.iconSvg}
      <Text style={styles.text}>{Props.labelText}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
    flex: 1,
    borderRadius: 8,
    backgroundColor: '#ffffff',
  },
  tinyLogo: {
    width: 40,
    height: 40,
  },
  text: {
    color: '#71717A',
    fontSize: 12,
  },
});

export default Menu;

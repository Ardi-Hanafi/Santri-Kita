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
        {/* <Image
          style={styles.tinyLogo}
          source={Props.imagePath}
          resizeMode="stretch"
        /> */}
        <Text style={{color: '#71717A'}}>{Props.labelText}</Text>
      </TouchableOpacity>
    
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
    // width: 80,
    flex: 1,
    backgroundColor: '#fff',
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
  tinyLogo: {
    width: 40,
    height: 40,
  },
});

export default Menu;

import React from 'react';
import {TouchableOpacity,View, Text, Image, StyleSheet} from 'react-native';

const Menu = (Props) => {
  return (
    <View style={{ alignItems: 'center',}}>
      <TouchableOpacity style={styles.container}>
        <Image
          style={styles.tinyLogo}
          source={Props.imagePath}
          resizeMode="stretch"
        />
      </TouchableOpacity>
      <Text>{Props.labelText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
    width: 80,
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

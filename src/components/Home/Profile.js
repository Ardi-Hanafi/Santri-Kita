import React from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';
import { theme } from '../theme'

const Profile = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: 'https://randomuser.me/api/portraits/men/85.jpg',
        }}
      />
      <Text style={styles.name}>Andrej Lazar</Text>
      <Text style={styles.info}>Asrama 1 | Kelas 5</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 25,
    marginLeft:25,
    marginRight: 25,
    borderRadius: 8,
    alignItems: 'center',
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
  image: {
    width: 120,
    height: 120,
    borderRadius: 120 / 2,
  },
  name: {
    marginTop: 15,
    fontSize: 20,
    fontWeight: 'bold',
    color: theme.colors.brand5
  },
  info:{
    marginTop: 5,
    // fontSize: 15,
    color: theme.colors.gray5,
  }
});

export default Profile;

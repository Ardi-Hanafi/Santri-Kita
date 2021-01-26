import React from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';
import theme from '../theme'

const Profile = (Props) => {
  const data = React.useMemo(()=>{
    return {
      nama : Props.nama,
      kelas : Props.kelas,
      kamar: Props.kamar
    }
  })

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: 'https://randomuser.me/api/portraits/men/85.jpg',
        }}
      />
      <Text style={styles.name}>{data.nama}</Text>
      <Text style={styles.info}>{data.kamar} | {data.kelas}</Text>
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
    borderColor: theme.colors.gray2,
    borderRadius: 9,
    borderWidth: 1
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

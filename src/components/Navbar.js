import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const Navbar = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.containerNavbar}>
      <View style={styles.containerNavbar2}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{
          paddingHorizontal: 20, paddingVertical:10,
          // backgroundColor: 'blue',
        }}>
          <Image
            source={require('../assets/Navbar/home.png')}
            style={{ ...styles.iconNavbar, width:24 }}
          ></Image>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}style={{
          paddingHorizontal: 20, paddingVertical:10,
          // backgroundColor: 'blue',
        }}>
        <Image
            source={require('../assets/Navbar/profile.png')}
            style={{ ...styles.iconNavbar, width:18 }}
          ></Image>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Navbar

const styles = StyleSheet.create({
  containerNavbar: {
    position: 'absolute', bottom: 0,
    width: '100%', height: 50,
    backgroundColor: '#fff',
    justifyContent: 'center',
    borderTopColor: '#E0E0E0', borderTopWidth: 1,
  },
  containerNavbar2: {
    width: '100%',
    backgroundColor: 'transparent',
    flexDirection: 'row', justifyContent: 'space-evenly',
  },
  iconNavbar: {
    height: 20
  },
})

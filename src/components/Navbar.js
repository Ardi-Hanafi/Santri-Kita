import React, {useState,useContext} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import Home from '../assets/Navbar/home.svg';
import HomeActive from '../assets/Navbar/homeActive.svg';
import Profile from '../assets/Navbar/profile.svg';
import ProfileActive from '../assets/Navbar/profileActive.svg';
import {ActivePageContext} from './Context';

const Navbar = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [active, setActive] = useState(true);
  const {setContext, getContext} = React.useContext(ActivePageContext)
  return (

    <View style={styles.containerNavbar}>
      <View style={styles.containerNavbar2}>
        <TouchableOpacity onPress={ () => {
          navigation.navigate('Home'), setContext('Home')} } style={{
          paddingHorizontal: 20, paddingVertical:5,
          // backgroundColor: 'blue',
        }}>
          {[getContext() === "Home" ? <HomeActive/> : <Home/>]}
          {/* {isFocused ? <HomeActive/> : <Home/>} */}
        </TouchableOpacity>
        <TouchableOpacity onPress={ () => {navigation.navigate('Profile'), setContext("Profile")} } style={{
          paddingHorizontal: 20, paddingVertical:5,
          // backgroundColor: 'blue',
        }}>
          {[getContext() === "Profile"  ? <ProfileActive/> : <Profile/>]}
          {/* {isFocused ? <ProfileActive/> : <Profile/> } */}
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

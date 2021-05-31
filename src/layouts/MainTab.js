import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const activeColor = '#10B981';
const inActiveColor = '#A1A1AA';
const fontSize = 10;
const iconSize = 28;

export default MainTab = ({navigation, state}) => {
  return (
    <View style={{...Style.container}}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Home');
        }}
        style={{...Style.iconContainer}}>
        <Icon
          name="home"
          style={{color: state.index == 0 ? activeColor : inActiveColor}}
          size={iconSize}
        />
        <Text
          style={{
            fontSize: fontSize,
            color: state.index == 0 ? activeColor : inActiveColor,
          }}>
          Home
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Profile');
        }}
        style={{...Style.iconContainer}}>
        <Icon
          name="person"
          style={{color: state.index == 1 ? activeColor : inActiveColor}}
          size={iconSize}
        />
        <Text
          style={{
            fontSize: fontSize,
            color: state.index == 1 ? activeColor : inActiveColor,
          }}>
          Profile
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const Style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderColor: '#E5E7EB',
    borderTopWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  iconContainer: {
    alignItems: 'center',
    marginHorizontal: 100,
  },
});

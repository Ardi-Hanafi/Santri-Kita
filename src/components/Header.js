import {useNavigation} from '@react-navigation/core';
import * as React from 'react';
import {StyleSheet} from 'react-native';
import {Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
export default Header = (Props) => {
  const navigation = useNavigation();
  return (
    <View style={Style.container}>
      <View>
        <Text style={Style.title}>Santri Kita</Text>
        <Text style={Style.name}>
          {Props.ustadName || '..................'}
        </Text>
      </View>

      <TouchableOpacity
        style={Style.buttonContainer}
        onPress={() => {
          navigation.navigate('Notif');
        }}>
        <View style={Style.redDot}>
          <Text style={Style.textRedDot}>1</Text>
        </View>
        <Icon name="notifications" size={29} color="#71717A" />
      </TouchableOpacity>
    </View>
  );
};

const Style = StyleSheet.create({
  container: {
    paddingVertical: 19,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    flexDirection: 'row',
    paddingHorizontal: 25,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#828282',
  },
  name: {
    fontSize: 12,
    color: '#71717A',
  },
  buttonContainer: {
    position: 'relative',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  redDot: {
    backgroundColor: '#EB5757',
    zIndex: 11,
    position: 'absolute',
    right: 0,
    top: 0,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginRight: 10,
    height: 15,
    width: 15,
    borderRadius: 10,
  },
  textRedDot: {
    minWidth: 20,
    fontSize: 6,
    textAlign: 'center',
    color: '#fff',
    padding: 2,
  },
});

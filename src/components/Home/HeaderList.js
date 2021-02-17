import React from 'react';
import {View} from 'react-native';
import {Text, StyleSheet} from 'react-native';
import Biaya from './Biaya';
import Menus from './Menus';

export default HeaderList = ({dataBiaya}) => {
  return (
    <View style={Styles.container}>
      <Biaya data={dataBiaya} containerStyle={{marginVertical: 10}} />
      <Menus containerStyle={{marginVertical:10}}/>
      <Text style={Styles.title}>Aktivitas</Text>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    color: theme.colors.gray5,
    marginVertical:10
  },
});

import React from 'react';
import {View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { theme } from '../theme';
import Iconfa from 'react-native-vector-icons/FontAwesome';

const Biaya = () => {
  const navigation = useNavigation();
  function handleClick(){
    navigation.navigate('Biaya');
  }
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Text style={styles.label}>Biaya:</Text>
        <Text style={styles.cost}>Rp 1.000.000</Text>
        <View style={styles.containerStatus} >
        <Text style={styles.status}>Lunas</Text>
        </View>
      </View>
      <View style={styles.right}>
        <TouchableOpacity
          onPress={() => {
            handleClick()
          }}
          style={{padding:10}}
        >
          <Iconfa name='angle-right' size={25} color="#71717A" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    height: 60,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 25,
    paddingRight: 25,
    marginLeft: 25,
    marginRight: 25,
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 8,
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
  right: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    color: theme.colors.gray5,
    marginRight: 5,
  },
  cost: {
    color: theme.colors.gray5,
    fontWeight: 'bold',
  },
  containerStatus: {
    backgroundColor: theme.colors.brand2,
    borderRadius: 3,
    padding: 3, 
    marginLeft: 5
  },
  status: {
    color: theme.colors.brand7,
    fontWeight: 'bold',
  },
});

export default Biaya;

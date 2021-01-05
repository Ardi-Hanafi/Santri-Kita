import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Biaya = () => {
  const navigation = useNavigation();
  function handleClick(){
    navigation.navigate('Biaya');
  }
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Text style={styles.label}>Biaya</Text>
        <Text style={styles.cost}>Rp 1.000.000</Text>
      </View>
      <View style={styles.right}>
        <Text style={styles.status}>Lunas</Text>
        <Button
          title="Detail"
          color="#27AE60"
          onPress={() => {
            handleClick();
          }}
          accessibilityLabel="Tekan untuk melihat detail"
          style={styles.button}
        />
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
    color: '#27AE60',
    marginRight: 25,
  },
  cost: {
    color: '#27AE60',
  },
  status: {
    color: '#27AE60',
    marginRight: 25,
  },
  button: {
    borderRadius: 10,
  },
});

export default Biaya;

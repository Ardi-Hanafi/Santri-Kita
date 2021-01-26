import React from 'react';
import Iconfa from 'react-native-vector-icons/FontAwesome';
import theme from '../theme';
import {useNavigation} from '@react-navigation/native';
import {moneySeparator} from '../Helper';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Biaya = ({data}) => {
  // untuk pindah page
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        navigation.navigate('Biaya');
      }}>
      {/* Detail of Biaya */}
      <View style={styles.left}>
        <Text style={styles.label}>Biaya:</Text>
        {/*  */}
        {data === undefined ? (
          <Text style={styles.cost}>Tidak ada pembayaran</Text>
        ) : (
          <>
            <Text style={styles.cost}>Rp {moneySeparator(data.nominal)}</Text>
            {/* perkondisian sesuai status pembayaran */}
            <Text
              style={[
                styles.status,
                data.status === 'Lulus' ? styles.bgLulus : styles.bgBelum,
              ]}>
              {data.status}
            </Text>
          </>
        )}
      </View>
      {/* button right arrow */}
      <View style={styles.right}>
        <Iconfa name="angle-right" size={25} color="#71717A" />
      </View>
    </TouchableOpacity>
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
    marginTop: 15,
    marginBottom: 20,
    borderRadius: 8,
    borderColor: theme.colors.gray2,
    borderRadius: 9,
    borderWidth: 1,
  },
  right: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
    paddingHorizontal: 15,
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
  bgLunas: {
    backgroundColor: theme.colors.brand2,
    color: theme.colors.brand7,
  },
  bgBelum: {
    backgroundColor: theme.colors.amber100,
    color: theme.colors.amber700,
  },
  status: {
    fontWeight: 'bold',
    borderRadius: 4,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginLeft: 5,
  },
});

export default Biaya;

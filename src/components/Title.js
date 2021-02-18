import React from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import BackBtn from '../assets/backBtn.svg';

const Title = (Props) => {
  const navigation = useNavigation();

  function handleClick() {
    navigation.navigate(Props.backRoute);
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          handleClick();
        }}
        style={{
          position: 'absolute',
          zIndex: 10,
          paddingVertical: 10,
          paddingRight: 20,
        }}>
        <BackBtn height={18} width={18} />
      </TouchableOpacity>
      <Text style={styles.title}>{Props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 25,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontFamily: 'Roboto',

    // fontWeight: 'bold',
    color: '#71717A',
    textAlign: 'center',
    flex: 1,
  },
});

export default Title;

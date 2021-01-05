import React from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

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
        style={{position: 'absolute',zIndex:10}}>
        <Image
          source={require('../assets/backBtn.png')}
          resizeMode="contain"
          style={{height: 25, width: 25}}
        />
      </TouchableOpacity>
      <Text style={styles.title}>{Props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 75,
    flexDirection: 'row',
    marginHorizontal: 25,
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    textAlign: 'center',
    flex: 1,
  },
});

export default Title;

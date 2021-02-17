import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Button from '../Button';
export default FooterList = (Props) => {
  const navigation = useNavigation();
  return (
    <Button
      title="Selengkapnya"
      containerStyle={{marginTop: 5}}
      onPress={() => {
        navigation.navigate('Aktivitas');
      }}
    />
  );
};

import React from 'react';
import {View, Text,TouchableOpacity,StyleSheet} from 'react-native';
import Iconmci from 'react-native-vector-icons/MaterialCommunityIcons';
import theme from '../theme';


export default Item = (Props) => {

  const {bab, kompetensi_dasar, keterangan} = Props.data;
  const [colapse, setColapse] = React.useState(true);
  return (
    <View
      style={{
        marginVertical: 5,
        backgroundColor: '#FAFAFA',
        borderRadius: 8,
      }}>
      <TouchableOpacity
        onPress={() => {
          setColapse(!colapse);
        }}
        style={styles.container}>
        <Text style={{color: theme.colors.gray5, fontWeight: 'bold'}}>
          {bab} : {kompetensi_dasar}
        </Text>
        <View style={{marginLeft: -10}}>
          {colapse ? (
            <Iconmci name="chevron-right" size={20} color="#52525B" />
          ) : (
            <Iconmci name="chevron-down" size={20} color="#52525B" />
          )}
        </View>
      </TouchableOpacity>
      {colapse ? null : (
        <Text
          style={{color: '#52525B', paddingHorizontal: 25, marginVertical: 10}}>
          {keterangan}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 25,
    paddingVertical: 10,
    backgroundColor: theme.colors.gray1,
    borderRadius: 8,
  },
});

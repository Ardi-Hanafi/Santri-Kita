import React from 'react';
import {View, FlatList, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {theme} from '../theme';
import Iconmci from 'react-native-vector-icons/MaterialCommunityIcons';

const Item = (Props) => {
  const {bab, kompetensi_dasar, keterangan} = Props.data;
  const [colapse, setColapse] = React.useState(true);
  return (
    <View
      style={{
        marginVertical: 5,
        marginHorizontal: 25,
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
        <View style={{ marginLeft:-10 }}>
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

const renderItem = ({item}) => {
  return <Item key={item.id} data={item} />;
};

const SilabusListDetail = ({data}) => {
  return (
    <>
      <FlatList
        data={data.data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </>
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

export default SilabusListDetail;

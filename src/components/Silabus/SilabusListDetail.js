import React from 'react';
import {View, FlatList, StyleSheet, Text,TouchableOpacity} from 'react-native';
import {theme} from '../theme';
import Iconmci from 'react-native-vector-icons/MaterialCommunityIcons';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First hai',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b',
    title: 'First hai',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb2',
    title: 'First hai',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb',
    title: 'First hai',
  },
];

const Item = ({title}) => {
  const [colapse, setColapse] = React.useState(true);
  return (
    <View
      style={{
        marginVertical: 5,
        marginHorizontal: 25,
        backgroundColor: '#FAFAFA',
        borderRadius: 8,
      }}>
      <TouchableOpacity onPress={()=>{setColapse(!colapse)}} style={styles.container}>
        <Text style={{color: theme.colors.gray5}}>{title}</Text>
        {colapse ? (<Iconmci name="chevron-right" size={20} color="#52525B" />):(<Iconmci name="chevron-down" size={20} color="#52525B" />)}
        
      </TouchableOpacity>
      {colapse ? null : (
        <Text
          style={{color: '#52525B', paddingHorizontal: 25, marginVertical: 10}}>
          hguyhfgasduygfousydgfuodygouiagydyugsdyug
        </Text>
      )}
    </View>
  );
};

const SilabusListDetail = () => {
  const renderItem = ({item}) => <Item title={item.title} />;

  return (
    <>
      <FlatList
        data={DATA}
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

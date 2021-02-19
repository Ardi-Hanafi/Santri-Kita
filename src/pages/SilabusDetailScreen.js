import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, SafeAreaView, ScrollView, FlatList} from 'react-native';
import Title from '../components/Title';
import Item from '../components/Silabus/ItemSilabusDetail';

const renderItem = ({item}) => {
  return <Item key={item.id} data={item} />;
};

const SilabusScreen = ({route, navigation}) => {
  const data = React.useMemo(() => {
    return route.params;
  });

  return (
    <SafeAreaView style={styles.pageArea}>
      <Title backRoute="Silabus" title={data.pelajaran} />
      <FlatList
        data={data.data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

export default SilabusScreen;

const styles = StyleSheet.create({
  pageArea: {
    height: '100%',
    backgroundColor: '#fff',
    paddingHorizontal: 25,
  },
});

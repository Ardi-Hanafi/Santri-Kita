import 'react-native-gesture-handler';
import React from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import Title from '../components/Title';
import BiayaDetailList from '../components/Biaya/BiayaDetailList';

const BiayaDetailScreen = ({route, navigation}) => {
  const data = React.useMemo(()=>{
    return route.params;
  })
  return (
    <SafeAreaView style={styles.pageArea}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.bagianScroll}>
        <View style={styles.container}>
          <Title backRoute="Biaya" title="Rincian Biaya" />
          <BiayaDetailList data={data} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BiayaDetailScreen;

const styles = StyleSheet.create({
  bagianScroll: {
    backgroundColor: '#fff',
  },
  pageArea: {
    height: '100%',
    backgroundColor: '#fff',
    paddingHorizontal:25
  },
  container: {
    height: '100%',
    width: '100%',
  },
});

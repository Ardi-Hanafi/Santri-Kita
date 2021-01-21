import 'react-native-gesture-handler';
import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import Title from '../components/Title';
import SilabusListDetail from '../components/Silabus/SilabusListDetail';

const SilabusScreen = ({route,navigation}) => {
  const data = React.useMemo(()=>{
    return route.params;
  },[route.params])
  return (
    <SafeAreaView style={styles.pageArea}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.bagianScroll}>
        <Title backRoute="Silabus" title={data.pelajaran} />
        <SilabusListDetail data={data}/>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SilabusScreen;

const styles = StyleSheet.create({
  bagianScroll: {
    backgroundColor: '#fff',
  },
  pageArea: {
    height: '100%',
    backgroundColor: '#fff',
  },
});

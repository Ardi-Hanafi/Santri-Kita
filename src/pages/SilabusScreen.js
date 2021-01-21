import 'react-native-gesture-handler';
import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import Title from '../components/Title';
import SilabusList from '../components/Silabus/SilabusList';

const SilabusScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.pageArea}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.bagianScroll}>
        <Title backRoute="Home" title="Silabus" />
        <SilabusList />
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

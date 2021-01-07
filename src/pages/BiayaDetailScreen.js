import 'react-native-gesture-handler';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Title from '../components/Title';
import BiayaDetailList from '../components/Biaya/BiayaDetailList'

const BiayaDetailScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.pageArea}>
      <Header></Header>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.bagianScroll}> 
        <View style={styles.container} >
          <Title backRoute="Biaya" title="Rincian Biaya" />
          <BiayaDetailList />
        </View>
        
      </ScrollView>
      <Navbar></Navbar>
    </SafeAreaView>
  );
};

export default BiayaDetailScreen;

const styles = StyleSheet.create({
  bagianScroll: {
    backgroundColor: '#fff',
    marginVertical: 50,
  },
  pageArea: {
    height: '100%',
    backgroundColor: '#fff',
  },
  container: {
      height: '100%', width: '100%',
      alignItems: 'center',
  },
});

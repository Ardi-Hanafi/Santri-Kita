import 'react-native-gesture-handler';
import React, {useContext} from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  Button,
  TouchableOpacity,
  Text,
} from 'react-native';
import {AuthContext} from '../components/Context';
import Icon from 'react-native-vector-icons/Ionicons';

const MyButton = (Props) => {
  let {style} = Props;
  if (style === undefined) style = {container: [], title: []};
  return (
    <TouchableOpacity
      onPress={() => {
        Props.onPress();
      }}
      style={{
        width: '100%',
        paddingVertical: 20,
        backgroundColor: '#10B981',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        ...style.container,
      }}>
      <Text style={{color: '#FAFAFA', fontSize: 18, ...style.title}}>
        {Props.title}
      </Text>
    </TouchableOpacity>
  );
};
const HomeScreen = ({navigation}) => {
  const {signOut} = useContext(AuthContext);

  return (
    <SafeAreaView style={styles.pageArea}>
      <View style={styles.container}>
        <MyButton title="Keluar" onPress={signOut} />
      </View>
        <View
          style={{
            position: 'absolute',
            alignItems: 'center',
            flexDirection: 'row',
            bottom: 0,
            marginBottom: 15,
            justifyContent: 'center',
          }}>
          <Text style={{color: '#71717A'}}>Made with </Text>
          <Icon name="ios-heart" size={15} color="#EB5757" />
          <Text style={{color: '#71717A'}}> By DevKita </Text>
        </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  pageArea: {
    height: '100%',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  title2: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
  },
  container: {
    // width: '100%',
    justifyContent: 'center',
    width: 100,
    alignContent: 'center',
    position: 'relative',
  },
});

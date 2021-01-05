import 'react-native-gesture-handler';
import React from 'react'
import { 
    StyleSheet, 
    Text, 
    View, SafeAreaView,
    TouchableOpacity, 
    Button, Image 
} from 'react-native'
import Navbar from '../components/Navbar'
import Header from '../components/Header'


const HomeScreen = ({navigation}) => {
    return (
        <SafeAreaView style={styles.pageArea}>
            <Header></Header>

            <View style={styles.container}>
                <Text style={styles.title} >Home</Text>
            </View>
            
            <Navbar></Navbar>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    pageArea: {
        height: '100%',
        backgroundColor: '#fff',
        justifyContent:'center'
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    },
    container: {
        width: '100%',
        alignContent: 'center',
    },
})

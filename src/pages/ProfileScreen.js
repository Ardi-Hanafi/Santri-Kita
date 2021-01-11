import 'react-native-gesture-handler';
import React,{useContext} from 'react'
import { 
    StyleSheet, 
    Text, 
    View, SafeAreaView,
    TouchableOpacity, 
    Button, Image 
} from 'react-native'
import Navbar from '../components/Navbar'
import Header from '../components/Header'

import {AuthContext} from '../components/Context';

const HomeScreen = ({navigation}) => {
    const {signOut} = useContext(AuthContext);

    return (
        <SafeAreaView style={styles.pageArea}>
            <Header></Header>

            <View style={styles.container}>

                <Button 
                    title="Logout"
                    onPress={() => {
                        signOut();
                    }}
                />
                
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
    title2: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color:'red'
    },
    container: {
        width: '100%',
        alignContent: 'center',
    },
})

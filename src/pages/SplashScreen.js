import React, { useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { theme } from '../components/theme'

const SplashScreen = ({ navigation }) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.replace('MainApp');
        }, 3000)
    }, [navigation]);
    
    return (
        <SafeAreaView style={styles.pageArea}>
            <Text style={styles.title} >SEPLAAZZZ.....</Text>
        </SafeAreaView>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    pageArea: {
        height: '100%', width: '100%',
        backgroundColor: theme.colors.green1,
        justifyContent:'center'
    },
    title: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fff',
    },
})

import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import theme from '../components/theme'

const SplashScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.pageArea}>
            <Text style={styles.title} >Santri Kita</Text>
        </SafeAreaView>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    pageArea: {
        height: '100%', width: '100%',
        backgroundColor: theme.colors.brand5,
        justifyContent:'center'
    },
    title: {
        textAlign: 'center',
        fontFamily: 'Poppins',
        fontSize: 43,
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: 64,
        color: theme.colors.gray50,
    },
})

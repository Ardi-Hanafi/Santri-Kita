import React, { useEffect } from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'

const SplashScreen = ({ navigation }) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.replace('MainApp');
        }, 3000)
    }, [navigation]);
    
    return (
        <SafeAreaView style={styles.pageArea}>
            <View style={styles.container}>
                <Text style={styles.title} >SEPLAAZZZ.....</Text>
            </View>
        </SafeAreaView>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    pageArea: {
        height: '100%',
        backgroundColor: 'green',
        justifyContent:'center'
    },
    title: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fff',
    },
    container: {
        width: '100%',
        alignContent: 'center',
    },
})

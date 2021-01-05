import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import ButtonLg from '../components/ButtonLg'

const LoginScreen = ({navigate}) => {
    return (
        <SafeAreaView style={styles.pageArea} >
            <Text style={styles.title} >
                Santri Kita
            </Text>
            <Image
                source={require('../assets/Login/gbrlogin.png')}
                style={styles.gbrlogin}
            ></Image>

            <View style={styles.containerInput}>
            <Input
                style={styles.inputLogin}
                placeholder='Username'
            />
            <Input
                placeholder='Password'
                secureTextEntry={true}
            />
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('MainApp')}>
                <ButtonLg></ButtonLg>
            </TouchableOpacity>

        </SafeAreaView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    pageArea: {
        height: '100%', width: '100%',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    title: {
        fontFamily: 'Roboto', fontWeight: 'bold',
        fontSize: 24, textAlign: 'center',
        color: '#27AE60', marginTop: '10%'
    },
    gbrlogin: {
        width: 300, height: 185,
        marginTop: '12%',
    },
    containerInput: {
        width: 290,
        marginVertical: '20%',
    },
})

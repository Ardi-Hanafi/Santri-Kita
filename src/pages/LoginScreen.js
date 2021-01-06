import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import ButtonLg from '../components/ButtonLg'

const LoginScreen = ({navigate}) => {
    return (
        <SafeAreaView>
        <ScrollView style={styles.pageArea} > 
        <View style={styles.container} >
            <Text style={styles.title} >
                Santri Kita
            </Text>
            <Image
                source={require('../assets/Login/gbrlogin.png')}
                style={styles.gbrlogin}
            ></Image>

            <View style={styles.containerInput}>
            <Input
                placeholder='Username'
                returnKeyType='next'
            />
            <Input
                placeholder='Password'
                secureTextEntry={true}
                returnKeyType='done'
            />
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('MainApp')}>
                <ButtonLg></ButtonLg>
            </TouchableOpacity>
        </View>
        </ScrollView>
        </SafeAreaView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    pageArea: {
        height: '100%', width: '100%', 
        backgroundColor: '#fff',
    },
    container: {
        width: '100%', height: '100%',
        alignItems: 'center'
    },
    title: {
        fontFamily: 'Roboto', fontWeight: 'bold',
        fontSize: 24, textAlign: 'center',
        color: '#27AE60', 
        marginTop: '10%',
    },
    gbrlogin: {
        width: 300, height: 185,
        marginTop: '12%',
    },
    containerInput: {
        width: 290,
        marginVertical: '15%',
    },
})

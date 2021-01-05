import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const ButtonLg = () => {
    return (
        <TouchableOpacity style={styles.btnLogin} >
            <Text style={styles.textBtnLogin} >Masuk</Text>
        </TouchableOpacity>
    )
}

export default ButtonLg

const styles = StyleSheet.create({
    btnLogin: {
        width: 270, height: 50,
        backgroundColor: '#27AE60', borderRadius: 7,
        justifyContent: 'center',
    },
    textBtnLogin: {
        fontFamily: 'Roboto', fontWeight:'bold',
        fontSize: 12, textAlign: 'center',
        color: '#F2F2F2',
    },
})

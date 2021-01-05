import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';


const Header = () => {
    return (
        <View style={styles.containerHeader}>
            <View style={styles.containerHeader2}>
                <Text style={styles.headerText}>
                    Santri Kita
                </Text>
                <TouchableOpacity>
                    <Image 
                        source={require('../assets/Header/notif.png')}
                        style={styles.iconNotif}>
                    </Image>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    containerHeader: {
      position: 'absolute', top: 0,
      width: '100%', height: 50,
      backgroundColor: '#fff',
      justifyContent: 'center',
      borderBottomColor: '#E0E0E0', borderBottomWidth: 1,
    },
    containerHeader2: {
      width: '100%',
      backgroundColor: 'transparent',
      flexDirection: 'row', justifyContent: 'space-between',
    },
    headerText: {
      fontFamily: 'Roboto', marginLeft: '7%',
      fontSize: 16, fontWeight: 'bold',
      color: '#828282',
    },
    iconNotif: {
        height:17, width: 15.6,
        // backgroundColor: 'blue',
        marginRight: '7%'
    },
  })

import { Text, View, Image, StyleSheet, TextInput, Dimensions } from 'react-native'
import React, { Component } from 'react'
import Colors from '../../Shared/Colors';

export default class Header extends Component {
  render() {
    return (
        <View style={styles.mainView}>
            <Image source={require('./../../../assets/logo.png')}
            style={styles.logo}/>
            <View>
                <TextInput placeholder='Search'
                style={styles.searchBar}
                />
            </View>
            <View>
                <Image source={require('./../../../assets/user.png')}
                style= {styles.userImage}
                />
            </View>
      </View>
    )
  }
}

// styles
const styles = StyleSheet.create({
    mainView: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap:10,
    },
    logo: {
        width: 50,
        height: 50
    },
    searchBar: {
        borderWidth: 1,
        borderColor: Colors,
        padding: 3,
        borderRadius: 10,
        paddingLeft: 10,
        width: Dimensions.get('screen').width * 0.5,
        gap: 10
    },
    userImage: {
        height: 50,
        width: 50,

    }
});
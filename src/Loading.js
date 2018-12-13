import React, {Component} from 'react';
import {StyleSheet, View, Image} from 'react-native';

export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../images/logo.png')} resizeMode='contain' style={styles.Image}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor : '#ff7675',
        justifyContent: 'center',
        alignItems: 'center',
    },
    Loading : {
        textAlign : 'center',
        textAlignVertical : 'center'
    },
    Image :{
        width : 50,
        height : 50,
    }
});

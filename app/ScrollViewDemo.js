'use strict';
import React,{Component} from 'react'
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
} from 'react-native';

export default class ScrollViewDemo extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    进行测试ScrollView控件
                </Text>
                <ScrollView showsVerticalScrollIndicator={true}
                            contentContainerStyle={styles.contentContainer}>
                    <Text
                        style={{color:'#FFF',margin:5,fontSize:16,backgroundColor:"blue"}}>
                        Shake or press menu button for dev menuShake or press menu button for dev menu
                        Shake or press menu button for dev menuShake or press menu button for dev menu
                        Shake or press menu button for dev menuShake or press menu button for dev menu
                        Shake or press menu button for dev menuShake or press menu button for dev menu
                        Shake or press menu button for dev menuShake or press menu button for dev menu
                        Shake or press menu button for dev menuShake or press menu button for dev menu
                        Shake or press menu button for dev menuShake or press menu button for dev menu
                        Shake or press menu button for dev menuShake or press menu button for dev menu
                        Shake or press menu button for dev menuShake or press menu button for dev menu
                        Shake or press menu button for dev menuShake or press menu button for dev menu
                        Shake or press menu button for dev menuShake or press menu button for dev menu
                        Shake or press menu button for dev menuShake or press menu button for dev menu
                        Shake or press menu button for dev menuShake or press menu button for dev menu
                        Shake or press menu button for dev menuShake or press menu button for dev menu
                        Shake or press menu button for dev menuShake or press menu button for dev menu
                        Shake or press menu button for dev menuShake or press menu button for dev menu
                        Shake or press menu button for dev menuShake or press menu button for dev menu
                        Shake or press menu button for dev menuShake or press menu button for dev menu
                        Shake or press menu button for dev menuShake or press menu button for dev menu
                        Shake or press menu button for dev menuShake or press menu button for dev menu
                        Shake or press menu button for dev menuShake or press menu button for dev menu
                        Shake or press menu button for dev menuShake or press menu button for dev menu
                        Shake or press menu button for dev menuShake or press menu button for dev menu
                        Shake or press menu button for dev menuShake or press menu button for dev menu
                        Shake or press menu button for dev menuShake or press menu button for dev menu
                        Shake or press menu button for dev menuShake or press menu button for dev menu
                        Shake or press menu button for dev menuShake or press menu button for dev menu
                    </Text>
                </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        height:400,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    contentContainer: {
        margin:10,
        backgroundColor:"#ff0000",
    }
});
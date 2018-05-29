'use strict'
import React,{Component} from 'react'
import {
    StyleSheet,
    Text,
    View,
    ToastAndroid,
    TouchableHighlight
} from 'react-native'

class CustomButton extends Component{
    render(){
        return(
            <TouchableHighlight
            style={styles.button}
            underlayColor='#a5a5a5'
            onPress={this.props.onPress}>
                <Text style={styles.buttonText}>{this.props.text}</Text>
            </TouchableHighlight>
        )
    }
}
export default class ToastAndroidDemo extends Component{
    render(){
        return(
            <View>
                <Text style={styles.welcome}>点击弹出断时间的toast</Text>
                <CustomButton text="点击弹出短时间toast"
                              onPress={()=>ToastAndroid.show('点击我好疼,短时间的~',ToastAndroid.SHORT)}/>
                <Text style={styles.welcome}>
                    点击弹出长时间的toast
                </Text>
                <CustomButton text="点击弹出长时间toast"
                              onPress={()=>ToastAndroid.show('点击我好疼,长时间的~',ToastAndroid.LONG)}/>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    button: {
        margin:5,
        backgroundColor: 'white',
        padding: 15,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#cdcdcd',
    }
});
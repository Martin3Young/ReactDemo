'use strict'
import React,{Component} from 'react'
import {
    StyleSheet,
    Text,
    View,
    StatusBar,
    TouchableHighlight,
} from 'react-native'

class CustomButton extends Component{
    render(){
        return(
            <TouchableHighlight
                style={styles.button}
                underlayColor='#a5a5a5'
                onPress={this.props.onPress}
            >
                <Text style={styles.buttonText}>{this.props.text}</Text>
            </TouchableHighlight>
        )
    }
}
export default class StatusBarDemo extends Component{
    constructor(props){
        super(props)
        this.state={}
    }
    render(){
        return(
            <View>
                <StatusBar
                backgroundColor='#ff0000'
                translucent={true}
                hidden={true}
                animated={true}>
                </StatusBar>
                <CustomButton text='状态栏隐藏透明效果'/>
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
'use strict';
import React,{Component} from 'react'
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    TouchableOpacity,
    TouchableNativeFeedback
} from 'react-native';

export default class TouchableDemo extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text >
                    TouchableHighlight实例
                </Text>
                <TouchableHighlight
                    underlayColor="rgb(210, 230, 255)"
                    activeOpacity={0.5}
                    style={{ borderRadius: 8,padding: 6,marginTop:5}}
                >
                    <Text style={{fontSize:16}}>点击我</Text>
                </TouchableHighlight>
                <Text>
                    TouchableOpacity实例
                </Text>
                <TouchableOpacity style={{marginTop:20}}>
                    <Text style={{fontSize:16}}>点击改变透明度</Text>
                </TouchableOpacity>
                <TouchableNativeFeedback style={{marginTop:20}}>
                    <View style={{width: 150, height: 100, backgroundColor: 'red'}}>
                        <Text style={{margin: 30}}>Button</Text>
                    </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback style={{marginTop:20}}
                                         background={TouchableNativeFeedback.SelectableBackground()}>
                    <View style={{width: 150, height: 100,}}>
                        <Text style={{margin: 30}}>Button</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    button: {
        color: '#007AFF',
    },
    wrapper: {
        borderRadius: 8,
    },
    eventLogBox: {
        padding: 10,
        margin: 10,
        height: 120,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#f0f0f0',
        backgroundColor: '#f9f9f9',
    },
});
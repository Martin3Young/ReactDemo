'use strict'
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ProgressBarAndroid
} from 'react-native'

export default class ProgressBarDemo extends Component{
    render(){
        return(
            <View>
                <Text>
                    ProgressBarAndroid控件实例
                </Text>
                <ProgressBarAndroid color='red' styleAttr='Inverse'/>
                <ProgressBarAndroid color='green'  progress={0.2} styleAttr='Horizontal'
                                    indeterminate={false} style={{marginTop:10}}/>
                <ProgressBarAndroid color='green' styleAttr='Horizontal'
                                    indeterminate={true} style={{marginTop:10}}/>
                <ProgressBarAndroid color='black' styleAttr='SmallInverse'
                style={{marginTop:10}}/>
                <ProgressBarAndroid styleAttr='LargeInverse'
                style={{marginTop:10}}/>
            </View>
        )
    }
}
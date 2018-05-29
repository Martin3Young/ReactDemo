'use strict';
import React,{Component} from 'react'
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
var ToolbarAndroid = require('ToolbarAndroid');
export default class ToolBarAndroidDemo extends Component {
    render() {
        return (
            <View>
            <ToolbarAndroid
                actions={toolbarActions}
                navIcon={require('../img/setting.png')}
                style={styles.toolbar}
                subtitle="副标题"
                title="主标题"></ToolbarAndroid>
                <ToolbarAndroid
                    actions={toolbarActions}
                    style={styles.toolbar}
                    title="只存在标题"></ToolbarAndroid>
                <ToolbarAndroid
                    navIcon={require('../img/setting.png')}
                    logo={require('../img/setting.png')}
                    actions={toolbarActions}
                    style={styles.toolbar}
                >
                </ToolbarAndroid>
                <ToolbarAndroid>
                    <Text>
                        标题
                    </Text>
                </ToolbarAndroid>
            </View>
        );
    }
}
var toolbarActions = [
    {title: 'Create', icon: require('../img/setting.png'), show: 'always'},
    {title: 'Filter'},
    {title: 'Settings', icon: require('../img/setting.png'), show: 'always' },
];
const styles = StyleSheet.create({
    toolbar: {
        backgroundColor: '#e9eaed',
        height: 56,
    },
});
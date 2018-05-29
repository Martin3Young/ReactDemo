'use strict'
import React,{Component} from 'react'
import {
    StyleSheet,
    Text,
    View,
    AppState,
    ToastAndroid
} from 'react-native'

export default class AppStateDemo extends Component{
    constructor(props){
        super(props)
        this._handleAppStateChange = this.handleAppStateChange.bind(this);
        this.state = {
            _appState:AppState.currentState,
            _changeMessage:''
        }
    }
    componentWillMount(){
        AppState.addEventListener('change',this._handleAppStateChange)
    }
    componentWillUnmount(){
        AppState.removeEventListener('change',this._handleAppStateChange)
    }
    handleAppStateChange(appState){
        ToastAndroid.show('当前状态为：'+appState,ToastAndroid.SHORT)
    }
    render(){
        return(
            <View style={styles.container}>
                <Text>当前app状态信息如下：</Text>
                <Text>
                    {this.state._appState}
                </Text>
            </View>
        )
    }

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});
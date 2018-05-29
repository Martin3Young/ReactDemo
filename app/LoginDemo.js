'use strict'
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View,
    TextInput,
    TouchableHighlight
} from 'react-native'

export default class LoginDemo extends Component{

    constructor (props){
        super(props);
        this.state={
            userName:null,
            userPswd:null,
        }
    }

    clickButtonEvent(string) {
        console.log('点击了button')
        alert('点击了button'+string)

    }

    render() {
        return (
            <View style={{backgroundColor:'#f4f4f4',flex:1}}>
                <Image
                    style={styles.style_image}
                    source={require('../img/app_icon.jpeg')}/>
                <TextInput
                    style={styles.style_user_input}
                    placeholder='QQ号/手机号/邮箱'
                    numberOfLines={1}
                    autoFocus={true}
                    underlineColorAndroid={'transparent'}
                    textAlign='center'
                    onChangeText={
                        (text)=>{
                        this.state.userName=text
                    }}
                />
                <View
                    style={{height:1,backgroundColor:'#f4f4f4'}}
                />
                <TextInput
                    style={styles.style_pwd_input}
                    placeholder='密码'
                    numberOfLines={1}
                    underlineColorAndroid={'transparent'}
                    secureTextEntry={true}
                    textAlign='center'
                    onChangeText={
                        (text)=>{
                            this.state.userPswd=text
                        }}
                />
                <TouchableHighlight
                    style={styles.style_view_commit}
                    onPress={()=>this.clickButtonEvent(this.state.userName+this.state.userPswd)}
                >
                    <Text style={{color:'#fff'}}>
                        登录
                    </Text>

                </TouchableHighlight>

                <View style={{flex:1,flexDirection:'row',alignItems: 'flex-end',bottom:10}}>
                    <Text style={styles.style_view_unlogin}>
                        无法登录?
                    </Text>
                    <Text style={styles.style_view_register}>
                        新用户
                    </Text>
                </View>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    style_image:{
        borderRadius:35,
        height:70,
        width:70,
        marginTop:40,
        alignSelf:'center',
    },
    style_user_input:{
        backgroundColor:'#fff',
        marginTop:20,
        height:40,
    },
    style_pwd_input:{
        backgroundColor:'#fff',
        height:40,
    },
    style_view_commit:{
        marginTop:15,
        marginLeft:10,
        marginRight:10,
        backgroundColor:'#63B8FF',
        height:35,
        borderRadius:5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    style_view_unlogin:{
        fontSize:12,
        color:'#63B8FF',
        marginLeft:10,
    },
    style_view_register:{
        fontSize:12,
        color:'#63B8FF',
        marginRight:10,
        alignItems:'flex-end',
        flex:1,
        flexDirection:'row',
        textAlign:'right',
    }
});
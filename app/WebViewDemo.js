'use strict'

import React,{Component} from 'react'
import {
    Text,
    View,
    WebView,
    StyleSheet
} from 'react-native'

var DEFAULT_URL = 'http://www.lcode.org';

const HTML = `
<!DOCTYPE html>\n
<html>
  <head>
    <title>HTML字符串</title>
    <meta http-equiv="content-type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=320, user-scalable=no">
    <style type="text/css">
      body {
        margin: 0;
        padding: 0;
        font: 62.5% arial, sans-serif;
        background: #ccc;
      }
      h1 {
        padding: 45px;
        margin: 0;
        text-align: center;
        color: #33f;
      }
    </style>
  </head>
  <body>
    <h1>加载静态的HTML文本信息</h1>
  </body>
</html>
`;

export default class WebViewDemo extends Component{

    render(){
        return(
        <View style={{flex:1}}>
            <Text style={{height:40}}>简单的网页显示</Text>
            <WebView style={styles.webview_style}
                     html={HTML}
                     startInLoadingState={true}
                     domStorageEnabled={true}
                     javaScriptEnabled={true}
            >
            </WebView>
        </View>
        )
    }

}

var styles = StyleSheet.create({
    webview_style:{
        backgroundColor:'#00ff00',
    }
});
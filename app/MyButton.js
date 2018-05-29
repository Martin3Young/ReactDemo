import React,{Component} from 'react'
import FadeInView from "./FadeInView"
import {Button,TouchableHighlight,TouchableOpacity,View,Text} from 'react-native'

export default class MyButton extends Component {
    clickButtonEvent() {
        console.log('点击了button')
        alert('点击了button')
    }
    _onLongPressButton() {
        console.log("You tapped the button!");
        alert('longPressButton!')
    }

    render() {
        return (
            <View>
                <Button title='我是按钮'
                        onPress={this.clickButtonEvent}
                />

                <TouchableHighlight underlayColor={'#ff0000'} onPress={this.clickButtonEvent}>
                    <Text>我是按钮</Text>
                </TouchableHighlight>

                <TouchableOpacity onPress={this.clickButtonEvent}>
                    <View>
                        <Text style={{fontSize: 16, color: '#000'}}>我是按钮</Text>
                    </View>
                </TouchableOpacity>

                <TouchableHighlight onLongPress={this._onLongPressButton}>
                    <Text>Button</Text>
                </TouchableHighlight>
                <FadeInView style={{width: 250, height: 50, backgroundColor: 'powderblue'}}>
                    <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>Fading in</Text>
                </FadeInView>
            </View>
        );
    }

}



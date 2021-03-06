'user strict'
import React,{Component} from 'react'
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
} from 'react-native'
import {Navigator} from 'react-native-deprecated-custom-components'

class NavButton extends Component{
    render(){
        return(
            <TouchableHighlight
            style={styles.button}
            underlayColor='#b5b5b5'
            onPress={this.props.onPress}>
                <Text style={styles.buttonText}>{this.props.text}</Text>
            </TouchableHighlight>
        )
    }
}
class NavMenu extends Component{
    render(){
        return(
            <View style={styles.scenes}>
                <Text style={styles.messageText}>{this.props.message}</Text>
                <NavButton
                    onPress={() => {
                        this.props.navigator.push({
                            message: '向右拖拽关闭页面',
                            sceneConfig: Navigator.SceneConfigs.FloatFromRight,
                        });
                    }}
                    text="从右边向左切入页面(带有透明度变化)"
                />
                <NavButton
                    onPress={() => {
                        this.props.navigator.push({
                            message: '向下拖拽关闭页面',
                            sceneConfig: Navigator.SceneConfigs.FloatFromBottom,
                        });
                    }}
                    text="从下往上切入页面(带有透明度变化)"
                />
                <NavButton
                    onPress={()=>{
                        this.props.navigator.pop();
                    }}
                    text='页面弹出(退回一页)'
                />
                <NavButton
                    onPress={()=>{
                        this.props.navigator.popToTop();
                    }}
                    text='页面弹出（退回到最后一页）'
                />
            </View>
        )
    }
}
export default class NavigatorDemo extends Component{
    render(){
        return(
            <Navigator
                style={styles.container}
                initialRoute={{message:'初始页面'}}
                renderScene={(route,navigator)=> <NavMenu
                    message={route.message}
                    navigator={navigator}
                />}
                configureScene={(route)=>{
                    if(route.sceneConfig){
                        return route.sceneConfig;
                    }
                    return Navigator.SceneConfigs.FloatFromBottom;
                }}
            />
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    messageText:{
      fontSize:17,
      fontWeight:'500',
      padding:15,
      marginTop:50,
      marginLeft:15,
    },
    button:{
        backgroundColor:'white',
        padding:15,
        borderBottomWidth:StyleSheet.hairlineWidth,
        borderBottomColor:'#cdcdcd',
    }

})
'use strict'
import React,{Component} from 'react'
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    Modal,
    Switch
} from 'react-native'

class Button extends Component{
    constructor(props){
        super(props)
        this.state={
            active:false
        }
        this._onHighlight = this.onHighlight.bind(this);
        this._onUnhighlight = this.onUnhighlight.bind(this);
    }
    onHighlight(){
        this.setState({active:true})
    }

    onUnhighlight(){
        this.setState({active:false})
    }
    render(){
        var colorStyle = {
            color:this.state.active?'#fff':'#000'
        }
        return(
            <TouchableHighlight
            onHideUnderlay={this._onUnhighlight}
            onPress={this.props.onPress}
            onShowUnderlay={this._onHighlight}
            style={[styles.button,this.props.style]}
            underlayColor='#a9d9d4'>
                <Text style={[styles.buttonText,colorStyle]}>{this.props.children}</Text>
            </TouchableHighlight>
        )
    }
}

export default class ModalDemo extends Component{
    constructor(props){
        super(props)
        this.state={
            animationType:false,
            modalVisible:false,
            transparent:false
        }
        this._toggleTransparent = this.toggleTransparent.bind(this);
    }

    _setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    _setAnimationType(type) {
        this.setState({animationType: type});
    }

    toggleTransparent() {
        this.setState({transparent: !this.state.transparent});
    }
    render(){
        const modalBackgroundStyle = {
            backgroundColor:this.state.transparent?'rgba(0,0,0,0.5)':'#f5f5f5'
        }
        const innerContainerTransparentStyle = this.state.transparent?{backgroundColor:'red',padding:20}:null

        return(
            <View style={{paddingTop:20,paddingLeft:10,paddingRight:10}}>
                <Text style={{color:'red'}}>Model实例演示</Text>
                <Modal
                animation = {this.state.animationType}
                transparent = {this.state.transparent}
                visible = {this.state.modalVisible}
                onRequestClose={()=>
                {this._setModalVisible(false)}}>
                    <View style={[styles.container,modalBackgroundStyle]}>
                        <View style={[styles.innerContainer,innerContainerTransparentStyle]}>
                            <Text>Modal视图被显示：{this.state.animationType===false?'没有':'有',this.state.animationType}动画效果.</Text>
                            <Button onPress={this._setModalVisible.bind(this,false)} style={styles.modalButton}>
                                关闭
                            </Button>
                        </View>
                    </View>
                </Modal>
                <View style={styles.row}>
                    <Text style={styles.rowTitle}>动画类型</Text>
                    <Button onPress={this._setAnimationType.bind(this,false)} style={this.state.animationType===false?{backgroundColor:'red'}:{}}>
                        无动画
                    </Button>
                    <Button onPress={this._setModalVisible.bind(this,true)} style={this.state.animationType===true?{backgroundColor:'yellow'}:{}}>
                        滑动动画
                    </Button>
                </View>

                <View style={styles.row}>
                    <Text style={styles.rowTitle}>透明</Text>
                    <Switch value={this.state.transparent} onValueChange={this._toggleTransparent}/>
                </View>
                <Button onPress={this._setModalVisible.bind(this,true)} style={styles.row}>显示Modal</Button>
            </View>
        )

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    innerContainer: {
        borderRadius: 10,
        alignItems: 'center',
    },
    row: {
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 20,
    },
    rowTitle: {
        flex: 1,
        fontWeight: 'bold',
    },
    button: {
        borderRadius: 5,
        flex: 1,
        height: 44,
        alignSelf: 'stretch',
        justifyContent: 'center',
        overflow: 'hidden',
    },
    buttonText: {
        fontSize: 18,
        margin: 5,
        textAlign: 'center',
    },
    modalButton: {
        marginTop: 10,
    },
});



























import React,{Component} from 'react';
import {Image} from 'react-native';

export default class Bananas extends Component{
    render(){
        let pic ={
            uri:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526991035263&di=c99636c58ad7c4eb0741b9d6568830ae&imgtype=0&src=http%3A%2F%2Fimage.uczzd.cn%2F13993655298642575920.jpg%3Fid%3D0%26width%3D288%26height%3D160'
        }
        return(
            <Image source={pic} style={{width:193,height:110}}/>
        )
    }
}
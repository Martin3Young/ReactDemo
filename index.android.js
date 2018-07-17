/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {AppRegistry} from 'react-native';

var app;
import HelloWorld from "./app/HelloWorld";
import ba from "./app/Bananas"
import greeting from "./app/Greeting"
import blink from "./app/Blink"
import style from "./app/LotsOfStyles"
import FlexDimensionsBasics from "./app/FlexDimensionsBasics"
import PizzaTranslator from "./app/PizzaTranslator"
import IScrolledDownAndWhatHappenedNextShockedMe from "./app/IScrolledDownAndWhatHappenedNextShockedMe"
import ListViewBasics from "./app/ListViewBasics"
import MyButton from "./app/MyButton"
import ActivityIndicatorDemo from "./app/ActivityIndicatorDemo"
import LoginDemo from "./app/LoginDemo"
import ProgressBarDemo from "./app/ProgressBarDemo"
import DrawerLayoutDemo from "./app/DrawerLayoutDemo"
import ScrollViewDemo from "./app/ScrollViewDemo"
import ToolBarAndroidDemo from "./app/ToolBarAndroidDemo"
import {ViewPagerDemo} from "./app/ViewPageDemo"
import TouchableDemo from "./app/TouchableDemo"
import {PullToRefreshDemo} from "./app/PullToRefreshDemo"
import WebViewDemo from "./app/WebViewDemo"
import NavigatorDemo from "./app/NavigatorDemo"
import ClipBoardDemo from "./app/ClipBoardDemo"
import DataPickerDemo from "./app/DataPickerDemo"
import StatusBarDemo from "./app/StatusBarDemo"
import TimePickerAndroidDemo from "./app/TimePickerAndroidDemo"
import ModalDemo from "./app/ModalDemo"
import ToastAndroidDemo from "./app/ToastAndroidDemo"
import AlertDemo from "./app/AlertDemo"
import AppStateDemo from "./app/AppStateDemo"
import NetInfoDemo from "./app/NetInfoDemo"
import AsyncStorageDemo from "./app/AsyncStorageDemo"
import DimensionsDemo from "./app/DimensionsDemo"
import BackAndroidDemo from "./app/BackAndroidDemo"
import PixelPatioDemo from "./app/PixelPatioDemo"
import ModulesDemo from "./app/ModulesDemo"
import HunheDemo from "./app/HunheDemo"



app = HunheDemo;
AppRegistry.registerComponent('ReactDemo', () => app);

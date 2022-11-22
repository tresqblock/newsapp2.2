import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import MainScreen from './screens/MainScreen'
import DetailsScreen from './screens/DetailsScreen'
import SettingsScreen from './screens/SettingsScreen'
import {Provider} from 'react-redux'
import  {applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'
import reducer from './redux/reducer'
import Icon from 'react-native-vector-icons/FontAwesome'
import * as actionCreators from './redux/actions'


let store = createStore(reducer, applyMiddleware(thunk))


const MainStack = createStackNavigator({
  MainScreen,
  DetailsScreen
},
  {initialRouteName: 'MainScreen'}
)

MainStack.navigationOptions ={
    tabBarIcon: ({focoused, tintColor }) => (
      <Icon name="newspaper-o" size={25} color={tintColor}/>
    )
  
}

SettingsScreen.navigationOptions={
  tabBarIcon: ({focoused, tintColor }) => (
    <Icon name="filter" size={25} color={tintColor}/>
  )
}

const MainTabs = createBottomTabNavigator({
  News: MainStack,
  Categories: SettingsScreen
},{
  tabBarOptions: {
    activeTintColor: '#EE2C2C',
  },
}
) 


const AppContainer = createAppContainer(MainTabs)

export default class App extends React.Component{

  render(){
    return(
    <Provider store={store}><AppContainer/></Provider>
  )}
}



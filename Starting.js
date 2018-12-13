import React, {Component} from 'react';
import {Platform, Button, StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

import MapScreen from "./Map"
import ToDoList from "./ToDoList"
import Setting from "./Setting"
import Schedule from "./Schedule"
import Calendar from "./Calendar"


type Props = {};
export default class App extends Component<Props> {

  pos = 0;

  menuButton = {
    "todolist" : {
      image : 'https://cdn.icon-icons.com/icons2/1416/PNG/512/basic-todolist-pen_97676.png',
      key : ''
    },
    "calendar" : {
      image : 'https://cdn.icon-icons.com/icons2/317/PNG/512/calendar-icon_34471.png',
      key : ''
    },
    "map" : {
      image : 'https://cdn.icon-icons.com/icons2/317/PNG/512/map-map-marker-icon_34394.png',
      key : ''
    },
    "setting" : {
      image : 'https://cdn.icon-icons.com/icons2/154/PNG/512/user_man_setting_21947.png',
      key : ''
    },
  }


  Screen = { 
    "todolist" : ToDoList,
    "calendar" : Calendar,    
    "map" : MapScreen,
    "setting" : Setting,
    "schedule" : Schedule,
  }
  
  state = {
    "screen" : this.Screen['todolist'],
    "screenKey" : "todolist"
  }

  NextScreen = (e) => {
    this.pos += 1
    k = Object.keys(this.Screen)
    screenKey = k[this.pos%k.length]
    this.changeScreen(screenKey)
  }

  // 바꿀 key 입력
  changeScreen(screenKey) {
    this.setState({
      "screenKey" : screenKey,
      "screen" : this.Screen[screenKey]
    })
  }

  render() {
    menuItem = []
    menuItemKeys = Object.keys(this.menuButton)
    for(let i=0; i<menuItemKeys.length; i++) {
      menuItem.push(
        <TouchableOpacity
          style={styles.topButton}
          onPress={()=>this.changeScreen(menuItemKeys[i])}>
          <Image
            style={{height: 50, width: 50,}}
            source={{uri: this.menuButton[menuItemKeys[i]].image}}
          />
        </TouchableOpacity>
      )
    }
    // Screen = this.Screen[this.state.screen]
    const Screen = MapScreen
    return (
      <View style={styles.container}>

        <View style={{flexDirection: 'row', height: 70, backgroundColor: "#ff7675", }}>
          {menuItem}
        </View>

        <this.state.screen/>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1, alignSelf: 'stretch',
    flexDirection: 'column',
  },

  topButton: {
    flex: 1,
    margin: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
});

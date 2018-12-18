import React, {Component} from 'react';
import {Platform, Button, StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, CheckBox} from 'react-native';
import {Dimensions} from "react-native";
import Schedule from './Schedule.json';
import SharedPreferences from 'react-native-shared-preferences';

let today = new Date().toDateString()


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      counter: 0,
      percentage: 0,
      i: 0
    }
    this.Check()
  }

  // 장태진의 한마디 : Arrow Function을 써야 올바른 this를 쓸 수 있음
  Check = () => {
    // this.setState = ({
    // setState 자체가 함수임 ;; 
    this.setState({
      counter: this.state.counter + 1,
      percentage: parseInt((this.state.counter+1) / Schedule.schedules.length * 100)
    });
  }

  render() {

    var List_schedule = [];

    for (var i=0; i < Schedule.schedules.length; i++) {
      List_schedule.push(
        <View style={[styles.todo, {flexDirection: 'row'}]}>

          <CheckBox value={false} onValueChange={this.Check} />

          <Text styles={{color: 'black', fontSize: 40,}}>
            {Schedule.schedules[i].name}
          </Text>

        </View>
      )      


    Achieve = (
      <View style={styles.achieveRate}>
        <Text> 오늘의 할 일 </Text>
        <Text>{Schedule.schedules.length}</Text>
        <Text>개 중 </Text>
        <Text>{this.state.counter}</Text>
        <Text>개 달성! (</Text>
        <Text>{this.state.percentage}</Text>
        <Text>%) </Text>
      </View>
    )}

    return (
      <View style={styles.container}>
        
        <View style={styles.date}>
            <Text style={{color: 'black', size: 20}}>
              {today}
            </Text>
        </View>
        
        {Achieve}
        
        <ScrollView>
          <View style={{backgroundColor: "#ffffff"}}>
            {List_schedule}
          </View>
        </ScrollView>

      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },

  date: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  achieveRate: {
    width: 350 ,
    height: 40,
    borderWidth: 2,
    borderColor: "#ff7675",
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5,
    flexDirection: 'row'
  },

  todo: {
    height: 60,
    width: 350,
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "#fab1a0",
    // justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row'
  },
  
  date: {
    backgroundColor: "#e0dede",
    width: 200,
    height: 30,
    marginTop: 20,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
  }

});

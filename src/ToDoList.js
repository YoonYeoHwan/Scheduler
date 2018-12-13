import React, {Component} from 'react';
import {Platform, Button, StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, CheckBox} from 'react-native';
import {Dimensions} from "react-native";
import Schedule from './Schedule.json';

let today = new Date().toDateString()


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      percentage: 0,
    };
  }

  Check(){
    this.state.counter += 1
    this.state.percentage = this.state.counter / Schedule.schedules.length * 100
    this.state.percentage = parseInt(this.state.percentage)
  }
  


  render() {

    var List_schedule = [];

    for (var i=0; i < Schedule.schedules.length; i++) {
      List_schedule.push(
        <View style={[styles.todo, {flexDirection: 'row'}]}>
          <CheckBox value={false} onChange={() => this.Check()} />
          <Text styles={{color: 'black', fontSize: 20,}}>
            {Schedule.schedules[i].name}
          </Text>
        </View>
      )      


    No_ToDoList = (         
      <View style={[styles.todo, {justifyContent: "center", alignItems: 'center'}]}>
        <TouchableOpacity onPress={() => this.props.change('schedule')}>
          <Image
            style={{height: 25, width: 25}}
            source={{uri: 'https://cdn.icon-icons.com/icons2/1141/PNG/512/1486395885-plus_80605.png'}}
          />
        </TouchableOpacity>
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
            {No_ToDoList}
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
    width: 300 ,
    height: 40,
    // borderRadius: 10,
    borderWidth: 2,
    borderColor: "#ff7675",
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5,
    flexDirection: 'row'
  },

  todo: {
    height: 50,
    width: 300,
    padding: 10,
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: "#fab1a0",
    // borderRadius: 10,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row'
  },
  
  date: {
    backgroundColor: "#e0dede",
    width: 200,
    height: 30,
    // borderRadius: 12,
    marginTop: 10,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
  }

});

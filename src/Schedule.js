import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, AppRegistry, Image, TouchableOpacity, TextInput} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Schedule from './Schedule.json';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '일정',
      spot: '장소',
      date: '날짜',
      lng: '경도',
      lat: '위도',
    };
  }

  Save() {
    if (((isNaN(this.state.lng) && isNaN(this.state.lat)) == false) && (-90 < parseFloat(this.state.lat) < 90) && (-180 < parseFloat(this.state.lng) < 180)) {
        Schedule.schedules.push({
        "name": this.state.name,
        "spot": this.state.spot,
        "date": this.state.date,
        "lng": parseFloat(this.state.lng),
        "lat": parseFloat(this.state.lat)
        })
    }
    else {
      alert("위도 경도 입력이 바르지 않습니다.")
    }
  }

  SaveButton = (
    <TouchableOpacity onPress={() => this.Save()}>
      <View style={styles.button}>
        <Text style={{fontSize: 20, color: 'black'}}>저장</Text>
      </View>
    </TouchableOpacity>
  )
  
  render() {
    return (
      <View style={styles.container}>

      <View style={styles.inputText}>
        <TextInput
          multiline = {false}
          onChangeText={(name) => this.setState({name})}
          value={this.state.name}
        />
     </View>


      <View style={styles.inputText}>
        <TextInput
          multiline = {false}
          onChangeText={(spot) => this.setState({spot})}
          value={this.state.spot}
        />
     </View>

      <View style={styles.inputText}>
        <TextInput
          multiline = {false}
          onChangeText={(date) => this.setState({date})}
          value={this.state.date}
        />
     </View>

     <View style={styles.inputText}>
        <TextInput
          multiline = {false}
          onChangeText={(lng) => this.setState({lng})}
          value={this.state.lng}
        />
     </View>

     <View style={styles.inputText}>
        <TextInput
          multiline = {false}
          onChangeText={(lat) => this.setState({lat})}
          value={this.state.lat}
        />
     </View>


     <View style={{flexDirection: "column", justifyContent: 'center', alignItems: 'center', alignContent: 'flex-end'}}>
      {this.SaveButton}
     </View>
      


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: "#ffffff",
  },

  inputText: {
    borderColor: '#E6E6E6',
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 10,
    paddingLeft: 10,
    height: 40,
    width: 350,
    justifyContent: 'center',
    alignSelf: 'center'
  },

  button: {
    height: 50,
    width: 350,
    backgroundColor: '#ff7675',
    justifyContent: 'center',
    alignItems: 'center'
  },
});

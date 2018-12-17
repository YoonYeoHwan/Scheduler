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
      lng: 1,
      lat: 1,
      user: {
        latitude: 37.610436,
        longitude: 126.995948,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
    },
      markers: [],
      findgps : true,
      stops: []
    };
  }

  getInitialState() {
    return {
      region: {
        latitude: 37.610436,
        longitude: 126.995948,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      },
    };
  }

  onRegionChange(region) {
    this.setState({ region });
  }

  // CancelButton = (
  //   <TouchableOpacity onPress={() => { this.props.change('starting'); }}>
  //     <View style={styles.button1}>
  //       <Text style={{fontSize: 20, color: 'black'}}>취소</Text>
  //     </View>
  //   </TouchableOpacity>
  // )

  Save() {
    Schedule.schedules.push({
      "name": this.state.name,
      "spot": this.state.spot,
      "date": this.state.date,
      "lng": this.state.lng,
      "lat": this.state.lat
    })

  }

  SaveButton = (
    <TouchableOpacity onPress={() => this.Save()}>
      <View style={styles.button2}>
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


      <View style={{height: 240, width: 350, marginBottom: 10, marginTop: 5, justifyContent: 'center', alignSelf: 'center',}}>

      {this.state.findgps ?
              (<MapView style={styles.mapview}
                  showsUserLocation = {true}
                  initialRegion={{
                      latitude: 38.611026,
                      longitude: 126.996917,
                      latitudeDelta: 0.05,
                      longitudeDelta: 0.05,
                  }}
                  region={this.state.user}
                  loadingEnabled={true}
                  rotateEnabled={true}
                  scrollEnabled={true}
                  pitchEnabled={true}
                  zoomEnabled={true}

              >


              </MapView>) :
              (<View style={{flex:1, justifyContent:'space-between', alignItems:'center'}}>
                <Text>    </Text>
                <Text style={{fontSize:30}}>GPS가 잘 동작하지 않습니다</Text>
                <Text>    </Text>
              </View>)
            }


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

  button1: {
    height: 50,
    width: 350,
    backgroundColor: '#A4A4A4',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10
  },

  button2: {
    height: 50,
    width: 350,
    backgroundColor: '#ff7675',
    justifyContent: 'center',
    alignItems: 'center'
  },
  mapview:{
    flex: 1
  }
});
